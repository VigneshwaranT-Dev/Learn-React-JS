export function CarInfo(props) {
    const { carList, empLoyeeList } = props
    return(
        empLoyeeList ? 
        <div className="App">
             <hr />
            <ol>
                { empLoyeeList.map((empLoyeeList) => {
                    return (<li key={empLoyeeList.empName}><p>{empLoyeeList.empName} working as a {empLoyeeList.jobRole}</p></li>)
                }) }
            </ol>
            <hr />
        </div>
        : carList ?
        <div className="App">
             <hr />
            <ol>
                { carList.map((carList) => {
                    return (<li key={carList.brand}><p>This is a {carList.color} color {carList.brand} car. It's Price is {carList.price}</p></li>)
                }) }
            </ol>
            <hr />
        </div> : 
        <div className="App">
        </div>
    );
}
