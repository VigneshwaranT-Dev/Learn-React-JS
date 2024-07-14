import { useState } from "react";

export function StudentForm(){
    const [studentsInput, setStudentInput] = useState({studentMobNumExt: "+91"});

    const courses = ['BCA', 'BBA', 'B.E', 'B.Tech', 'MBA', 'MCA', 'M.Tech']

    function submitForm(e){
        e.preventDefault();
        console.log('Form Submitted', studentsInput);
    }

    function studentsInputChange(e) {
        const event = e.target;
        setStudentInput((prev) => {
            return ({
                ...prev, [event.name] : event.value
            })
        })
    }
    
    return(
        <div className="container">
            <div className="row">
                <h3 className="text-center text-primary py-3">Student's Addmission Form</h3>
                <hr />
                <div className="col-sm-12">
                    <form action="" onSubmit={submitForm}>
                        <div className="mb-3 row">
                          <label htmlFor="studentFirstName" className="col-sm-4 col-form-label text-end">First Name</label>
                          <div className="col-sm-5">
                            <input type="text" className="form-control" id="studentFirstName" name="studentFirstName" onChange={studentsInputChange}/>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentMiddleName" className="col-sm-4 col-form-label text-end">Middle Name</label>
                          <div className="col-sm-5">
                            <input type="text" className="form-control" id="studentMiddleName" name="studentMiddleName" onChange={studentsInputChange}/>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentLastName" className="col-sm-4 col-form-label text-end">Last Name</label>
                          <div className="col-sm-5">
                            <input type="text" className="form-control" id="studentLastName" name="studentLastName" onChange={studentsInputChange}/>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentCourse" className="col-sm-4 col-form-label text-end">Course</label>
                          <div className="col-sm-5">
                            <select className="form-select" id="studentCourse" name="studentCourse" onChange={studentsInputChange}>
                                <option value={null}>-- Select Course --</option>
                                {
                                  courses.map((course, i) => {
                                    return(
                                        <option key={i} value={course}>
                                            {course}
                                        </option>
                                    )
                                  })
                                }
                            </select>
                          </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="studentGender" className="col-sm-4 col-form-label text-end">Course</label>
                            <div className="col-sm-5 mt-2">
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="radio" name="studentGender" id="studentMale" value="Male" onChange={studentsInputChange}/>
                                  <label className="form-check-label" htmlFor="studentMale">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="radio" name="studentGender" id="studentFemale" value="Female" onChange={studentsInputChange}/>
                                  <label className="form-check-label" htmlFor="studentFemale">Female</label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="radio" name="studentGender" id="studentOthers" value="Others" onChange={studentsInputChange}/>
                                  <label className="form-check-label" htmlFor="studentFemale">Others</label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentMobNum" className="col-sm-4 col-form-label text-end">Phone</label>
                          <div className="col-sm-1">
                            <input type="text" disabled className="form-control" id="studentMobNumExt"  value={studentsInput.studentMobNumExt}/>
                          </div>
                          <div className="col-sm-4">
                            <input type="text" className="form-control" maxLength="10" id="studentMobNum" name="studentMobNum" onChange={studentsInputChange}/>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentAddress" className="col-sm-4 col-form-label text-end">Address</label>
                          <div className="col-sm-5">
                            <textarea style={{resize: 'none'}} id="studentAddress" className="form-control" placeholder="Leave Address Here" rows="4"
                            name="studentAddress" onChange={studentsInputChange}></textarea>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentEmail" className="col-sm-4 col-form-label text-end">Email</label>
                          <div className="col-sm-5">
                            <input type="text" className="form-control" id="studentEmail" name="studentEmail" onChange={studentsInputChange}/>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentPassword" className="col-sm-4 col-form-label text-end">Password</label>
                          <div className="col-sm-5">
                            <input type="password" className="form-control" id="studentPassword" name="studentPassword" onChange={studentsInputChange}/>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentRetypePassword" className="col-sm-4 col-form-label text-end">Re-type Password</label>
                          <div className="col-sm-5">
                            <input type="password" className="form-control" id="studentRetypePassword" name="studentRetypePassword" onChange={studentsInputChange}/>
                          </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-5 d-grid gap-2">
                                <button className="btn btn-primary btn-block" type="submit">
                                    Click to Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}