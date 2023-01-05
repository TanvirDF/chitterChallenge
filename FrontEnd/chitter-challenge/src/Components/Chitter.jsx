import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import MessageCard from './MessageCard'
import axios from 'axios'
import PostPeep from './PostPeep'
import { NavLink } from 'react-router-dom'

export default function Chitter({ user }) {

    const [peeps, setPeeps] = useState()
    const [updatedChitter, setUpdateChitter] = useState(false)


    const getPeeps = async () => {
        await axios.get('http://localhost:4000/peeps').then((res) => {

            setPeeps(res.data)
            console.log(peeps)
        })
            .catch((err) => {
                console.log(`error fetching data: ${err.message}`)
            })
    }
    useEffect(() => {
        getPeeps()
        setUpdateChitter(false)
    }, [updatedChitter])

    console.log(updatedChitter)
    const update = () => {
        setUpdateChitter(true)
    }

    const populatePeeps = () => {
        const peepCards = peeps?.map(peep => <MessageCard peep={peep} />)
        return peepCards
    }
    if (!peeps) {

        return (
            <>
                <p>Loading data</p>
            </>
        )
    }
    return (
        <>
            <section >
                <div class="container py-5">

                    <div class="row d-flex justify-content-center">
                        <div class="col-md-8 col-lg-8 col-xl-12">

                            <div class="card">
                                <div class="card-header d-flex justify-content-start align-items-center p-3"
                                >
                                    <h5 class="mb-0">Peeps</h5>
                                </div>
                                <div class="card-body d-flex flex-column-reverse overflow-auto" data-mdb-perfect-scrollbar="true" style={{
                                    position: "relative",
                                    backgroundColor: "lightblue",
                                    height: "600px"
                                }} >
                                    {populatePeeps()}

                                </div>
                                <div class="card-footer text-muted d-flex flex-fill container  p-3">
                                    {
                                        user && <PostPeep update={update} user={user} />
                                    }
                                    {
                                        !user && <h3>
                                            <NavLink to="/login" className="text-primary fw-bold">
                                                Login
                                            </NavLink>
                                            <span></span> to post peep
                                        </h3>

                                    }

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
