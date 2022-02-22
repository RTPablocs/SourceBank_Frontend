import Notification from './Notification';
import {IonBadge} from '@ionic/react';
import {useEffect} from "react";


export default function NotificationsCard({data}) {
    //TODO Set number only for unread and work with context to update data from grandparent to grandson
    return (
        <div className='mb-4 sm:ml-4 xl:mr-4'>
            <div className='shadow-lg rounded-2xl p-4 bg-white w-full '>
                <p className='flex justify-between font-bold text-md text-black'>
                    Notifications <IonBadge
                    className={'bg-red-500 flex items-center px-2 py-2'}>{data ? data.notifications.length : 0}</IonBadge>
                </p>
                <ul className={`h-80 overflow-auto`}>
                    {data && data.notifications.length > 0 ?
                        data.notifications.map(notification =>
                            <Notification data={notification} key={notification.id}/>) :
                        <li className={"text-center"}>No Notifications available</li>}
                </ul>
            </div>
        </div>
    )
}
