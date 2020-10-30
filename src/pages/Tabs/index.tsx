import {  IonPage, IonContent, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet, IonIcon } from '@ionic/react';
import React, { useEffect, useRef, useState} from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import { wallet } from 'ionicons/icons';

//components
import Wallet from '../Wallet';
import Exchange from '../Exchange';
import QRScanner from '../QRScanner';

//style
import './style.scss';
import { IconExchange, IconWallet } from '../../components/icons';


const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    
  })

  const handleChangeTab = (index: number) => {
    console.log(index);
    setActiveTab(index);
  };

  return (
    <IonPage>
      <IonContent>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/wallet" component={Wallet} exact/>
            <Route path="/exchange" component={Exchange} exact/>
            <Route path="/settings" component={Wallet} exact/>
            <Route path="/qrscanner" component={QRScanner} exact/>
            <Redirect exact from="/" to="/wallet" />
          </IonRouterOutlet>
          <IonTabBar onChange={(e) => {console.log(e)}} slot="bottom">
            <IonTabButton onClick={() => console.log(111)} tab="wallet" href="/wallet">
              <IconWallet />
              {activeTab === 0 && <span className="indicator"></span>}
            </IonTabButton>

            <IonTabButton onClick={() => handleChangeTab(1)} tab="exchange" href="/exchange">
              <IconExchange />
              {activeTab === 1 && <span className="indicator"></span>}
            </IonTabButton>

            <IonTabButton onClick={() => handleChangeTab(2)} tab="settings" href="/settings">
              <img onClick={() => handleChangeTab(2)} src="./assets/img/settings.svg"/>
              {activeTab === 2 && <span className="indicator"></span>}
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
    </IonPage>
  );
}

export default Tabs;