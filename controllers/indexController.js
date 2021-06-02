const Item = require('../models/item');

module.exports = async (req, res) => {
  const itemCount = await Item.countDocuments({});
  res.render('index', { title: 'Donut Shop Inventory', itemCount });
};
