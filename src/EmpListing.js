import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null)
    const navigate = useNavigate()

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id)
    }
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id)
    }
    const Removefunction = (id) => {
        if (window.confirm("Do you want to remove?")) {
            fetch("http://localhost:4300/employee/" + id,
                {
                    method: 'DELETE',

                }).then((res) => {
                    alert("Removed Successfully.")
                    window.location.reload();
                }).catch((err) => {
                    console.log(err.message)
                })
        }
    }





    useEffect(() => {
        fetch("http://localhost:4300/employee").then((res) => {
            return res.json()
        }).then((resp) => {
            empdatachange(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2 style={{ 'marginTop': '20px' }}>
                        Employee Listing
                    </h2>
                </div>
                <div className='card-body'>
                    <div className='divbtn'>
                        <Link to="employee/create" style={{ "marginBottom": "10px" }} className='btn btn-success'>Add New</Link>
                    </div>
                    <table className='table table-bordered'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                {/* <td>Id</td> */}
                                <td><b>Name</b></td>
                                <td><b>Email</b></td>
                                <td><b>Phone</b></td>
                                <td><b>Actions</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        {/* <td>{item.id}</td> */}
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><button onClick={() => { LoadEdit(item.id) }} className='btn btn-success'>Edit</button>
                                            <button onClick={() => { Removefunction(item.id) }} className='btn btn-danger'>Remove</button>
                                            <button onClick={() => { LoadDetail(item.id) }} className='btn btn-primary'>Details</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    )
}

export default EmpListing
