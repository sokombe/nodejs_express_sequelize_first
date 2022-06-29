const productController= require('../controllers/ProductsController.js')


var router=require('express').Router()

router.post('/addproduct',productController.addproduct) // create

router.get('/allProducts',productController.getAllProducts) // read

router.get('/published',productController.getpublishedProduct)



router.get('/:id',productController.getOneProduct)

router.put('/:id',productController.updateProduct) // utdate

router.delete('/:id',productController.deleteProduct) // delete 


// we export the router
module.exports= router