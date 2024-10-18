const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name', // Nombre verdadero del campo en la base de datos 
    },
    phone: {
        allowNull: true,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at', // Nombre verdadero del campo en la base de datos 
        defaultValue: Sequelize.NOW
    },
    userId: {        
        allowNull: false, // todos los clientes deben tener un usuario        
        type: DataTypes.INTEGER,
        field: 'user_id',
        unique: true,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}

class Customer extends Model {
   
    static associate(models){
      // Customer se asocia con User
      // la foreign key esta en Customer             
      this.belongsTo(models.User,{
        as: 'user'
      });

      this.hasMany(models.Order,{
        as: 'orders',
        foreignKey: 'customerId' 
      });
    }
 
    static config(sequelize){
      return {
         sequelize,
         tableName: CUSTOMER_TABLE,
         modelName: 'Customer',
         timestamps: false // evita que se cree el campo "updatedAt"
      }  
    }
 
 }
 
 module.exports = { CUSTOMER_TABLE, CustomerSchema, Customer};