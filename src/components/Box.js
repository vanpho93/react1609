import React, { Component } from 'react';

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.onAddClick = this.onAddClick.bind(this);
    }

    onAddClick() {
        // let { value } = this.state;
        // alert(value);
        // value = 11; 1
        // this.state.value = 11;
        // this.setState({ value: this.state.value + 1 });
        // this.setState({ value: this.state.value + 1 });
        this.setState(prevState => ({ value: prevState.value + 1 }));
        this.setState(prevState => ({ value: prevState.value + 1 }));
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <h3>{value}</h3>
                <button className="btn btn-primary" onClick={this.onAddClick}>
                    Add
                </button>
            </div>
        );
    }
}
