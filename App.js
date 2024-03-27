import React from "react";
import  ReactDOM  from "react-dom";
import Form from "/Form";
import Demo from "./Demo";
/*
<div id="parent">
    <div id="child">
        <h1> I'm heading one </h1>
    </div>
</div>
*/

const heading = React.createElement("h1", {
    id: "heading"
}, "Hello world from React 122 123213");
// console.log(heading); // HTML Tag

// 1. tag name, 2. Attributes 3. Children

// const parent = React.createElement("div", {
//     id: "parent"
// }, React.createElement("div", {
//     id: "child"
// }, React.createElement("h1", {}, "I'm headingone")));  // JSX

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }


// console.log(myelement)
const AppLayout = () => {
    // console.log(React.createElement("h1", {}, "Hello world"));
    // console.log(<Header />);
    return (
      <>
        <div className="app">
          <Welcome name="World"/>
          <Form />
          <Demo />
        </div> 
      </>
          
  
  
    );
  };

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout />);

