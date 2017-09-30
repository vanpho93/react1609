import React, { Component } from 'react';
import Word from './Word';

const words = [
    { en: 'hello', vn: 'xin chào', isMemorized: false },
    { en: 'good morning', vn: 'chào buổi sáng', isMemorized: true },
    { en: 'afternoon', vn: 'buổi chiều', isMemorized: false },
];

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { arrWords: words };
        this.addWord = this.addWord.bind(this);
    }

    addWord() {
        const en = this.refs.txtEn.value;
        const vn = this.refs.txtVn.value
        const isMemorized = this.refs.cbMemorized.checked;
        const word = { en, vn, isMemorized };
        this.setState({ arrWords: this.state.arrWords.concat(word) });
        this.refs.txtEn.value = '';
        this.refs.txtVn.value = '';
        this.refs.cbMemorized.checked = false;
    }

    render() {
        const { arrWords } = this.state;
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
                { arrWords.map(word => <Word key={word.en} {...word} />) }
            </div>
        );
    }
}
