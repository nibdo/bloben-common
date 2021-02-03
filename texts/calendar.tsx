import React from 'react';

const CalendarText = () => {
  return (
    <p> Well, Bloben Calendar is just like any calendar app out there with exception of strong focus on encryption and maximum privacy.
      <br/><br/>
      Your data are encrypted in browser with your password, which is never sent to the server. You may be familiar with
      this concept with great service from ProtonMail (btw, check ProtonMail and Tutanota encrypted calendars too). <br/><br/>
      Only small part of data like dates and timezones for events and calendars are stored in plain text.
        At first, Bloben Calendar was provided as service from our server, but we have decided to offer self hosting solution.
        Bloben Calendar is open sourced and you can view code on <a className={'web-link'} target={'_blank'} href={'https://github.com/nibdo/bloben-calendar'}>Github</a>.
    <br/><br/>
        Bloben Calendar works as PWA on mobile devices and desktop.
    </p>
  )
 }

 export default CalendarText;
