import React from 'react';
import './GetBrowser.css';

const GetBrowser: React.FC = () => {

  function getBrowser() {
    const userAgent = window.navigator.userAgent;

    if (userAgent.indexOf('Edg/') > -1) {
      return 'Microsoft Edge';
    } else if (userAgent.indexOf('Chrome') > -1) {
      return 'Google Chrome';
    } else if (userAgent.indexOf('Firefox') > -1) {
      return 'Mozilla Firefox';
    } else if (userAgent.indexOf('Safari') > -1) {
      return 'Apple Safari';
    } else if (userAgent.indexOf('MSIE ') > -1 || userAgent.indexOf('Trident/') > -1) {
      return 'Microsoft Internet Explorer';
    } else {
      return 'Unknown Browser';
    }
  }

  const browser = getBrowser();
  console.log(`You are using the ${browser} Browser`);

  return (
    <div>
      <h2>You are using the {browser} Browser</h2>
    </div>
  );
};

export default GetBrowser;
