import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";

import "./styles.css";

let data = observable([1, 2, 3, 4]);

const Parent = observer(() => {
  return (
    <div className="App">
      <h3>
        Click any button, all the buttons are re-rendered. Check console
        statement for clarity.There would be 4 console statements per click.
      </h3>
      <div>
        {data.map((val, i) => {
          const increment = () => {
            data[i] = val + 1;
          };
          console.log(i + 1 + " button is re-rendered");
          return (
            <>
              <div>
                {val}
                <span style={{ padding: "10px" }}>
                  <button color="blue" onClick={increment}>
                    Increment
                  </button>
                </span>
              </div>
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
});

const rootElement = document.getElementById("root");
ReactDOM.render(<Parent />, rootElement);
