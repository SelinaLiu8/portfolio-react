import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import App from './App'
import Nasa from "./components/projects/NASA/Nasa"
import Home from './pages/Home'
import './index.css'
import { ThemeProvider, useTheme } from './components/ThemeContext'; 

const AppWrapper = () => {

    const htmlElement = document.getElementById('root')
    const bodyElement = document.querySelector("body");

    const theme = useTheme();

    useEffect(() => {
        htmlElement.classList.remove(':root.light', ':root.dark');
        if (theme.theme === 'light') {
            htmlElement.classList.remove('dark');
            htmlElement.classList.add('light');
            bodyElement.classList.remove('dark');
            bodyElement.classList.add('light');
        }
        else {
            htmlElement.classList.remove('light');
            htmlElement.classList.add('dark');
            bodyElement.classList.remove('light');
            bodyElement.classList.add('dark');
        }
        console.log(htmlElement.className);
      });

    return null;
};

const currentPath = window.location.pathname;
const basePath = currentPath.substring(0, currentPath.lastIndexOf('/'));

const router = createBrowserRouter([
    {
        path : basePath,
        element : <App />,
    },
    {
        path : basePath + "/portfolio/nasa",
        element : <Nasa />
    }
]);

const logCurrentRoute = () => {
    console.log("Current Route:", window.location.pathname);
};

ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider>
        <AppWrapper />
        <RouterProvider router={router}/>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
    logCurrentRoute()
);

// console.log("After rendering");