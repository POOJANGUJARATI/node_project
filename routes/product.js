const express = require('express');
const router = express.Router()
const types = require('../controller/typec')
const authenticate = require('../middleware/authenticate') 

router.get('/gettype',authenticate ,types.index);
router.post('/stype',authenticate, types.savetype)
router.post('/saveproduct', types.saveproduct)
router.get('/getproducts',authenticate, types.getproduct)
router.post('/update',authenticate ,types.updateproduct)
router.post('/delete', authenticate,types.deleteproduct)
router.get('/recent', authenticate,types.mostrecent)

router.post('/:productID/comment',authenticate,types.comments)
router.post('/like',types.like)
router.post('/dislike',types.dislike)
router.get('/most_like',types.mostLike)
// router.post('/:typeID/type',types.getproductbytype)
router.get('/:id/bytype',authenticate,types.bytype)

module.exports = router;