const router = require('express').Router();
const { Expenses } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const expense = await Expenses.findAll;
    res.status(200).json(expense);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const expense = await Expenses.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(expense);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const expense = await Expenses.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!expense) {
      res.status(404).json({ message: 'No report found with this id!' });
      return;
    }

    res.status(200).json(expense);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
