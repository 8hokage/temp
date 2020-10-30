import { IonContent, IonHeader, IonImg, IonItem, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonButton, IonRouterOutlet, IonBackButton } from '@ionic/react';
import React, { useEffect, useRef, useState} from 'react';
import { Redirect, Route } from 'react-router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//components
import HomeScreen from '../Homescreen';
import Login from '../Login';

//style
import './style.scss';

const QRScanner: React.FC<any> = ({setIsAuth}) => {
  const [text, setText] = useState("");
  
  useEffect(() => {
    BarcodeScanner.scan().then((data) => {
      setText(data.text);
    });
  }, []);

  return (
    <IonPage>
      <IonHeader style={{background: "red"}}>
        
       
      </IonHeader>
      <IonContent>
        <p style={{zIndex: 100}}>{text}</p>
      </IonContent>
    </IonPage>
  );
};

export default QRScanner;
