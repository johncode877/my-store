const { Model, DataTypes, Sequelize } = require('sequelize');

const { ORDER_TABLE } = require('./order.model');
const { PRODUCT_TABLE } = require('./product.model');

const ORDER_PRODUCT_TABLE = 'orders_products';

const OrderProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },    
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at', // Nombre verdadero del campo en la base de datos 
        defaultValue: Sequelize.NOW
    },
    amount: {
        allowNull: false,
        type: DataTypes.INTEGER
    },  
    orderId: {        
        allowNull: false, // todos los clientes deben tener un usuario        
        type: DataTypes.INTEGER,
        field: 'order_id',
       
        references: {
            model: ORDER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    productId: {        
        allowNull: false, // todos los clientes deben tener un usuario        
        type: DataTypes.INTEGER,
        field: 'product_id',
        
        references: {
            model: PRODUCT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}

class OrderProduct extends Model {
   
    static associate(models){
      
    }
 
    static config(sequelize){
      return {
         sequelize,
         tableName: ORDER_PRODUCT_TABLE,
         modelName: 'OrderProduct',
         timestamps: false // evita que se cree el campo "updatedAt"
      }  
    }
 
 }
 
 module.exports = { ORDER_PRODUCT_TABLE, OrderProductSchema, OrderProduct};