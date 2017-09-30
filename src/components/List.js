import React, { Component } from 'react';
import Word from './Word';
import WordForm from './WordForm';

const words = [
    { en: 'hello', vn: 'xin chào', isMemorized: false },
    { en: 'good morning', vn: 'chào buổi sáng', isMemorized: true },
    { en: 'afternoon', vn: 'buổi chiều', isMemorized: false },
];

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { arrWords: words, isShowForm: false };
        this.addWord = this.addWord.bind(this);
        this.onShowForm = this.onShowForm.bind(this);
    }

    addWord(en, vn, isMemorized) {
        const word = { en, vn, isMemorized };
        this.setState({ 
            arrWords: this.state.arrWords.concat(word),
            isShowForm: false
        });
    }

    onShowForm() {
        this.setState({ isShowForm: true });
    }

    getForm() {
        const { isShowForm } = this.state;
        const myButton = (
            <button className="btn btn-primary" onClick={this.onShowForm}>
                Show Form
            </button>
        );
        return isShowForm ? <WordForm onAddWord={this.addWord} /> : myButton;
    }

    render() {
        const { arrWords, isShowForm } = this.state;
        return (
            <div>
                { this.getForm() }
                { arrWords.map(word => <Word key={word.en} {...word} />) }
            </div>
        );
    }
}
