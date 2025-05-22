import {useState} from 'react';

const heavyWork = () => {
    console.log("so heavy work!");
    return ["Cruella","Selline"];
}

function NameUpload() {
    const [names, setNames] = useState(() => {
        return heavyWork();

    });
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleUpload = () => {
        setNames((prevState) => {
            console.log("previous state:",prevState);
            return [input, ...prevState];
        })
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleUpload}> Upload </button>
            {names.map((name,index) => {
                return <p key={index}>{name}</p>
            })}
        </div>
    );
}

export default NameUpload;