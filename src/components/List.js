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
        this.removeWord = this.removeWord.bind(this);
        this.getWord = this.getWord.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }

    hideForm() {
        this.setState({ isShowForm: false });
    }

    removeWord(en) {
        const newArrWords = this.state.arrWords.filter(word => word.en !== en);
        this.setState({ arrWords: newArrWords });
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
        const wordForm = <WordForm onAddWord={this.addWord} onHideForm={this.hideForm} />;
        return isShowForm ? wordForm : myButton;
    }

    getWord(word) {
        return <Word key={word.en} {...word} onRemoveWord={this.removeWord} />;
    }

    render() {
        const { arrWords } = this.state;
        return (
            <div>
                { this.getForm() }
                { arrWords.map(this.getWord) }
            </div>
        );
    }
}
