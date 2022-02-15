import Icon from "./Icon";
import {IonProgressBar} from "@ionic/react";

export default function VaultModal({data, closeModal}) {
    const calculateVaultPercentage = () => (data.currentAmount * 100) / data.targetAmount
    return (
        <div className={'xs:flex xs:h-screen xs:items-end sm:flex sm:h-screen sm:items-end md:items-center'}>
            <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full xs:rounded-b-none sm:rounded-b-none md:rounded-2xl h-3/4">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <span className="rounded-xl relative p-2 bg-blue-100 text-blue-500">
                          <Icon name='Info'/>
                        </span>
                        <div className="flex flex-col">
                            <span className="font-bold text-md text-black dark:text-white ml-2">
                                Vault Info for {data.name}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span>
                            <button type={'button'} onClick={() => closeModal()}
                                    className="py-2 px-2 flex justify-between items-center bg-red-100 hover:bg-red-200 focus:ring-red-500 focus:ring-offset-red-200 text-red-500 transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg text-xs">
                                <Icon name={'X'}/></button>
                        </span>
                    </div>
                </div>
                <div className="block m-auto">
                    <span className={'dark:text-gray-100 text-4xl text-left font-bold my-4'}>
                        {`${data.currentAmount} € / ${data.targetAmount} €`}
                    </span>

                    <div>
                        <div className="block mt-4">
                            <div className={'flex justify-between'}>
                            <span
                                className="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-100 font-semibold">
                                        YOU'VE SAVED {data.currentAmount} €
                                    </span>
                                <span
                                className="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-gray-500 bg-gray-100">
                                        18 JUN 2023
                                    </span>
                            </div>
                            <div className="w-full h-4 mt-4">
                                <IonProgressBar value={calculateVaultPercentage() / 100}
                                                className={'w-full h-4 rounded-full'}>
                                </IonProgressBar>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex items-center justify-between my-4 space-x-4">
                    <span
                        className={'py-2 px-4 flex justify-between items-center bg-blue-100 text-blue-500 text-center font-semibold rounded-lg text-xs'}>
                        RECENT MOVEMENTS
                    </span>
                </div>
                <div className="overflow-auto h-32">
                </div>
            </div>
        </div>
    )
}
