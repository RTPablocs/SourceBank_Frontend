import {IonItem, IonItemOption, IonItemOptions, IonItemSliding} from "@ionic/react";
import Icon from "./Icon";
import VaultModal from "./VaultModal";

export default function Vault({data}) {
    return (
        <IonItemSliding>
            <IonItemOptions side={'end'}> <IonItemOption
                className={'bg-gray-100 text-gray-500 font-semibold rounded-l'}>
                <Icon name={'ArrowLeftRight'}/>
            </IonItemOption>
                <IonItemOption className={'bg-blue-100 text-blue-500 font-semibold'} id={'vault-trigger'}>
                    <Icon name={'Edit'}/>
                </IonItemOption>
                <IonItemOption className={'bg-red-100 text-red-500 rounded-r font-semibold'}>
                    <Icon name={'Trash'}/>
                </IonItemOption>
            </IonItemOptions>

            <IonItem lines={'none'} className={'flex flex-col w-full px-0'}>
                <div className="w-full">
                    <div>
                        <div className={'flex flex-row justify-between items-center'}>
                            <span className={"text-xl block break-all"}>{data.name}</span>
                            <span
                                className="px-2 py-1 flex w-40 items-center text-xs rounded-md font-semibold text-gray-500 bg-gray-100">
                                        END DATE : 18 JUN 2023
                                    </span>
                        </div>

                        <span className="text-sm inline-block text-gray-500 dark:text-gray-100">
                                                Current Amount :
                                                <span className="text-gray-700 dark:text-white font-bold">
                                                    {data.currentAmount}
                                                </span>
                                                /{data.targetAmount}
                                            </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                        <div
                            className="w-1/12 h-full text-center text-xs text-white bg-blue-500 rounded-full">
                        </div>
                    </div>

                </div>

            </IonItem>
            <VaultModal trigger={'vault-trigger'}/>
        </IonItemSliding>
    )
}
