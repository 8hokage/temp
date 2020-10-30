import { IonContent, IonGrid, IonRow, IonBackButton, IonIcon, IonCol, IonList, IonHeader, IonImg, IonItem, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonListHeader, IonButton, IonButtons } from '@ionic/react';
import React, { useEffect, useRef, useState} from 'react';
import CircleDiagram from '../../components/CircleDiagram';
import { IconWallet } from '../../components/icons';
import { withRouter } from 'react-router';
import './style.scss';

const data = [
  {
    amount: 10,
    type: "BTC",
  }
]

const Wallet: React.FC<any> = ({ history }) => {
  return (
    <IonPage>
      <IonHeader className="header">
        <IonToolbar>
          <IonTitle>Wallet</IonTitle>
        </IonToolbar>
        <div className="general-info">
          <p className="info-heading">Total balance</p>
          <p className="info-amount">10,00 <span>BTC</span></p>
          <p className="info-amount-converted">114,000,80 EUR</p>
        </div>
        <CircleDiagram className="diagram" data={data}/>
      </IonHeader>
        <IonContent>
          <IonList>
            <IonListHeader>
              Wallet
            </IonListHeader>
            <IonItem onClick={() => {history.push("/operations")}}>
                <IconWallet />
                <div className="item-center">
                  BTC
                </div>
                <div className="item-end">
                  <div className="first">
                    <p className="main-row">3.00</p>
                    <p className="sub-row">20 000</p>
                  </div>
                  <div className="second">
                    <p className="main-row">BTC</p>
                    <p className="sub-row">Eur</p>
                  </div>
                </div>
            </IonItem>
          </IonList>
        </IonContent>
    </IonPage>
  );
};

export default withRouter(Wallet);
