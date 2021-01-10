import React from 'react';

const CalendarText = () => {
  return (
    <p> Well, Bloben Calendar is just like any calendar app out there with exception of strong focus on encryption and maximum privacy.
      <br/><br/>
      Your data are encrypted in
      browser with your password, which is never sent to server. You may be familiar with
      this concept with great service from ProtonMail (btw, check ProtonMail and Tutanota encrypted calendars too). <br/><br/>
      Only small part of data like event's date are in plain text so repeated events and notifications can be handled from the server.
      One trade-off yet to solve is way around easier sharing of your calendars.
        Bloben Calendar is open sourced and you can view code on <a className={'web-link'} target={'_blank'} href={'https://github.com/nibdo/bloben-calendar'}>Github</a>.
    <br/><br/>
    Install as PWA on mobile devices and desktop.
    </p>
  )
 }

 export default CalendarText;
