const { User, UserSchema} = require('./user.model');
const { Customer, CustomerSchema} = require('./customer.model');

const { Category, CategorySchema} = require('./category.model');
const { Product, ProductSchema} = require('./product.model');

function setupModels(sequelize){
   User.init(UserSchema,User.config(sequelize));
   Customer.init(CustomerSchema,Customer.config(sequelize));

   Category.init(CustomerSchema,Category.config(sequelize));   
   Product.init(CustomerSchema,Product.config(sequelize));

   User.associate(sequelize.models);
   Category.associate(sequelize.models);
   Product.associate(sequelize.models);

}

module.exports = setupModels;
