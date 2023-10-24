import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'
import App from './App'
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

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <AppWrapper />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);