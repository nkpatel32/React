import { useState } from "react";

function StateExample2() {
    const [color, setColor] = useState("green");
    const [style, setStyle] = useState({});

    const handleStyleChange = (newStyle) => {
        setStyle((prevStyle) => ({
            ...prevStyle,
            ...newStyle,
        }));
    };

    return (
        <div>
            <h1>Selected Color: {color},{}</h1>
            <input type="radio" name="color" onChange={() => setColor("violet")} />
            {"violet"}
            <br />
            <input type="radio" name="color" onChange={() => setColor("red")} />
            {"red"}
            <br />
            <input type="radio" name="color" onChange={() => setColor("blue")} />
            {"blue"}
            <br />
            <input
                type="checkbox"
                onClick={(e) => handleStyleChange({ fontWeight: e.target.checked ? "bold" : "normal" })}
            />
            {"bold"}
            <br />
            <input
                type="checkbox"
                onClick={(e) => handleStyleChange({ fontStyle: e.target.checked ? "italic" : "normal" })}
            />
            {"italic"}
            <br />
            <input
                type="checkbox"
                onClick={(e) =>
                    handleStyleChange({ textDecoration: e.target.checked ? "underline" : "none" })
                }
            />
            {"underline"}
            <br />
            <p style={{ color: color, ...style }}>This is Nishil's page</p>
        </div>
    );
}

export default StateExample2;
