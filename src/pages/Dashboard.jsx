import {IonContent, IonPage} from "@ionic/react";
import DashboardLayout from "../components/DashboardLayout";

export default function Dashboard() {
    return (
        <IonPage>
            <IonContent fullscreen>
                    <DashboardLayout/>
            </IonContent>
        </IonPage>
    )
}
