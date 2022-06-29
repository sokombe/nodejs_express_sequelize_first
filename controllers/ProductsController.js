// we get all models
const db = require('../models')

// create the main Model
const Products = db.products

// main work 

// 1. create product
const addproduct = async (req, res) => {

    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Products.create(info);
    res.status(200)
        .send(product)
    console.log(product)

}

// 2. get all products

const getAllProducts = async (req, res) => {

    let products = await Products.findAll({
        /*   attributes:[ // if we want all attributes, we remove attributes property
          'title',
          'price'
      ] */

    })
    res.status(200).send(products)

}

// 3. get single product

const getOneProduct = async (req, res) => {

    let id = req.params.id
    let product = await Products.findOne({
        where: {
            id: id
        }
    })
    res.status(200).send(product)

}

// 4. get single product

const updateProduct = async (req, res) => {

    let id = req.params.id

    const product = await Products.update(req.body, { where: { id: id } })
    res.status(200).send(product)

}


// 5. delete  product by id

const deleteProduct = async (req, res) => {

    let id = req.params.id

    await Products.destroy({ where: { id: id } })
    res.status(200).send("Product deleted successfully!")

}


// 6. delete  product by id

const getpublishedProduct = async (req, res) => {

    const products = await Products.findAll({ where: { published: true } })
    res.status(200).send(products)

}


module.exports = {
    addproduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getpublishedProduct

}