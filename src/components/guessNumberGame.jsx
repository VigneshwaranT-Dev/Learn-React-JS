import { useState } from "react"

export function GuessNumber() {
    const [result, setResult] = useState('')
    const [input, setInput] = useState('')
    
    const [randomNumber, setrandomNumber] = useState(Math.ceil(Math.random()*10))

    function onInputNumber(e) {
        const value = Number(e.target.value)

        if(Number(value) > 10){
            setInput((prev) => {
                document.getElementById('enterNumber').value = prev?.input
                return ({
                    input: prev?.input
                })
            })
            return;
        }

        setInput(() => {
            return ({
                input: value
            })
        })

        if(randomNumber < value){
            setResult('Nah! Higher Value')
            document.getElementById('result').innerHTML = 'Nah! Higher Value'
        } else if(randomNumber > value){
            if(value === 0){
                setResult('Please Enter number Between 1 to 10')
                document.getElementById('result').innerHTML = 'Please Enter number Between 1 to 10'
            } else {
                setResult('Nah! Lower Value')
                document.getElementById('result').innerHTML = 'Nah! Lower Value'
            }
        } else if(randomNumber === value){
            setResult('🏆 Yes You Win 🏆')
            document.getElementById('result').innerHTML = '🏆 Yes You Win 🏆'
            setrandomNumber(Math.ceil(Math.random()*10))
        } else {

        }
        
    }

    return(
        <div className="container mt-5">
            <div className="card text-center">
                <div className="card-header">
                    <h5 className="card-title">Guess The Number Game</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <h6 className="card-title">Guess The Number Between 1 to 10</h6>
                            <input className="form-control text-center" placeholder="Enter Number Between 1 to 10" type="number" name="enterNumber"  id="enterNumber"
                            onChange={onInputNumber} maxLength="2" />
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
                <div className="card-footer text-body-secondary" id="result" >
                    !!! Enter Number First !!!
                </div>
            </div>
        </div>
    )
}