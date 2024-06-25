const moment = require('moment');

export function Header(){
    function clickMe(){
        let dateTime = new Date();
        dateTime = moment(dateTime).format('DD-MM-YYYY HH:mm:ss')
        document.getElementById('dateTime').innerHTML = dateTime;
    }

    return(
        <div className="justify-content-center">
            <h2 className="mt-4 text-primary border border-primary rounded d-inline-block p-3">Hello this is React Styling</h2>
            <br />
            <button type="button" onClick={clickMe} className="btn btn-primary text-align-center" style={{display: 'block',  textAlign:"center"}}>
                Click Me to Check Date & Time
            </button>
            <h3 id="dateTime"></h3>
        </div>
    );
}