import {IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonProgressBar, useIonModal} from "@ionic/react";
import Icon from "./Icon";
import VaultModal from "./VaultModal";
import useVaults from "../hooks/useVaults";

export default function Vault({data}) {
    const handleDismiss = () => dismiss()
    const {del} = useVaults()
    const [present, dismiss] = useIonModal(VaultModal, {
        data: data,
        closeModal: handleDismiss,
    })
    const calculateVaultPercentage = () => (data.amount * 100) / data.target
    return (
        <IonItemSliding className={'mb-4'}>
            <IonItemOptions side={'end'}>
                <IonItemOption
                    className={'bg-gray-100 text-gray-500 font-semibold rounded-l'}>
                <Icon name={'ArrowLeftRight'}/>
            </IonItemOption>
                <IonItemOption className={'bg-blue-100 text-blue-500 font-semibold'} id={'vault-trigger'}>
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

                        <span className="text-sm inline-block text-gray-500 dark:text-gray-100">
                                                Current Amount :
                                                <span className="text-gray-700 dark:text-white font-bold">
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
