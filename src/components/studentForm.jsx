import { useState } from "react";

export function StudentForm(){
    const [studentsInput, setStudentInput] = useState();

    function submitForm(e){
        e.preventDefault();
        console.log('Form Submitted');
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
                            <input type="text" className="form-control" id="studentFirstName"/>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentMiddleName" className="col-sm-4 col-form-label text-end">Middle Name</label>
                          <div className="col-sm-5">
                            <input type="text" className="form-control" id="studentMiddleName"/>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentLastName" className="col-sm-4 col-form-label text-end">Last Name</label>
                          <div className="col-sm-5">
                            <input type="text" className="form-control" id="studentLastName"/>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentCourse" className="col-sm-4 col-form-label text-end">Course</label>
                          <div className="col-sm-5">
                            <select className="form-select" id="studentCourse">
                                <option value="">-- Select Course --</option>
                                <option value=""></option>
                            </select>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentMobNum" className="col-sm-4 col-form-label text-end">Phone</label>
                          <div className="col-sm-1">
                            <input type="text" disabled className="form-control" id="studentMobNumExt" value={'+91'}/>
                          </div>
                          <div className="col-sm-4">
                            <input type="text" className="form-control" maxLength="10" id="studentMobNum"/>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentAddress" className="col-sm-4 col-form-label text-end">Address</label>
                          <div className="col-sm-5">
                            <textarea id="studentAddress" className="form-control" placeholder="Leave Address Here" rows="4"></textarea>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentEmail" className="col-sm-4 col-form-label text-end">Email</label>
                          <div className="col-sm-5">
                            <input type="text" className="form-control" id="studentEmail"/>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentPassword" className="col-sm-4 col-form-label text-end">Password</label>
                          <div className="col-sm-5">
                            <input type="password" className="form-control" id="studentPassword"/>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label htmlFor="studentRetypePassword" className="col-sm-4 col-form-label text-end">Re-type Password</label>
                          <div className="col-sm-5">
                            <input type="password" className="form-control" id="studentRetypePassword"/>
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