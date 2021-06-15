import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {
  return (
    <div>
    <h1>header</h1>
    {props.content}
    <p>footer</p>
    </div>
  )
}

const template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
)
ReactDOM.render(<Layout content={template} />, document.getElementById("app"));

