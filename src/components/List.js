import React, { Component } from 'react';

const words = [
    { en: 'hello', vn: 'xin chào', isMemorized: true },
    { en: 'good morning', vn: 'chào buổi sáng', isMemorized: true },
    { en: 'bad', vn: 'tệ', isMemorized: true },
];

export default class List extends Component {
    render() {
        return (
            <h3>List component</h3>
        );
    }
}
