
// import Home from "./components/home";
import { Works, CarInfo, Home } from "./components/index";


function App() {
  const fatherName = 'Thiruselvam'
  const name = `Vigneshwaran ${fatherName}`
  
  const work = {
    designation: 'Software Engineer',
    company: 'SimpleSolve Technologies PVT. LTD.'
  }
  const carList = [
    {brand: 'BMW X7', color: 'Royal Blue', price: '$1,00,000'},
    {brand: 'Mahindra Thar', color: 'Black', price: '$50,000'},
    {brand: 'Mercedes Benz', color: 'Silver', price: '$1,20,000'}
  ];

  const empLoyeeList = [
    {empName: 'Vigneshwaran', jobRole: 'Software Developer'},
    {empName: 'Raja', jobRole: 'Software Tester'},
    {empName: 'Nandhini', jobRole: 'Business Analyst'},
  ];

  const noList = [1, 2, 3, 4, 5];

  let isShown = work.designation && work.company ? true : false;
  
  return (
    <div className="App">
      <header className="App-header">
        <Home name = {name} native = {'Virudhunagar'}/>
        { isShown && <Works work = {work}/> } 
        <CarInfo carList = {carList}/>
        <CarInfo empLoyeeList = {empLoyeeList}/>
        <ul>
            { noList.map((noList, i) => {
                return(<li key={i}><p>{noList}</p></li>)
              }) 
            }
        </ul>
      </header>
    </div>
  );
}

export default App;
