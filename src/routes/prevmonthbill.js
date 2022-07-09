const router = require('express').Router();
const PrevModel = require('../model/PrevModel');
const ObjectId = require('mongoose').Types.ObjectId;
router.get('/all', async (req, res) => {
  let resp = await PrevModel.find({});

  res.send({ response: resp });
});
router.get('/paginationsort', async (req, res) => {
  let page = req.query.page;
  console.log(page);
  let resp = await PrevModel.find({})
    .skip(parseInt(page) * 9)
    .limit(9)
    .sort({ amount: -1 });

  res.send({ response: resp });
});

router.get('/filter', async (req, res) => {
  console.log(req.query.id);
  let resp = await PrevModel.find({ _id: req.query.id });
  res.send({ response: resp });
});

router.put('/update', async (req, res) => {
  console.log(req.query.id);
  let resp = await PrevModel.findByIdAndUpdate(
    { _id: ObjectId(req.query.id) },
    req.body
  );
  res.send({ response: resp });
});

router.post('/addbill', async (req, res) => {
  try {
    let resp = PrevModel.create(req.body);

    res.send({ response: 'true' });
  } catch {
    res.send({ response: 'failed' });
  }
});

router.delete('/delete', async (req, res) => {
  console.log(req.query.id);
  let resp = await PrevModel.deleteOne({ _id: ObjectId(req.query.id) });
  res.send({ response: resp });
});

module.exports = router;
