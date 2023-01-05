import express from 'express';

export const router = express.Router();

import User from '../model/user.model.js';

router.route(`/`)
    .post((req, res) => {
        const { email, password } = req.body;
        User.findOne({ email }, (err, user) => {
            if (user && password === user.password) {
                res.send({ message: `Loged in sucessfully`, username: user.username });
            }
            else {
                res.send({ message: `Invalid login` });
            }
        });
    });