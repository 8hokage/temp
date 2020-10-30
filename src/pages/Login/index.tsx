import { IonContent, IonButtons, IonHeader, IonButton, IonImg, IonItem, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonBackButton } from '@ionic/react';
import React, { useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router';
import PageDescription from '../../components/PageDescription';
import './style.scss';

const Login: React.FC<any> = ({setIsAuth, history}) => {
  const [inputValue, setValue] = useState("");
  const [firstPin, setFirstPin] = useState("");
  const [secondPin, setSecondPin] = useState("");

  const inputRef: any = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [firstPin, secondPin])

  const onChange = (e: any) => {
    const { value } = e.target;  

    setValue(value);
  }

  const onConfirm = () => {
    if (!firstPin) {
      setFirstPin(inputValue);
      setValue("");
    } else if (firstPin && inputValue && firstPin.localeCompare(inputValue)) {
      setIsAuth(true)
      history.replace("/");
    } else {
      setFirstPin("");
      setSecondPin("");
      setValue("");
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="with-back-button">
            <IonButton onClick={() => {history.goBack()}}>
              
            </IonButton>
            <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
          {!firstPin ? (
            <PageDescription
              title="Set security PIN"
            >
              <p className="task-description">Your password must be 6 character long
              and must be set with only numbers</p>
            </PageDescription>
          ) : (
            <PageDescription
              title="Repeat PIN"
            >
              <p className="task-description">Insert again the numeric password,
              it must match the previous entry</p>
            </PageDescription>
              
          )}
          <IonItem lines="none" className="pin-wrapper">
            <IonLabel>
                {[...new Array(6).fill(1)].map((item, index) => {
                  return (
                    <div className={classNames(
                      "pin-input",
                      {active: index <= inputValue.length}
                    )}>
                      {inputValue[index]}
                    </div>
                  )
                })}
            </IonLabel>
            <input ref={inputRef} maxLength={6} inputMode="numeric" value={inputValue} onChange={onChange} />
          </IonItem>
          {firstPin && (
            <label className="terms">
              <input type="checkbox" name="agreement"></input>
              I agree with <a href="/restore">Terms and Conditions</a>
            </label>
          )}
        <IonButton disabled={inputValue.length < 6} onClick={onConfirm}>Confirm</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Login);
