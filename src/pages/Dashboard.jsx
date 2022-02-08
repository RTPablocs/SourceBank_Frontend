import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import DashboardLayout from "../components/DashboardLayout";

export default function Dashboard() {
    const refreshData = (event) => {
        window.location.reload()
        event.detail.complete()
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refreshData}>
                    <IonRefresherContent pullingText="Pull to refresh data">
                    </IonRefresherContent>
                </IonRefresher>
                <DashboardLayout/>
            </IonContent>
        </IonPage>
    )
}
