const { Schema, model } = require('mongoose');

const cardSchema = new Schema(
    {
        id:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
            },
         surname:{
            type: String,
            required: true
            },
        age:{
            type: String,
            required: true
            }
            
    },
    { timestamps: true  }
);

module.exports = model('Card', cardSchema);