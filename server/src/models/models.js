import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize(
    "mysql://kiddie:StrongPass123!@localhost:33061/vilengki"
);

const User = sequelize.define("User", {
    fullname: { type: DataTypes.STRING, allowNull: false, unique: true },
    useremail: { type: DataTypes.STRING, allowNull: false, unique: true },
    userpassword: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone: { type: DataTypes.BIGINT, allowNull: false, unique: true },
    county: { type: DataTypes.STRING, allowNull: false },
    prepaidBalance: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 1000 },
    waterUsage: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 5 }
});

const Admin = sequelize.define("Admin", {
    fullname: { type: DataTypes.STRING, allowNull: false, unique: true },
    adminemail: { type: DataTypes.STRING, allowNull: false, unique: true },
    adminpassword: { type: DataTypes.STRING, allowNull: false, unique: true }
})

const PaymentHistory = sequelize.define("PaymentHistory", {
    fullname: { type: DataTypes.STRING, allowNull: false },
    useremail: { type: DataTypes.STRING, allowNull: false },
    timeCreated: { type: DataTypes.DATE, allowNull: false }
});

const WaterPrice = sequelize.define("WaterPrice", {
    price: { type: DataTypes.FLOAT, allowNull: false }
});


(async () => {
    await sequelize.sync(); // Sync all defined models to the database
    console.log('All models were synchronized successfully.');

}
)();

export { User, PaymentHistory, WaterPrice, Admin }
