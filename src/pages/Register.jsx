import {IonContent, IonPage} from "@ionic/react";
import RegisterLayout from "../components/RegisterLayout";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";

export default function Register() {
    const history = useHistory()
    useEffect(() => {
        localStorage.getItem('auth') !== null ? history.push('/dashboard') : history.push('/login')
    })

    return (
        <IonPage>
            <IonContent fullscreen>
                <RegisterLayout/>
            </IonContent>
        </IonPage>
    )
}
