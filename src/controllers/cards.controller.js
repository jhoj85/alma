const cardCtrl = {};

const Card = require('../models/Card');

cardCtrl.getCard = async (req, res) =>{
    try {
        const cards = await Card.find();
        res.json(cards)
    }
    catch (err) {
        res.status(400).json({
            error: err
        });

    }
};

cardCtrl.createCard = async (req,res) =>{
    try {
        const {id, name, surname, age} = req.body;

        const newCard = new Card({id, name, surname, age});
        await newCard.save();
        res.json('Card Creada');
    }
    catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};


cardCtrl.deleteCard = async (req, res) =>{
        const { id } = req.params;
        await Card.findByIdAndRemove(id)
        res.json('Cad Borrada');
}

module.exports = cardCtrl