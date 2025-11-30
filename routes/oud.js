const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// connect to our oud model
let Oud = require('../models/oud');

function requireAuth(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

// GET route for displaying the data from DB --> Read Operation
router.get('/', async (req, res, next) => {
    try {
        const OudList = await Oud.find();
        res.render('Ouds/list', {
            title: 'Ouds',
            OudList: OudList,
            displayName: req.user ? req.user.displayName : ""
        });
    } catch (err) {
        console.log(err);
        res.render('Ouds/list', {
            error: 'Error on the Server'
        });
    }
});

// GET route for displaying the Add Page --> Create Operation
router.get('/add', async (req, res, next) => {
    try {
        res.render('Ouds/add', {
            title: 'Add Oud',
            displayName: req.user ? req.user.displayName : ""
        });
    } catch (err) {
        console.log(err);
        res.render('Ouds/list', {
            error: 'Error on the Server'
        });
    }
});

// POST route for processing the Add Page --> Create Operation
router.post('/add', async (req, res, next) => {
    try {
        let newOud = Oud({
            "name": req.body.name,
            "brand": req.body.brand,
            "quantity": req.body.quantity,
            "description": req.body.description,
            "price": req.body.price
        });

        Oud.create(newOud).then(() => {
            res.redirect('/oud');
        });

    } catch (err) {
        console.log(err);
        res.render('Ouds/list', {
            error: 'Error on the Server'
        });
    }
});

// GET route for displaying the Edit Page --> Update Operation
router.get('/edit/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const oudToEdit = await Oud.findById(id);

        res.render("Ouds/edit", {
            title: 'Edit Oud',
            Oud: oudToEdit,
            displayName: req.user ? req.user.displayName : ""
        });

    } catch (err) {
        console.log(err);
        next(err);
    }
});

// POST route for processing the Edit Page --> Update Operation
router.post('/edit/:id', async (req, res, next) => {
    try {
        let id = req.params.id;

        let updateOud = Oud({
            "_id": id,
            "name": req.body.name,
            "brand": req.body.brand,
            "quantity": req.body.quantity,
            "description": req.body.description,
            "price": req.body.price
        });

        Oud.findByIdAndUpdate(id, updateOud).then(() => {
            res.redirect("/oud");
        });

    } catch (err) {
        console.log(err);
        next(err);
    }
});

// GET route to perform Delete Operation
router.get('/delete/:id', async (req, res, next) => {
    try {
        let id = req.params.id;

        Oud.deleteOne({ _id: id }).then(() => {
            res.redirect("/oud");
        });

    } catch (err) {
        console.log(err);
        next(err);
    }
});

module.exports = router;
