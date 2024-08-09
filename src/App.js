import React from "react";
import Button from "./Button";
import './index.css'

function App() {
  return (
    <div>
      <div >
        <Button success outline>Click!</Button>
      </div>
      <div>
        <Button>Because</Button>
      </div>
      <div>
        <Button danger>Learn!</Button>
      </div>
      <div>
        <Button warning>STOP</Button>
      </div>
      <div>
        <Button success >GO!</Button>
      </div>
      <div>
        <Button secondary rounded>LIFE</Button>
      </div>
      <div>
        <Button primary rounded>motivate</Button>
      </div>
    </div>
  );
}

export default App;
