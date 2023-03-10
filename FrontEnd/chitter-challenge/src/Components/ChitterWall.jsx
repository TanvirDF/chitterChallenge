import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function ChitterWall() {
    const [messages, setMessages] = useState()


    const getPeeps = async () => {
        await axios.get('http://localhost:4000/peeps').then((res) => {

            setMessages(res.data)
            console.log(messages)
        })
            .catch((err) => {
                console.log(`error fetching data: ${err.message}`)
            })
    }
    useEffect(() => {
        getPeeps()

    }, [])


    return (
        <>
            <div class="col-md-6 col-lg-7 col-xl-8">

                <ul class="list-unstyled">
                    <li class="d-flex justify-content-between mb-4">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between p-3">
                                <p class="fw-bold mb-0">Brad Pitt</p>
                                <p class="text-muted small mb-0"><i class="far fa-clock"></i> 12 mins ago</p>
                            </div>
                            <div class="card-body">
                                <p class="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="d-flex justify-content-between mb-4">
                        <div class="card w-100">
                            <div class="card-header d-flex justify-content-between p-3">
                                <p class="fw-bold mb-0">Lara Croft</p>
                                <p class="text-muted small mb-0"><i class="far fa-clock"></i> 13 mins ago</p>
                            </div>
                            <div class="card-body">
                                <p class="mb-0">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="d-flex justify-content-between mb-4">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between p-3">
                                <p class="fw-bold mb-0">Brad Pitt</p>
                                <p class="text-muted small mb-0"><i class="far fa-clock"></i> 10 mins ago</p>
                            </div>
                            <div class="card-body">
                                <p class="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="bg-white mb-3">
                        <div class="form-outline">
                            <textarea class="form-control" id="textAreaExample2" rows="4"></textarea>
                            <label class="form-label" for="textAreaExample2">Message</label>
                        </div>
                    </li>
                    <button type="button" class="btn btn-info btn-rounded float-end">Send</button>
                </ul>

            </div>
        </>
    )
}
