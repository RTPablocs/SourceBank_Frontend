import Icon from "./Icon";
import QRCode from "react-qr-code";
import {useEffect} from "react";

export default function QRModal({data, closeModal}) {
    return (
        <div className={'xs:flex xs:h-screen xs:items-end sm:flex sm:h-screen sm:items-end md:items-center'}>
            <div
                className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full xs:rounded-b-none sm:rounded-b-none md:rounded-2xl h-3/3">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <span className="rounded-xl relative p-2 bg-blue-100 text-blue-500">
                          <Icon name='Info'/>
                        </span>
                        <div className="flex flex-col">
                            <span className="font-bold text-md text-black dark:text-white ml-2">
                                Scan this QR
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
                <div className="h-auto flex justify-center items-center mb-4">
                    <QRCode value={JSON.stringify(data)} size={256} level="H"/>
                </div>
            </div>
        </div>
    )
}
