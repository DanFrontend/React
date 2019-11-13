import React, { useState } from 'react';

import FilmList from './components/FilmList';
import Content from "./components/Content";
import './App.css';

export const MyContext = React.createContext('light');

function App() {
    const [per, setPer] = useState({
        dark: '#000000'
    });
    console.log(per.dark + 1);
    const some = {
        a:2,
        d:3
    };
    const color = {
        light: {
            foreground: '#000000',
            background: '#eeeeee',
        },
        dark: {
            foreground: '#ffffff',
            background: '#222222',
        },
    };
    return (
        <>
            <MyContext.Provider value={{
                state: per,
                editState: () => setPer(per.dark = 1)
            }}>
                <FilmList pr={some} cl={color}/>
            </MyContext.Provider>
            <Content/>
        </>
    );
}

export default App;
