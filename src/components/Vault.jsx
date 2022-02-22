import {IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonProgressBar, useIonModal} from "@ionic/react";
import Icon from "./Icon";
import VaultModal from "./VaultModal";
import VaultEditModal from "./VaultEditModal"
import useVaults from "../hooks/useVaults";
import TransferModal from "./TransferModal";

export default function Vault({data}) {
    const handleDismiss = () => dismiss()
    const handleDismissEditor = () => dismissEditor()
    const handleDismissTransfer = () => dismissTransfers()

    const {del} = useVaults()
    const [present, dismiss] = useIonModal(VaultModal, {
        data: data,
        closeModal: handleDismiss,
    })
    const [presentEditor, dismissEditor] = useIonModal(VaultEditModal, {
        data: data,
        closeModal: handleDismissEditor,
    })
    const [presentTransfers, dismissTransfers] = useIonModal(TransferModal, {
        data: data,
        closeModal: handleDismissTransfer,
    })
    const calculateVaultPercentage = () => (data.amount * 100) / data.target
    return (
        <IonItemSliding className={'mb-4'}>
            <IonItemOptions side={'end'}>
                <IonItemOption onClick={() => {presentTransfers()}}
                    className={'bg-gray-100 text-gray-500 font-semibold rounded-l'}>
                <Icon name={'ArrowLeftRight'}/>
            </IonItemOption>
                <IonItemOption onClick={() => presentEditor()} className={'bg-blue-100 text-blue-500 font-semibold'} id={'vault-trigger'}>
                    <Icon name={'Edit'}/>
                </IonItemOption>
                <IonItemOption onClick={() => del(data.id)} className={'bg-red-100 text-red-500 rounded-r font-semibold'}>
                    <Icon name={'Trash'}/>
                </IonItemOption>
            </IonItemOptions>

            <IonItem lines={'none'} className={'flex flex-col w-full px-0'} onClick={() => present()}>
                <div className="w-full">
                    <div>
                        <div className={'flex flex-row justify-between items-center'}>
                            <span className={"text-xl block break-all"}>{data.name}</span>
                            {data && data.date !== null ?
                                <span
                                    className="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-gray-500 bg-gray-100">
                                        {new Date(data.date).toLocaleDateString()}
                                    </span>: <></>}
                        </div>

                        <span className="text-sm inline-block text-gray-500">
                                                Current Amount :
                                                <span className="text-gray-700 font-bold">
                                                    {data.amount}
                                                </span>
                                                /{data.target}
                                            </span>
                    </div>
                    <IonProgressBar value={calculateVaultPercentage() / 100}
                                    className={'w-full h-2 rounded-full'}>
                    </IonProgressBar>

                </div>

            </IonItem>
        </IonItemSliding>
    )
}
