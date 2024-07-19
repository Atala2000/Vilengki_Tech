import { User, PaymentHistory, WaterPrice } from "../models/models.js";
import express from 'express';
import { calcPrice } from "../services/calc..services.js";

export const CalcPrice = async (req, res) => {
    const waterprice = await WaterPrice.findAll({
        attributes : ['price']
    });
    const Usage = await User.findOne({
        attributes : ['waterUsage'],
        where: {
            useremail: "ondiekidaystar@gmail.com"
        }
    });
    const prepBalance = await User.findOne({
        attributes : ['prepaidBalance'],
        where: {
            useremail : 'ondiekidaystar@gmail.com'
        }
    });
    const price = waterprice[0].price;
    const waterUsage = Usage.waterUsage;
    const prepaidBalance = prepBalance.prepaidBalance;
    const result = calcPrice(waterUsage, price, prepaidBalance);
    res.status(200).json(result);
}
