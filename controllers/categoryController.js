const { body, validationResult } = require('express-validator');

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
  res.render('category_form', { title: 'New Category' });
};

exports.category_create_post = [
  body('name').exists({ checkFalsy: true }).trim().escape(),
  body('description').exists({ checkFalsy: true }).trim().escape(),

  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    let donut;

    if (req.body.donut) {
      donut = true;
    } else {
      donut = false;
    }

    const category = new Category({
      name: req.body.name,
      description: req.body.description,
      donut,
    });

    if (!errors.isEmpty()) {
      // Validation errors. Rerender form with immediate validation
      // TODO make it render inputted data
      res.render('category_form', {
        title: 'New Category',
        category,
        validate: true,
      });
    } else {
      // Data is valid, save
      await category.save();
      res.redirect(category.url);
    }
  },
];

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
