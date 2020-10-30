import { IonContent, IonList, IonModal, IonHeader, IonImg, IonItem, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonListHeader, IonButton, IonButtons, IonBackButton } from '@ionic/react';
import React, { useEffect, useRef, useState} from 'react';
import './style.scss';

const Exchange: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="header">
        <IonToolbar className="with-back-button">
            <IonBackButton style={{display: 'block', background: '#fff'}}><img src="../assets/img/back.svg" /></IonBackButton>
            <IonTitle>Exchange</IonTitle>
        </IonToolbar>
        <IonButtons>
            <IonButton className="coin-action-button" routerLink="/qrscanner">Recieve</IonButton>
            <IonButton>Withdraw</IonButton>
            <IonButton>Swap</IonButton>
        </IonButtons>
      </IonHeader>
        <IonContent>
          <IonList>
            <IonListHeader>
              Blocks
            </IonListHeader>
            <IonItem lines="none">
              
            </IonItem>
          </IonList>
          <IonList>
            <IonListHeader>
              Trans
            </IonListHeader>
            <IonItem lines="none">
              <p>sadsa</p>
            </IonItem>
          </IonList>
          <IonModal isOpen={false}>

          </IonModal>
        </IonContent>
    </IonPage>
  );
};

export default Exchange;
