import React, { useState } from 'react'
import axios from 'axios'
import StudyNav from './StudyNav'

const AddCourse = () => {
    const [input,setInput] = new useState(
        { "Coursename": "",
          "description": "",
          "tutorname":"",
          "duration":"",
          "fees":""
         
        }   
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
        console.log(input)
        axios.post("http://localhost:3002/api/classes/addcourse",input).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status=="success") {
                    alert ("Submitted successfully")
                    setInput(
                        {"Coursename": "",
                        "description": "",
                        "tutorname":"",
                        "duration":"",
                        "fees":""
        }
                    )
                        
                } else {
                    alert("Soemthing went wrong");
                }
            }
            
        )
    }
  return (
    <div>
        <StudyNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course Name</label>
                            <input type="text" className="form-control" name='Coursename'value={input.Coursename} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Description</label>
                            <input type="text" className="form-control" name='description' value={input.description} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Tutor Name</label>
                            <input type="text" className="form-control" name='tutorname' value={input.tutorname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Duration</label>
                            <input type="text" className="form-control" name='duration' value={input.duration} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Fees</label>
                            <input type="number" className="form-control" name='fees' value={input.fees} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                             <button className="btn btn-success" onClick={readvalues}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCourse