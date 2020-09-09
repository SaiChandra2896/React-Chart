const express = require('express');
const router = express.Router();

const ChartData = require('../../models/chartData');

router.get('/',  async(req,res) =>{
    try {
        const chartData = await ChartData.find();
        res.json(chartData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;