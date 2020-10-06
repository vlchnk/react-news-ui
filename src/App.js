import React from 'react';
import './App.css';
import './index.js';
import WindowsNews from "./WindowNews";
import Search from "./Search";

class App extends React.Component{
    render() {
        return (
            <div className="container">
                <Search/>
                <WindowsNews />
            </div>
        )
    }
}

export default App;
