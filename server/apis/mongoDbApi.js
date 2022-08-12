const express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb');
const { v4 } = require('uuid');


const APPSETTING_MONGO_DB_USERNAME='gustavob'
const APPSETTING_MONGO_DB_PASSWORD='xFdfhnEX6fPjhogu'
const APPSETTING_MONGO_DB_CLUSTER='cluster0'

const uri = `mongodb+srv://${APPSETTING_MONGO_DB_USERNAME}:${APPSETTING_MONGO_DB_PASSWORD}@${APPSETTING_MONGO_DB_CLUSTER}.letvwla.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);


async function initCollection(collection) {
    await client.connect();
    return client.db('docutraps').collection(collection);
}

async function connectDB() {
    await client.connect();
    const db = client.db('docutraps');
    const collection = db.collection('surveys');
    //const result = await collection.insertOne({ _id: v4(), name: 'Test 3', description: 'Third insertion test', answers: [{field_1: 'Answer 1'}, {field_2: 'Answer 2'}]});
    const result = await collection.find({}).toArray();
    
    console.log(['Mongo Connect', result]);
    client.close();
}

async function getCollection(collectionName, params={}, sort={}, res=false) {
    let collection = await initCollection(collectionName);
    let result = await collection.find(params).sort(sort).toArray();
    if (Boolean(res)) {
        res.send(result);
    } else {
        return result;
    }
}

async function insertOne(collectionName, data, res=false) {
    let collection = await initCollection(collectionName);
    let result = await collection.insertOne(data);
    return result;
}

async function updateOne(collectionName, documentId, data, res=false) {
    let collection = await initCollection(collectionName);
    let result = await collection.updateOne({ _id: documentId }, { $set: data });
    return result;
}


router.get('/surveys', async function(req, res, next) {
    // To Do: Get params from req.query
    let surveyResult = await getCollection('surveys');
    res.send(surveyResult);
});

router.post('/surveys', async function(req, res, next) {
    let data = req.body;
    let insertResult = await insertOne('surveys', data);
    res.send(insertResult);
});

router.get('/surveysSubmitted', async function(req, res, next) {
    // To Do: Get params from req.query
    let filterParam = req.query.filter;
    let filter = (Boolean(filterParam) ? JSON.parse(filterParam) : {});
    let sortParam = req.query.sort;
    let sort = (Boolean(sortParam) ? JSON.parse(sortParam) : {});
    let surveyResult = await getCollection('surveysSubmitted', filter, sort);
    res.send(surveyResult);
});

router.post('/surveysSubmitted', async function(req, res, next) {
    let data = req.body;
    let insertResult = await insertOne('surveysSubmitted', data);
    res.send(insertResult);
});

router.get('/cameras', async function(req, res, next) {
    // To Do: Get params from req.query
    // let filterParam = req.query.filter;
    // let filter = {filterParam};

    let cameraResult = await getCollection('cameras');
    res.send(cameraResult);
});

router.post('/cameras', async function(req, res, next) {
    let data = req.body;
    let postResult = await insertOne('cameras', data);
    res.send(postResult);
});

router.patch('/cameras/:cameraId', async function(req, res, next) {
    let cameraId = req.params.cameraId;
    let data = req.body;
    let patchResult = await updateOne('cameras', cameraId, data);
    res.send(patchResult);
});

router.get('/auth/callback', function(req, res, next) {
    console.log(['request', req]);
    res.send(req);
})

exports.router = router;
exports.connectDB = connectDB;