import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";

import "./styles.css";

let data = observable([1, 2, 3, 4]);

const App = observer(() => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        {data.map((e, i) => {
          return <Test val={e} key={i} idx={i} />;
        })}
      </div>
    </div>
  );
});

const Test = observer(props => {
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
ReactDOM.render(<App />, rootElement);
