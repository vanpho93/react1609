import React, { Component } from 'react';

export default class MyBox extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 10 };
        this.addValue = this.addValue.bind(this);
    }

    addValue() {
        this.setState(prevState => ({ value: prevState.value + 1 }));
    }

    render() {
        const { value } = this.state;
        // this.setState(prevState => ({ value: prevState + 1 }))
        // this.setState({ value: this.state.value + 1 })
        return (
            <div>
                <h3>{value}</h3>
                <MyButton onAdd={this.addValue} />
            </div>
        );
    }
}

class MyButton extends Component {
    render() {
        return (
            <button className="btn btn-primary" onClick={this.props.onAdd}>
                Add
            </button>
        );
    }
}
