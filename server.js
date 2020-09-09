const csvtojson = require('csvtojson');
const mongodb = require('mongodb').MongoClient;

const url = 'mongodb+srv://sai:12345@chart.v3cnm.mongodb.net/chart?retryWrites=true&w=majority';

csvtojson().fromFile('data.csv').then(csvData =>{
    // console.log(csvData);
    mongodb.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, (err,client) =>{
        if (err) console.log(err);
        client.db('chart').collection('chartData').insertMany(csvData,(err,res) =>{
            if(err){
                console.log(err, 'from client')
            }
            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close() 
        });
    })
})