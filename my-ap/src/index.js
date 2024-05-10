import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
// import Appss from './Admin/Appss';

  import { ToastContainer,  } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>

<App></App>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
bodyClassName="toastBody"

/>

<ToastContainer />
</BrowserRouter>

);



