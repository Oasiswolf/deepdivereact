import React, { Component } from 'react';

import JournalList from './journals/journal-list';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
        <JournalList heading="List 1" />
        <JournalList heading="List 2" />
        <JournalList heading="List 3" />
        <JournalList heading="List 4" />
      </div>
    );
  }
}
