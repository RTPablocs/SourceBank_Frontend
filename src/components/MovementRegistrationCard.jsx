import Icon from "./Icon";
import useMovements from "../hooks/useMovements"
import {useForm} from "react-hook-form";
import {useIonModal, useIonToast} from "@ionic/react";
import QRModal from "./QRModal";
import {BarcodeScanner} from "@awesome-cordova-plugins/barcode-scanner";
import {useState} from "react";

export default function MovementRegistration({transfer, state}) {
    const {submit} = useMovements()
    const [QrData, setQr] = useState(false)
    const [modalProps, setModalProps] = useState({m:0})
    const {register, handleSubmit} = useForm()
    const [present] = useIonToast()

    const openScanner = async () => {
        const data = await BarcodeScanner.scan({
            prompt: ''
        });
        submit(JSON.parse(data.text))
    };

    const [modal, dismiss] = useIonModal(QRModal, {
        data: modalProps,
        closeModal: () => dismiss()
    })


    return (
        <div className="mb-4">
            <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <span className="rounded-xl relative p-2 bg-blue-100 text-blue-500">
                          <Icon name='Send'/>
                        </span>
                        <div className="flex flex-col">
                            <span className="font-bold text-md text-black dark:text-white ml-2">
                                Send Money
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">
                    </div>
                </div>
                <div className="block m-auto">
                    <div>
                        <form onSubmit={handleSubmit((data) => {
                            if (QrData) {
                                setModalProps(data)
                                modal()
                            } else {
                                submit(data)
                            }
                        }, () => present('Invalid data, please re-check', 1000))}>
                            <div className="flex relative mb-4">
                            <span
                                className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <Icon name={"User"}/>
                            </span>
                                <input type="text" id="user_field"
                                       className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                       name="username"
                                       placeholder="Recipient username" {...register("username", {required: true})}/>
                            </div>
                            <div className={"flex gap-4"}>
                                <div className="flex w-full relative mb-4">
                            <span
                                className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <Icon name={"Euro"}/>
                            </span>
                                    <input type="number" id="amount_field"
                                           className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                           name="amount" placeholder="Amount"
                                           min={0} {...register("amount", {required: true})}/>
                                </div>
                                <div className="flex relative w-full mb-4">
                            <span
                                className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <Icon name={"MessageCircle"}/>
                            </span>
                                    <input type="text" id="amount_field"
                                           className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                           name="amount" placeholder="Message" {...register("message")}/>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <button onClick={() => {
                                    state(!transfer)
                                }}
                                        className="py-1 px-4 w-full flex justify-between items-center bg-red-100 hover:bg-red-200 focus:ring-red-500 focus:ring-offset-red-200 text-red-500 transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg text-xs">
                                    <Icon name={'X'}/>
                                    Cancel
                                </button>
                                <button
                                    type={'submit'}
                                    onClick={() => setQr(false)}
                                    className="py-1 px-4 w-full flex justify-between items-center bg-green-100 hover:bg-green-200 focus:ring-green-500 focus:ring-offset-green-200 text-green-500 transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg text-xs">
                                    <Icon name={'Check'}/>
                                    Confirm
                                </button>
                                <button
                                    type={'button'}
                                    onClick={openScanner}
                                    className="py-1 px-4 w-full flex justify-between items-center bg-blue-100 hover:bg-blue-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-blue-500 transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg text-xs">
                                    <Icon name={'ScanLine'}/>
                                    Scan QR
                                </button>
                                <button
                                    type={'submit'}
                                    onClick={() => setQr(true)}
                                    className="py-1 px-4 w-full flex justify-between items-center bg-gray-100 hover:bg-gray-200 focus:ring-gray-500 focus:ring-offset-gray-200 text-gray-500 transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg text-xs">
                                    <Icon name={'QrCode'}/>
                                    Generate QR
                                </button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}
