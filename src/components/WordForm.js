import React, { Component } from 'react';

export default class WordForm extends Component {
    constructor(props) {
        super(props);
        this.addWord = this.addWord.bind(this);
    }

    addWord() {
        const en = this.refs.txtEn.value;
        const vn = this.refs.txtVn.value;
        const isMemorized = this.refs.cbMemorized.checked;
        this.props.onAddWord(en, vn, isMemorized);
        this.refs.txtEn.value = '';
        this.refs.txtVn.value = '';
        this.refs.cbMemorized.checked = false;
    }

    render() {
        return (
            <div>
                <input className="form-control" placeholder="English" ref="txtEn" />
                <br />
                <input className="form-control" placeholder="Vietnamese" ref="txtVn" />
                <br />
                <label><input type="checkbox" ref="cbMemorized" /> Memorized</label>
                <br />
                <button className="btn btn-primary" onClick={this.addWord}>
                    Add word
                </button>
            </div>
        );
    }
}