import React from 'react'
import { useState } from 'react'
import axios from 'axios'



export default function PostPeep({ update, user }) {
    const [message, setMessage] = useState('')
    const [postConfirmation, setPostConfirmation] = useState('')
    const [isPosting, setIsPosting] = useState(false)


    const submitPeep = async (peep) => {
        try {
            const res = await axios.post('http://localhost:4000/peeps', peep)
            setIsPosting(false)
            setPostConfirmation(res.data.peep)
            setMessage('')

        } catch (e) {
            alert('failed to post request')
        }
    }
    const handleSubmit = (e) => {
        if (message) {
            setIsPosting(true)
            e.preventDefault()
            const peep = {
                username: user,
                message,
                date: new Date()
            }
            submitPeep(peep)
            update()

        }



    }

    return (

        <>

            <div class=" flex-grow-1 ">
                <form className='d-flex ' onSubmit={handleSubmit}>
                    <input type="text" value={message} class="form-control flex-grow-1" placeholder="Type message" onChange={(e) => setMessage(e.target.value)} />
                    {!isPosting && <button className='btn btn-primary '>Post</button>}
                    {isPosting && <button disabled className='btn btn-primary'> Posting </button>}
                </form>
            </div>

        </>

    )
}
