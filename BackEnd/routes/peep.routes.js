import express from 'express'
import Peep from '../model/peep.model.js'

export const router = express.Router()


router.route('/').post((req, res) => {
    const peep = new Peep(req.body)
    peep.save().then(() => {
        res.status(200).json({
            'peep': ' peep added successfully'
        })
    })
        .catch((err) => {
            res.status(400).json({
                'peep': `Adding new peep failed ${err.message}`
            })
        })
})
    .get((req, res) => {
        Peep.find((error, peeps) => {
            error ? res.status(400).json({
                'peep': `peeps not available`
            }) : res.status(200).json(peeps);
        }).sort({ _id: -1 });
    })
