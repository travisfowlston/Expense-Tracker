const router=require('express').Router();

const {Expenses, User } = require('../../models');
router.get('/', async (req, res) => {
    try {
        const expense=await Expenses.find({}  
        );
        res.status(200).json(expense);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.post('/', async (req, res) => {
    try {
        const expense=await Expenses.create({
            ...req.body,
            user_id:req.session.user_id,
        });
        res.status(200).json(expense);
    }  catch (err) {
        res.status(400).json(err);
    }
});

module.exports=router;
