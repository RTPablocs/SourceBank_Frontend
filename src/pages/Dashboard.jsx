import {IonContent, IonPage} from "@ionic/react";
import DashboardLayout from "../components/DashboardLayout";
import {UserContextProvider} from "../context/UserContext";

export default function Dashboard() {
    return (
        <IonPage>
            <IonContent fullscreen>
                <UserContextProvider>
                    <DashboardLayout />
                </UserContextProvider>
            </IonContent>
        </IonPage>
    )
}
