import Icon from "./Icon";
import Vault from "./Vault";
import {IonList} from "@ionic/react";
import {useIonModal} from "@ionic/react";
import VaultCreatorModal from "./VaultCreatorModal";

export default function VaultsCard({data}) {
    const handleDismiss = () => dismiss()
    const [present, dismiss] = useIonModal(VaultCreatorModal, {
        data: data,
        closeModal: handleDismiss,
    })

    return (
        <div className="mb-4 sm:ml-4 xl:mr-4">
            <div className="shadow-lg rounded-2xl p-4 bg-white w-full">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                                            <span className="rounded-xl relative p-2 bg-blue-100 text-blue-500">
                                                <Icon name={"Lock"}/>
                                            </span>
                        <div className="flex flex-col">
                                                <span className="font-bold text-md text-black ml-2">
                                                    Vaults
                                                </span>
                        </div>
                    </div>
                    <button type={'button'} onClick={() => present()}
                            className={'py-2 px-4 flex justify-between items-center bg-blue-100 hover:bg-blue-200 focus:ring-blue-red-500 focus:ring-offset-blue-200 text-blue-500 transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg text-xs'}>
                        NEW VAULT
                    </button>
                </div>
                <IonList className={'h-40 overflow-auto'}>
                    {data && data.vaults.length > 0  ? data.vaults.map((vault)=> <Vault data={vault} key={vault.id}/>): <p className={'text-center'}>No Vaults Available</p>}
                </IonList>
            </div>
        </div>
    )
}
