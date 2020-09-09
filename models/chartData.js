const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chartDataSchema = new Schema({
    Date:{
        type: String,
        required: true
    },
    Price:{
        type: String,
        required: true
    }
},{collection: 'chartData'});

module.exports = chartData = mongoose.model('chartData', chartDataSchema);