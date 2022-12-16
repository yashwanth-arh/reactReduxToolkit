import React from 'react';
import {RouterProvider} from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ReactRouter from './Router/RouterReact';

function App() {
  return (
    <div>
    <RouterProvider router={ReactRouter}/>
    </div>
  );
}

export default App;
