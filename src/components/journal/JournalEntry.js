import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div className='journal__entry-picture' style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true)'
        }}>
        </div>
        <div className='journal__entry-body'>
            <p className='journal_entry-title'>
                Un nuevo día
            </p>
            <p className='journal__entry-content'>
                Non cupidatat non eiusmod deserunt proident eu magna eu in dolore esse laboris sint.
            </p>
        </div>
        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
