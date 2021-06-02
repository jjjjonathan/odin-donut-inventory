const express = require('express');
const itemController = require('../controllers/itemController');

const router = express.Router();

router.get('/', itemController.item_list);

router.get('/:id', itemController.item_detail);

router.get('/create', itemController.item_create_get);
router.post('/create', itemController.item_create_post);

router.get('/:id/delete', itemController.item_delete_get);
router.post('/:id/delete', itemController.item_delete_post);

router.get('/:id/update', itemController.item_update_get);
router.post('/:id/update', itemController.item_update_post);

module.exports = router;
