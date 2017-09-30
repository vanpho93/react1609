import React, { Component } from 'react';

export default class MyBox extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 10 };
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <h3>{value}</h3>
                <MyButton />
            </div>
        );
    }
}

class MyButton extends Component {
    render() {
        return (
            <button className="btn btn-primary">
                Add
            </button>
        );
    }
}