import {IonContent, IonPage} from "@ionic/react";
import LoginLayout from "../components/LoginLayout";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";

export default function Login() {
    const history = useHistory()
    useEffect(() => {
        localStorage.getItem('auth') !== null ? history.push('/dashboard') : history.push('/login')
    })

    return (
        <IonPage>
            <IonContent fullscreen>
                <LoginLayout/>
            </IonContent>
        </IonPage>
    )

}
