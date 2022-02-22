import Icon from "./Icon";
import {useForm} from "react-hook-form";
import {IonDatetime, useIonToast} from "@ionic/react";
import useVaults from "../hooks/useVaults";
import useMovements from "../hooks/useMovements";

export default function TransferModal({data, closeModal}) {
    const [present] = useIonToast()
    const {register, handleSubmit} = useForm()
    const {vaultSubmit} = useMovements()
    return (
        <div className={'xs:flex xs:h-screen xs:items-end sm:flex sm:h-screen sm:items-end md:items-center'}>
            <div
                className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full xs:rounded-b-none sm:rounded-b-none md:rounded-2xl xs:h-3/4">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <span className="rounded-xl relative p-2 bg-blue-100 text-blue-500">
                          <Icon name='Info'/>
                        </span>
                        <div className="flex flex-row w-full ">
                            <span className="font-bold text-md text-black dark:text-white ml-2">
                                Transferring to {data.name}
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
                <div className={'overflow-y-auto h-91'}>
                    <form
                        onSubmit={handleSubmit((formData) => {
                            formData.vault = data.id
                            console.log(formData)
                            vaultSubmit(formData)
                            closeModal()
                        }, () => present('Invalid data, please re-check', 1000))}
                        className={' w-full my-2'}>
                        <div>
                            <div className="flex relative w-full mb-4">
                        <span
                            className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                            <Icon name={"Euro"}/>
                        </span>
                                <input type="number" id="amount_field"
                                       className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                       name="target" placeholder="Amount"
                                       {...register("amount", {required: true})}/>
                            </div>

                        </div>
                        <button
                            type={'submit'}
                            className=" my-2 py-1 px-4 w-full flex justify-between items-center bg-green-100 hover:bg-green-200 focus:ring-green-500 focus:ring-offset-green-200 text-green-500 transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg text-xs sm:col-span-2">
                            <Icon name={'Check'}/>
                            Confirm
                        </button>
                    </form>

                </div>

            </div>
        </div>
    )
}
