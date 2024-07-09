import { useState } from "react"

export function Student() {
//     const [studentName, setStudentName] = useState('Vigneshwaran');
//     const [studentClass, setStudentClass] = useState('2nd Standard');
//     const [studentAge, setStudentAge] = useState('8');
//     const [studentFatherName, setStudentFatherName] = useState('Thiruselvam');
//     const [studentFatherMobileNo, setStudentFatherMobileNo] = useState('86670328726');

    const [studentInfo, setStudentInfo] = useState(
        {
            studentName: 'Vigneshwaran',
            studentClass: '2nd Standard',
            studentAge: 8,
            studentFatherName: 'Thiruselvam',
            studentFatherMobileNo: 86670328726
        }
    )

    function changeStudentInfo(){
        setStudentInfo((prev) => {
            return {...prev, studentName: 'Magilan', studentFatherName: 'Vigneshwaran'}
        })
    }

    return(
        <>
            <h1>Students Info</h1>
            <ol>
                <li>
                    Student's Name: {studentInfo.studentName}
                </li>
                <li>
                    Student's Class: {studentInfo.studentClass}
                </li>
                <li>
                    Student's Age: {studentInfo.studentAge}
                </li>
                <li>
                    Student's Father Name: {studentInfo.studentFatherName}
                </li>
                <li>
                    Student's Father Mobile Number: {studentInfo.studentFatherMobileNo}
                </li>
            </ol>
            <button className="btn btn-primary" onClick={changeStudentInfo}>
                Click to Change Student Info
            </button>
        </>
    )
}