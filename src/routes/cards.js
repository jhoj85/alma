const {Router} = require('express');
const router = Router();

const {getCard, createCard, deleteCard} = require('../controllers/cards.controller');

router.route('/')
    .get(getCard)
    .post(createCard);

router.route('/:id')
    .delete(deleteCard);


module.exports = router;