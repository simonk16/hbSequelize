
module.exports = function(){

    var Burger = sequelize.define("Burger", {
        
        burger_name: {
            type: DataTypes.string,
            allowNull: false
        }, 
        devoured: {
            type: DataTypes.boolean
        }
    });
    return Burger;

};