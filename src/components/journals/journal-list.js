import React, { Component } from 'react'

import { JournalEntry } from './journal-entry'

const rawJournalData = [
    {title: 'Post One', content: 'Post Content', status: 'published'},
    {title: 'Post Two', content: 'Post Content', status: 'published'},
    {title: 'Post Three', content: 'Post Content', status: 'published'},
    {title: 'Post Four', content: 'Post Content', status: 'draft'}
];


export default class JournalList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            journalData: rawJournalData,
            isOpen: true,
            greeting: "Howdy There",

        }
    }

  render() {
      const journalEntries = this.state.journalData.map(journalEntry => {
        return (
          <div key={journalEntry.title}>
            <JournalEntry title={journalEntry.title} content={journalEntry.content} status={journalEntry.status} />
          </div>
        )
      })
    return (
      <div>
          {/* <h2>Check Out This {this.props.heading}</h2>
          <h3>{this.state.greeting}</h3> */}
          {/* <JournalEntry title="Awesome Title" content="Some More Awesome Content" /> */}
          {journalEntries}
      </div>
    )
  }
}

