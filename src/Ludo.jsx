import { useState } from "react";

export default function Ludo() {
    const [count, setCount] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
    const [arr,setarr] = useState(["no move"]);

    function update(color) {
        // setCount((currCount) => ({
        //     ...currCount,
        //     [color]: currCount[color] + 1

        // }));
      
        setarr((arr)=>{
            return [...arr, "blue moves"]
        })
        console.log(arr);

    };
   
    return (
        <>
            <h1>Let's Play</h1>
            <h2>{arr}</h2>
            <div className="blue">
                <h2>Blue count = {count.blue}</h2>
                <button style={{ backgroundColor: "blue" }} onClick={() => update("blue")}>+1</button>
               
            </div>
            <div className="yellow">
                <h2>Yellow count = {count.yellow}</h2>
                <button style={{ backgroundColor: "yellow" }} onClick={() => update("yellow")}>+1</button>
            </div>
            <div className="green">
                <h2>Green count = {count.green}</h2>
                <button style={{ backgroundColor: "green" }} onClick={() => update("green")}>+1</button>
            </div>
            <div className="red">
                <h2>Red count = {count.red}</h2>
                <button style={{ backgroundColor: "red" }} onClick={() => update("red")}>+1</button>
            </div>
        </>
    );
}
