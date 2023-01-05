import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';
import Peep from '../model/peep.model.js'
import peepdata from '../utils/peeps.json' assert {type: "json"}
import User from '../model/user.model.js'

chai.use(chaiHttp)


describe('testing the requests on database', () => {
    describe('Peeps', () => {
        beforeEach(async () => {
            try {
                await Peep.deleteMany()
                console.log('database cleared')
            } catch (err) {
                console.log('Error clearing database')
                throw new Error(err);
            }

        })

        it('/POST request to post a peep in the database', async () => {
            const testMessage = peepdata[0]
            const res = await chai.request(server).post('/peeps').send(testMessage)
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('peep', ' peep added successfully')
        })

        it('/GET request to get the peeps from the database', async () => {
            const res = await chai.request(server).get('/peeps').send()
            expect(res).to.have.status(200)
            expect(res).to.be.an('object')
            expect(res.body).to.be.an('array')
        })
    })

    describe('signUp', () => {
        beforeEach(async () => {
            try {
                await User.deleteMany()
                console.log('database cleared')
            } catch (err) {
                console.log('Error clearing database')
                throw new Error(err);
            }

        })
        it('/POST request to store user info in the database', async () => {
            const testNewUser = {
                "username": "testUsename",
                "email": " tanvir@gmail.com",
                "password": " pass123"
            }
            const res = await chai.request(server).post('/signUp').send(testNewUser)
            expect(res.body.message).to.eql(`Sign up successful!`)
        })
    })
})