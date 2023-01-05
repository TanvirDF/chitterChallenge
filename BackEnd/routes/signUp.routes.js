import express from 'express';
import User from '../model/user.model.js'
export const router = express.Router();

router.route(`/`)
    .post((req, res) => {
        const { email } = req.body;
        User.findOne({ email }, (err, user) => {
            if (user) {
                res.send({ message: `Email address already taken` });
            }
            else {
                const user = new User(req.body);
                user.save(err => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.send({ message: `Sign up successful!` });
                    }
                });
            }
        });
    });
