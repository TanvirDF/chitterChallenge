import React from 'react'
import moment from 'moment'

export default function MessageCard({ peep }) {
    return (
        <>
            <div class="d-flex justify-content-between mb-4">
                <div class="card">
                    <div class="card-header d-flex justify-content-between p-3">
                        <p class="fw-bold mb-0 ">{peep.username} </p>
                        <p className='px-2'></p>
                        <p class="text-muted small mb-0"><i class="far fa-clock"></i> {moment(peep.date).format('lll')}</p>
                    </div>
                    <div class="card-body">
                        <p class="mb-0">
                            {peep.message}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
