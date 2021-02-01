import React from 'react';

const AboutText = () => {
  return (
    <p>
      <i>TLDR: Your data are encrypted with password which will never touch server in any form.</i>

      <br/><br/><b>Security</b><br/>
      When you begin process of creating new account, application exchange challenges and verifications with server and thanks to technology Secure Remote Password protocol your password is never
      transmitted outside application.

      This way, it is secure to encrypt all data with your password, as it is never shared with us or server. It is still important to use strong password.

      <br/><br/><b>Risk</b><br/>
      On paper you are safe, but there is some attack surface for compromising your accounts through client application. If someone will temper with server, it could serve you malicious version which will just take your password from browser and sent it somewhere. Malicious request will be seen through your browser's network connections where you can also check if app is really sending only encrypted data to server.

      <br/><br/> <b>Password</b><br/>
      You should not only choose strong password, but also store it somewhere safely like open sourced password managers. If you ever loose your password, you won't be able to access and decrypt your data.

      <br/><br/><b>Technology used</b><br/>
      Client application is made as PWA built in React. Server part or is handled by Java.

      <br/><br/><b>Server location</b><br/>
      Server (VPS) from OVH provider is located in Germany.

      <br/><br/><b>What is not encrypted?</b><br/>
      Your username, email (if you set one), event dates, timezones, reminder dates, shared status, login dates are stored in plain text and we can see them in database. Everything else like actual content of your data are encrypted.
      <br/><br/></p>
  )
 }

 export default AboutText;
