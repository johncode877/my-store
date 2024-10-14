const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

// Schemas para validar la estructura 
// de las tablas de la base de datos  
const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at', // Nombre verdadero del campo en la base de datos 
        defaultValue: Sequelize.NOW
    }
}

class User extends Model {
   
   static associate(){
     // associate
     
   }

   static config(sequelize){
     return {
        sequelize,
        tableName: USER_TABLE,
        modelName: 'User',
        timestamps: false // evita que se cree el campo "updatedAt"
     }  
   }

}

module.exports = { USER_TABLE, UserSchema, User};