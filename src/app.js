import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {
  return (
    <div>
    <h1>header</h1>
    {props.children}
    <p>footer</p>
    </div>
  )
}

ReactDOM.render((
    <Layout>
      <div>
        <h1>Page Title</h1>
        <p>This is my page content</p>
      </div>
    </Layout>
  ), document.getElementById("app"));

