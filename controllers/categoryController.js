const Category = require('../models/category');

exports.category_list = (req, res) => {
  res.send('All categories');
};
