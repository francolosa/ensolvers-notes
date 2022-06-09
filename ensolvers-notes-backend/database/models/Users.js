module.exports = (sequelize, dataTypes) => {
    const Users = sequelize.define('Users', {
        user_id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },        
        userName: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        passWord: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        createdAt: {          
            type: dataTypes.DATE,
        }
    }, { 
        tableName: "Users",
     })

    return Users;
}