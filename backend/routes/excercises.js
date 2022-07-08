const router = require('express').Router();

let Excercise = require('../models/excercise.model');

router.route('/').get((req, res) => {
    Excercise.find()
        .then((excercises) => {
            res.json(excercises);
        }).catch((err) => {
            res.status(400).json('Error:' + err);
        });
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = Date.parse(req.body.date);

    const newExcercise = new Excercise({
        username,
        description,
        duration,
        date,
    });

    newExcercise.save()
        .then(() => {
            res.json('Excercise Added !');
        }).catch((err) => {
            res.status(400).json('Error: ' + err);
        });

});


router.route('/:id').get((req, res) => {
    Excercise.findById(req.params.id)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(400).json('Error: ' + err);
        });
});



router.route('/:id').delete((req, res) => {
    Excercise.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json('Excercise Deleted');
        }).catch((err) => {
            res.status(400).json('Error: ', err);
        });
});

router.route('/update/:id').post((req, res) => {
    Excercise.findById(req.params.id)
        .then((result) => {
            result.username = req.body.username;
            result.description = req.body.description;
            result.duration = req.body.duration;
            result.date = Date.parse(req.body.date);

            result.save()
                .then((result) => {
                    res.json('Excercise Updated');
                }).catch((err) => {
                    res.status(400).json('Error: ' + err);
                });

        }).catch((err) => {
            res.status(400).json('Error: ' + err);
        });
})




module.exports = router;