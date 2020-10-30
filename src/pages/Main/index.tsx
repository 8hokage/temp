import { IonContent, IonHeader, IonImg, IonItem, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonButton, IonRouterOutlet } from '@ionic/react';
import React, { useRef, useState} from 'react';
import { Redirect, Route } from 'react-router';

import HomeScreen from '../Homescreen';
import Login from '../Login';
import RestoreWallet from '../RestoreWallet';

import './style.css';

const Main: React.FC<any> = ({setIsAuth}) => {
  return (
    <IonPage>
      <IonContent>
        <IonRouterOutlet>
          <Route path="/homescreen" component={HomeScreen}/>
          <Route path="/login" component={() => <Login setIsAuth={setIsAuth}/>} />
          <Route path="/restore" component = {RestoreWallet} />
          <Redirect exact from="/" to="/homescreen" />
        </IonRouterOutlet>
      </IonContent>
    </IonPage>
  );
};

export default Main;
