import { useEffect, useState } from 'react';
import style from './header.css'
import styles from './header.module.css'

const moment = require('moment');

export function Header(){
    const [clocks, setClock] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            let dateTime = new Date();
            dateTime = moment(dateTime).format('hh:mm:ss')
            setClock(() => {
                return dateTime
            });
        }, 1000)
    })


    // function clickMe(){
    //     let dateTime = new Date();
    //     dateTime = moment(dateTime).format('DD-MM-YYYY HH:mm:ss')
    //     document.getElementById('dateTime').innerHTML = dateTime;
    // }

    return(
        <div component="header">
            <h2 className="mt-4 text-primary border border-primary rounded d-inline-block p-3">Hello this is React Styling</h2>
            <br />
            {/* <div className="d-flex justify-content-center button">
                <button type="button" onClick={clickMe} className="btn btn-primary text-align-center" style={{display: 'block',  textAlign:"center"}}>
                    Click Me to Check Date & Time
                </button>
            </div> */}
            <h3 id="" className={styles.result}>
            {clocks}
            </h3>
        </div>
    );
}