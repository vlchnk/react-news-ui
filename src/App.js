import React from 'react';
import './App.css';
import './index.js';
import WindowsNews from "./WindowNews";
import ActionLink from "./Search";

class App extends React.Component{
    state = {
        search: 'world',
        page: 1
    }

    updateData = (value) => {
        if(value === true) {
            let number = this.state.page + 1
            this.setState({search: this.state.search, page: number})
        } else {
            this.setState({search: value, page: 1})
        }
    }

    render() {
        console.log(this.state)
        return (
            <div className="container-fluid">
                <ActionLink updateData={this.updateData}/>
                <WindowsNews search={this.state}/>
            </div>
        )
    }
}

export default App;
