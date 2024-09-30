import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EmpDetail = () => {

    const { empid } = useParams()

    const [empdata, empdatachange] = useState({})

    useEffect(() => {
        fetch("http://localhost:4300/employee/" + empid).then((res) => {
            return res.json()
        }).then((resp) => {
            empdatachange(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])
    return (
        <div>
            <div className='card' style={{ "textAlign": "left" }}>
                <div className='card-title'>
                    <h1 style={{ "color": "darkgreen" }}>Employee Details</h1>
                </div>
                <div className='card-body'>
                    {empdata &&
                        <div>
                            <h2 style={{ "color": "Blue" }}>Employee Name :</h2>
                            <h3>Employee name is : <b>{empdata.name}</b></h3>
                            <h2 style={{ "color": "Blue" }}>Contact Deatils :</h2>
                            <h3>Email is : {empdata.email}</h3>
                            <h3>Phone No is : {empdata.phone} </h3>
                            <Link to="/" className='btn btn-danger'> Back to Listing</Link>

                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default EmpDetail
