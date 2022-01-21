import {IonContent, IonPage} from "@ionic/react";
import LoginLayout from "../components/LoginLayout";

export default function Login() {
    return (
        <IonPage>
            <IonContent fullscreen>
                <LoginLayout/>
            </IonContent>
        </IonPage>
    )

}
