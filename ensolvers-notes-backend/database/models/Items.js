module.exports = (sequelize, dataTypes) => {
    const Items = sequelize.define('Items', {
        item_id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING,
            allowNull: false
        },
        content: {
            type: dataTypes.STRING,
            allowNull: true
        },createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true
        },
        archived: {
            type: dataTypes.BOOLEAN,
            allowNull: true
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        }
    }, { 
        tableName: "items",
        timestamps: true
     })

    return Items;
}