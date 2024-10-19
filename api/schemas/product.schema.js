const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();
const description = Joi.string().min(10);

const categoryId = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const price_min = Joi.number().integer();
const price_max = Joi.number().integer();

const queryProductSchema = Joi.object({
  limit,
  offset,
  price ,
  price_min,
  price_max: price_max.when('price_min',{
    is: Joi.number().integer(),
    then: Joi.required()
  })
  /*
  price_max: price_max.greater(Joi.ref('price_min')),
  })
  .with('price_min', 'price_max')
  .with('price_max', 'price_min')
  */
});  


const createProductSchema = Joi.object({
   name: name.required(),
   price: price.required(),
   image: image.required(),
   description: description.required(),
   categoryId: categoryId.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description,
  categoryId
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema , updateProductSchema, getProductSchema, queryProductSchema};
