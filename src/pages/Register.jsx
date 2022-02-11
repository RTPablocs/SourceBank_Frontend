import {IonContent, IonPage} from "@ionic/react";
import RegisterLayout from "../components/RegisterLayout";

export default function Register() {
    return (
        <IonPage>
            <IonContent fullscreen>
                <RegisterLayout/>
            </IonContent>
        </IonPage>
    )
}
