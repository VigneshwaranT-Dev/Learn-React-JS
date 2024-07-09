import { useEffect, useState } from "react"

export function StateList(){
    const [actorValue, setActor] = useState(null);
    const [list, setList] = useState([ 'Sivakarthikeyan', 'Vijay', 'Ajith']);

    useEffect(() => {
        if(actorValue === null || actorValue === "null"){
            document.getElementById('actor').setAttribute("disabled","disabled");
        } else {
            document.getElementById('actor').removeAttribute("disabled");
        }
    }, [actorValue]) 

    function addList(){
        const actorInput = document.getElementById('actor').value;

        if(actorInput.trim()){
            setList((prev) => {
                return [...prev, actorInput]
            })
        }
        document.getElementById('actor').value = null;
    }

    function actorChange(){
        const actorDropDown = document.getElementById('actorDropDown')?.value;
        
        setActor(() => {
            return actorDropDown
        })
    }

    return(
        <>
            <h1>
                Actors List
            </h1>

            <div className="col-2">
                <input type="text" name="" className="form-control" id="actor" />
            </div>

            <ul> {
                    list.map((element, i) => {
                        return(
                            <li key={i}>
                                {element}
                            </li>
                        )
                    })
                }
            </ul>

            <button className="btn btn-primary" onClick={addList}>
                Add List
            </button>

            <select name="" id="actorDropDown" onChange={actorChange}>
                <option value="null">
                    --Select--
                </option>
                {
                    list.map((element, i) => {
                        return(
                            <option key={i} value={element}>
                                {element}
                            </option>
                        )
                    })
                }
            </select>
        </>
    )
}