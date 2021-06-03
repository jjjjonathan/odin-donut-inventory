const Category = require('../models/category');
const Item = require('../models/item');

exports.category_list = async (req, res) => {
  const categories = await Category.find({});
  res.render('category_list', { title: 'All categories', categories });
};

exports.category_detail = async (req, res) => {
  const category = await Category.findById(req.params.id);
  const items = await Item.find({ category: req.params.id });
  res.render('category_detail', { title: category.name, category, items });
};

exports.category_create_get = (req, res) => {
  res.send('TODO: Category create GET');
};

exports.category_create_post = (req, res) => {
  res.send('TODO: Category create POST');
};

exports.category_delete_get = (req, res) => {
  res.send('TODO: Category delete GET');
};

exports.category_delete_post = (req, res) => {
  res.send('TODO: Category delete POST');
};

exports.category_update_get = (req, res) => {
  res.send('TODO: Category update GET');
};

exports.category_update_post = (req, res) => {
  res.send('TODO: Category update POST');
};
