import Icon from "./Icon";
import {IonItem, IonItemOption, IonItemOptions, IonItemSliding} from "@ionic/react";
import {useCallback, useState} from "react";
import useNotifications from "../hooks/useNotifications";

export default function Notification({data}) {
    const {read} = useNotifications()
    return (
        data.status === 0 ? <IonItemSliding>
                <IonItemOptions side={'end'} className={'py-2'}>
                    <IonItemOption color={'none'} onClick={() =>
                        read(data.id)
                    } className={'bg-blue-100 text-blue-500 rounded font-semibold'}>Mark as
                        read</IonItemOption>
                </IonItemOptions>
                <IonItem lines={"none"}
                         className={`flex flex-row py-2 items-center space-x-2 text-blue-500`}>
                    <div className="block relative">
                        <Icon name={data.status === 0 ? "AlertCircle" : "CheckCircle"}
                              className="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </div>
                    <div className="flex flex-col">
                <span
                    className={`text-sm font-semibold dark:text-white ml-2 text-blue-500`}>
                    {data.title}
                </span>
                        <span
                            className={`text-sm dark:text-gray-300 ml-2 text-blue-500`}>
                    {data.message}
                </span>

                    </div>
                </IonItem>
            </IonItemSliding> :
            <IonItem lines={"none"}
                     className={`flex flex-row py-2 items-center space-x-2 text-gray-200`}>
                <div className="block relative">
                    <Icon name={"CheckCircle"}
                          className="mx-auto object-cover rounded-full h-10 w-10 "/>
                </div>
                <div className="flex flex-col">
                <span
                    className={`text-sm font-semibold dark:text-white ml-2 text-gray-200`}>
                    {data.title}
                </span>
                    <span
                        className={`text-sm dark:text-gray-300 ml-2 text-gray-200 `}>
                    {data.message}
                </span>

                </div>
            </IonItem>
    )
}
