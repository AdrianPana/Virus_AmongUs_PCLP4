import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/home.page/App';
import LoginPage from './pages/login.page/Login'
import RegisterPage from './pages/register.page/Register'
import URLPage from './pages/scanUrl.page/ScanUrl'
import FilePage from './pages/scanFile.page/ScanFile'
import ProfilePage from './pages/profile.page/Profile';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/scanUrl",
    element: <URLPage/>
  },
  {
    path: "/scanFile",
    element: <FilePage/>
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
