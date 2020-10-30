import React, { useEffect, useState, useRef } from 'react';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import './theme/global.scss';

import Tabs from './pages/Tabs';
import Main from './pages/Main';

import { Plugins } from '@capacitor/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

export const globalContext = () => {

}

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState(true);
  const { StatusBar } = Plugins;
  StatusBar.setBackgroundColor({color: "#333333"});

  const canvasRef: any = useRef(null);

  useEffect(() => {
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);
  }, []);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const grad= ctx.createLinearGradient(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
    grad.addColorStop(0, "rgb(49, 49, 49)");
    grad.addColorStop(1, "rgb(0, 0, 0)");
    
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, window.innerHeight, window.innerWidth);
  })

  return (
    <IonApp>
        <canvas ref={canvasRef} id="app-background" className="app-background"></canvas>
        <IonReactRouter>
          {isAuth ? (
            <Tabs />
          ) : (
            <Main setIsAuth={setIsAuth}/>
          )}
          
        </IonReactRouter>
    </IonApp>
  )
};

export default App;
