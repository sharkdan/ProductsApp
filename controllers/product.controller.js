const Product = require('../models/product.model');

exports.product_create = function (req,res,next) {
  let product = new Product(
    {
      name: req.body.name,
      price: req.body.price
    }
  );
  
  product.save(function (err) {
    if (err) return next(err);
    res.json('Product Created Successfully');
  });
};

exports.product_list = function (req,res,next) {
  Product.find({}, function (err, products) {
    if (err) return next(err);
    res.json(products);
  })
};

exports.product_details = function (req,res,next) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return next(err);
    res.json(product);
  })
};

exports.product_update = function (req,res,next) {
  Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
    if (err) return next(err);
    res.json('Product updated.');
  });
};

exports.product_delete = function (req,res,next) {
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.json('Deleted product ' + req.params.id + ' successfully.');
  })
};