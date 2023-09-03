import React, { useState, useEffect } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import './Store.css';
import GetBrowser from '../components/GetBrowser';
import UAParser from 'ua-parser-js';

const Store: React.FC = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const parser = new UAParser();
  const browserName = parser.getBrowser().name;
  const browserVersion = parser.getBrowser().version;
  const osName = parser.getOS().name;
  const osVersion = parser.getOS().version;

  const browserInfo = {
    name: browserName,
    version: browserVersion,
    platform: osName,
    platform_verion: osVersion,
    windowWidth: windowSize.width,
    windowHeight: windowSize.height,
  };

  const [key, setKey] = useState('');
  const [data, setData] = useState('');
  const [storedData, setStoredData] = useState<Record<string, string | null>>({});

  const storeData = () => {
    localStorage.setItem(key, data);
    retrieveData();  // Refresh the display after saving
  };

  const retrieveData = () => {
    const retrievedData: Record<string, string | null> = {};
    const keys = Object.keys(localStorage);
    keys.forEach(k => {
      retrievedData[k] = localStorage.getItem(k);
    });
    setStoredData(retrievedData);
  };

  const deleteData = (keyToDelete: string) => {
    localStorage.removeItem(keyToDelete);
    retrieveData();  // Refresh the display after deleting
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    retrieveData();
  }, []);  // Get data on first render

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Store</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Store</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="browser-container">
          <IonCard className="ion-card">
            <IonCardHeader>
            </IonCardHeader>
            <IonCardContent>
              <GetBrowser />
              <table className="table-format">
                <tr>
                  <td>Name:</td>
                  <td>{browserInfo.name}</td>
                </tr>
                <tr>
                  <td>Version:</td>
                  <td>{browserInfo.version}</td>
                </tr>
                <tr>
                  <td>Platform:</td>
                  <td>{browserInfo.platform}</td>
                </tr>
                <tr>
                  <td>Platform Version:</td>
                  <td>{browserInfo.platform_verion}</td>
                </tr>
                <tr>
                  <td>Window Width:</td>
                  <td>{browserInfo.windowWidth}</td>
                </tr>
                <tr>
                  <td>Window Height:</td>
                  <td>{browserInfo.windowHeight}</td>
                </tr>
              </table>

              <h2>LocalStorage Daten</h2>
              <input placeholder="Key" value={key} onChange={(e) => setKey(e.target.value)} />
              <input placeholder="Data" value={data} onChange={(e) => setData(e.target.value)} />
              <IonButton onClick={storeData}>save data</IonButton>
              <IonButton onClick={retrieveData}>view data</IonButton>

              <h3>Saved Data:</h3>
              <ul>
                {Object.entries(storedData).map(([storedKey, storedValue]) => (
                  <li key={storedKey}>
                    <span>{`${storedKey}: ${storedValue}`}</span>
                    <IonButton onClick={() => deleteData(storedKey)}>Delete</IonButton>
                  </li>
                ))}
              </ul>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Store;
