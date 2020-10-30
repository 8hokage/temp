import { IonContent, IonHeader, IonImg, IonItem, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonButton, IonRouterOutlet } from '@ionic/react';
import React, { useRef, useState} from 'react';
import './style.scss';

const Homescreen: React.FC = ({history}:any) => {
  return (
    <IonPage>
      <IonContent>
        <div className="main-page-wrapper">
          <img className="logo" src="./assets/img/logo.png" />
          <div className="buttons">
            <IonButton routerLink="/login"><IonLabel>Confirm</IonLabel></IonButton>
            <IonButton className="sub-button" routerLink="/restore">Cancel</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Homescreen;
