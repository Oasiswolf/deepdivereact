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

  clearEntries = () => {
    this.setState({journalData:[], isOpen:false})
  }

  showEntries = () => {
    this.setState({journalData:rawJournalData, isOpen:true})
  }

  // toggleStatus = () => {
  //   if (this.state.isOpen) {
  //     this.setState({ journalData:[], isOpen:false})
  //   }else {
  //     this.setState({ journalData:rawJournalData, isOpen:true})
  //   }
  // }
  toggleStatus = () => {
  this.state.isOpen ? this.setState({journalData:[], isOpen:false}) : this.setState({journalData:rawJournalData, isOpen:true})
  }
 



  toggleButton = () => {
    if (button.name = clear){
      style={display: none}
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
          <button onClick={this.clearEntries} name="clear">Clear Entries</button>
          <button onClick={this.showEntries} name="show">Show Entries</button>
          <button onClick={this.toggleStatus}>Toggle Entries</button>
          <h2>Check Out This {this.props.heading}</h2>
          {/* <h3>{this.state.greeting}</h3> */}
          {/* <JournalEntry title="Awesome Title" content="Some More Awesome Content" /> */}
          <h3>{journalEntries}</h3>
      </div>
    )
  }
}

