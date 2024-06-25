import { useState } from "react";

export function State() {
    const [number, setValue] = useState(0);
    return(
        <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-primary" onClick={() => {
                setValue(number - 1);
            }}>
                -
            </button>
            <p className="px-3 mt-2">
                {number}
            </p>
            <button className="btn btn-primary" onClick={() => {
                setValue(number + 1);
            }}>
                +
            </button>
        </div>
    );
}