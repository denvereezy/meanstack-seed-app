const mongojs = require('mongojs');
const db = mongojs('contactlist', ['contactlist']);

exports.show = function(req, res, next) {
    db.contactlist.find(function(err, docs) {
        console.log(docs);
        res.json(docs);
    });
};

exports.add = function(req, res, next) {
    console.log(req.body);
    db.contactlist.insert(req.body, function(err, doc) {
        res.json(doc);
    });
};

exports.edit = function(req, res, next) {
    var id = req.params.id;
    console.log(id);
    db.contactlist.remove({
        _id: mongojs.ObjectId(id)
    }, function(err, doc) {
        res.json(doc);
    });
};

exports.update = function(req, res, next) {
    var id = req.params.id;
    console.log(id);
    db.contactlist.findOne({
        _id: mongojs.ObjectId(id)
    }, function(err, doc) {
        res.json(doc);
    });
};

exports.delete = function(req, res, next) {
    var id = req.params.id;
    console.log(req.body.name);
    db.contactlist.findAndModify({
        query: {
            _id: mongojs.ObjectId(id)
        },
        update: {
            $set: {
                name: req.body.name,
                email: req.body.email,
                number: req.body.number
            }
        },
        new: true
    }, function(err, doc) {
        res.json(doc);
    });
};
