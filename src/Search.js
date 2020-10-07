import React from 'react';

class ActionLink extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '', page: 1}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePage = this.handlePage.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
        console.log(this.state.value)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.value)
        this.props.updateData(this.state.value)
    }

    handlePage(event) {
        event.preventDefault()
        this.props.updateData(true)
    }

    render() {
        return (
            <nav className="navbar">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input value={this.state.value} onChange={this.handleChange} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" name="search"/>
                    <button className="btn btn-outline-dark my-2 my-sm-2" >Search</button>
                </form>
                <button onClick={this.handlePage} type='button' style={{marginRight: '30px', paddingRight: '30px', paddingLeft: '30px'}} className='btn btn-outline-dark'>Next page</button>
            </nav>
        );
    }
}

export default ActionLink;
