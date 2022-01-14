var mongoose = require('mongoose');
import {ContactSchema}  from '../models/crmModel'

const Contact = mongoose.model('Contact',ContactSchema)

export const addNewContact = (req,res)=>{
    let newContact = new Contact(req.body);

    newContact.save((err,contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    })
}

export const getContacts = (req,res)=>{
    Contact.find({},(err,contacts)=>{
        if(err){
            res.send(err);
        }
        res.send(contacts);
    });
}
export const getContactById = (req,res)=>{
    Contact.findById(req.params.contactID,(err,contacts)=>{
        if(err){
            res.send(err);
        }
        res.send(contacts);
    });
}
//new must be true
export const updateContact = (req,res)=>{
    Contact.findOneAndUpdate({_id:req.params.contactID},req.body,{new:true, useFindAndModify:false},(err,contact)=>{
        if(err){
            res.send(err);
        }
        res.send(contact);
    });
}
export const deleteContact = (req,res)=>{
    Contact.remove({_id:req.params.contactID},(err,contact)=>{
        if(err){
            res.send(err);
        }
        res.send("Contact Deleted");
    });
}