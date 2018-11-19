import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";

import "./styles.css";

let data = observable([1, 2, 3, 4]);

const Parent = observer(() => {
  return (
    <div className="App">
      This is good. Click any button, only that button is re-rendered. Check
      console statement for clarity.There should only be one console statement
      per click.
      <hr />
      <div>
        {data.map((e, i) => {
          return <Child val={e} key={i} idx={i} />;
        })}
      </div>
    </div>
  );
});

const Child = observer(props => {
  const increment = () => {
    data[props.idx] = props.val + 1;
  };
  console.log(props.idx + 1 + " button is re-rendered");
  return (
    <>
      <div>
        {props.val}
        <span style={{ padding: "10px" }}>
          <button color="blue" onClick={increment}>
            Increment
          </button>
        </span>
      </div>
      <br />
    </>
  );
});

const rootElement = document.getElementById("root");
ReactDOM.render(<Parent />, rootElement);
