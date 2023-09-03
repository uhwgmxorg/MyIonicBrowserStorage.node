import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';
import './ChangeLog.css';

const ChangeLog: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ChangeLog</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <IonList>
            <IonItem>
              <ul className='my-text-style'>
                <span style={{ fontWeight: 'bold' }}>Version 0.0.4</span>
                <li>Some changes in text and format</li>
              </ul>
            </IonItem>
            <IonItem>
              <ul className='my-text-style'>
                <span style={{ fontWeight: 'bold' }}>Version 0.0.3</span>
                <li>Implements adding fields to a list of Browser Store entries and adding Delete buttons to delete entries</li>
              </ul>
            </IonItem>
            <IonItem>
              <ul className='my-text-style'>
                <span style={{ fontWeight: 'bold' }}>Version 0.0.2</span>
                <li>Add some more Browser data in the table on the store page</li>
              </ul>
            </IonItem>
            <IonItem>
              <ul className='my-text-style'>
                <span style={{ fontWeight: 'bold' }}>Version 0.0.1</span>
                <li>Add Get Browser component</li>
                <li>Change Icons</li>
              </ul>
            </IonItem>
            <IonItem>
              <ul className='my-text-style'>
                <span style={{ fontWeight: 'bold' }}>Version 0.0.0</span>
                <li>Start version</li>
              </ul>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ChangeLog;
