const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.get('/', categoryController.category_list);

router.get('/:id', categoryController.category_detail);

router.get('/create', categoryController.category_create_get);
router.post('/create', categoryController.category_create_post);

router.get('/:id/delete', categoryController.category_delete_get);
router.post('/:id/delete', categoryController.category_delete_post);

router.get('/:id/update', categoryController.category_update_get);
router.post('/:id/update', categoryController.category_update_post);

module.exports = router;
