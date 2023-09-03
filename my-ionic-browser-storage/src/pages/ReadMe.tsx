import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonList } from '@ionic/react';
import './ReadMe.css';

const ReadMe: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ReadMe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ReadMe</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <IonCard>
            <IonList>
              <p className='my-text-style'>
                <span style={{ fontWeight: 'bold' }}>MyIonicBrowserStorage</span> is just a smal example how to use the BrowserStorage
              </p>
              <p className='my-text-style'>
                MyIonicBrowserStorage is an Ionic application based on Ionic-Tab-Template (<span style={{ fontFamily: 'cursive' }}>ionic start my-app tabs --type=react</span> [Ionic CLI Version 7.1.1]) with slight changes of icons and other small things. and uses the BrowserStorage to store data in the browser.
              </p>
              <p className='my-text-style'>
                The Stroe tab shows information about the browser used and its window size and with a list of existing entries in the browser store, with the possibility of creating and deleting additional entries.
              </p>
            </IonList>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ReadMe;
