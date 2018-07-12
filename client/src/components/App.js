import React from 'react'

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
    </div>
);

const App = () => {
  return <div>
    <Header title="ШАПКА САЙТА"/>
    <h3>Hello World!</h3>
  </div>
};

export default App


