import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// https://ionic.io/ionicons
import { ellipse, square, triangle, fileTrayStackedOutline, attachOutline, list } from 'ionicons/icons';
import Store from './pages/Store';
import ReadMe from './pages/ReadMe';
import ChangeLog from './pages/ChangeLog';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Store">
            <Store />
          </Route>
          <Route exact path="/ReadMe">
            <ReadMe />
          </Route>
          <Route path="/ChangeLog">
            <ChangeLog />
          </Route>
          <Route exact path="/">
            <Redirect to="/Store" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Store" href="/Store">
            <IonIcon aria-hidden="true" icon={fileTrayStackedOutline} />
            <IonLabel>Store</IonLabel>
          </IonTabButton>
          <IonTabButton tab="ReadMe" href="/ReadMe">
            <IonIcon aria-hidden="true" icon={attachOutline} />
            <IonLabel>ReadMe</IonLabel>
          </IonTabButton>
          <IonTabButton tab="ChangeLog" href="/ChangeLog">
            <IonIcon aria-hidden="true" icon={list} />
            <IonLabel>ChangeLog</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
