import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import "./style.scss"


import Home from './views/Home/Home';


const App = () => {
    return(
    <>
      <HashRouter>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
        </Routes>
      </HashRouter>
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("app-container") as HTMLElement)

function render() {
    root.render(
      <App />
    )
}

render();