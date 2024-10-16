import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import App from './App'
import CSProjects from './components/projects/CSProjects'
import './index.css'
import { ThemeProvider, useTheme } from './components/ThemeContext'; 
import UXProjects from './components/projects/UXProjects';
import ArtProjects from './components/projects/ArtProjects';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';

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

const withFooter = (Component) => {
    return (props) => (
        <>
        {/* need to fix nav to use absolute path */}
            <Nav/>
            <Component {...props} />
            <Footer />
        </>
    );
};

// basePath is always changing

// const currentPath = window.location.pathname;
const basePath = '/portfolio-react';

console.log("base path: " + basePath);

const router = createBrowserRouter([
    {
        path : basePath,
        element : <App />,
    },
    {
        path : basePath + "/portfolio/cs/:name",
        element : React.createElement(withFooter(CSProjects))
    },
    {
        path : basePath + "/portfolio/ux/:name",
        element : React.createElement(withFooter(UXProjects)),
    },
    {
        path : basePath + "/portfolio/art/:name",
        element : React.createElement(withFooter(ArtProjects)),
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