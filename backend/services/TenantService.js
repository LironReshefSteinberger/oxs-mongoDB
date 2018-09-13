const ObjectId = require('mongodb').ObjectId;
const MongoService = require('./MongoService') 

function queryTenants(name, type) {
    console.log('name', name, 'type', type);
    var criteria = {};
    if (name) criteria.name = {$regex : `.*${name}.*`};
    if (type && type === 'has') criteria.debtAmount = {$gt: 0} ;
    else if (type && type === 'no') criteria.debtAmount = {$eq: 0} ;
    console.log('Criteria', criteria);
    return MongoService.connect()
        .then(db => {
            const collection = db.collection('tenant');
            return collection.find(criteria).toArray()
        })
}
function query() {
    console.log('query in service');
    return MongoService.connect()
        .then(db => {
            // console.log('after then in query mongo', db);
            console.log('after then in query mongo');
            const collection = db.collection('tenant');
            return collection.find({}).toArray()
        })
}

function remove(tenantId) {
    tenantId = new ObjectId(tenantId)
    return MongoService.connect()
        .then(db => {
            const collection = db.collection('tenant');
            // console.log('tenantId', tenantId)
            return collection.remove({ _id: tenantId })
        })
}

function update(tenant) {
    tenant._id = new ObjectId(tenant._id)
    return MongoService.connect()
        .then(db => {
            const collection = db.collection('tenant');
            return collection.updateOne({ _id: tenant._id }, { $set: tenant })
                .then(result => {
                    return tenant;
                })
        })
}

function add(tenant) {
    return MongoService.connect()
    .then(db => {
        const collection = db.collection('tenant');
            return collection.insertOne(tenant)
            .then(result => {
                tenant._id = result.insertedId;
                return tenant;
            })
        })
}

function getById(tenantId) {
    tenantId = new ObjectId(tenantId)
    return MongoService.connect()
        .then(db => {
            const collection = db.collection('tenant');
            return collection.findOne({ _id: tenantId })
        })
}

module.exports = {
    queryTenants,
    query,
    remove,
    getById,
    add,
    update
}



