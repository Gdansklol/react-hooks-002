// src/components/Clock.jsx
import {useState} from 'react';

function Clock() {
    const [time, setTime] = useState(1);

    const handleClick = () => {
        let newTime;
        if(time >= 12) {
            newTime = 1;
        }else {
            newTime = time +1
        }
        setTime(newTime);
    };

    console.log("update!")

    return (
        <div>
        <span>Current Time: {time} o'clock</span>
        <button onClick={handleClick}>Update</button>
        </div>
    );
}

export default Clock;