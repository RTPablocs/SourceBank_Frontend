import {IonContent, IonPage} from "@ionic/react";
import RegisterLayout from "../components/RegisterLayout";

const Register: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <RegisterLayout/>
            </IonContent>
        </IonPage>
    )
}

export default Register