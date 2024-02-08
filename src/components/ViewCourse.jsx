import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StudyNav from './StudyNav'

const ViewCourse = () => {
    const [data, setData] = new useState([])
    const getData = () => {
        axios.get("http://localhost:3002/api/classes/viewcourse").then(
            (response) => {
                setData(response.data.output)
            }
        )
    }
    useEffect(() => { getData() }, [])
    return (
        <div> 
            <StudyNav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Tutor Name</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Fees</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (values, index) => {
                                            return <tr>
                                                <td>{values.Coursename}</td>
                                                <td >{values.description}</td>
                                                <td>{values.tutorname}</td>
                                                <td>{values.duration}</td>
                                                <td>{values.fees}</td>
                                            </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    
        </div>
        </div>
        </div>
        </div>
  )
}

export default ViewCourse