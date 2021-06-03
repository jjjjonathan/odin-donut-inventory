const Item = require('../models/item');
const Category = require('../models/category');

exports.item_list = async (req, res) => {
  const items = await Item.find({}).populate('category');
  res.render('item_list', { title: 'All items', items });
};

exports.item_detail = async (req, res) => {
  const item = await Item.findById(req.params.id).populate('category');
  res.render('item_detail', { title: item.name, item });
};

exports.item_create_get = async (req, res) => {
  const categories = await Category.find({});
  res.render('item_form', { title: 'Add new item', categories });
};

exports.item_create_post = (req, res) => {
  res.send('TODO: Item create POST');
};

exports.item_delete_get = (req, res) => {
  res.send('TODO: Item delete GET');
};

exports.item_delete_post = (req, res) => {
  res.send('TODO: Item delete POST');
};

exports.item_update_get = (req, res) => {
  res.send('TODO: Item update GET');
};

exports.item_update_post = (req, res) => {
  res.send('TODO: Item update POST');
};
