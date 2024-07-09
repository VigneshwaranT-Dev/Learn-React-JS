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

    return(
        <div component="header">
            <h2 className="mt-4 text-primary border border-primary rounded d-inline-block p-3">Hello this is React Styling</h2>
            <br />
            <h3 id="" className={styles.result}>
            {clocks}
            </h3>
        </div>
    );
}