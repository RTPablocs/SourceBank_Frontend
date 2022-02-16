import Notification from './Notification';
import {IonBadge} from '@ionic/react';
import {useEffect} from "react";


export default function NotificationsCard({data}) {
    //TODO Set number only for unread and work with context to update data from grandparent to grandson
    const unreadNots = data.notifications.map(not => not.status).filter(code => code === 1)
    console.log()
    return (
        <div className='mb-4 sm:ml-4 xl:mr-4'>
            <div className='shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full '>
                <p className='flex justify-between font-bold text-md text-black dark:text-white'>
                    Notifications <IonBadge
                    className={'bg-red-500 flex items-center px-2 py-2'}>{unreadNots.length === 0 ? 0 : unreadNots.reduce((prv, next) => prv + next)}</IonBadge>
                </p>
                <ul className={`h-80 overflow-auto`}>
                    {data ?
                        data.notifications.map(notification =>
                            <Notification data={notification} key={notification.id}/>) :
                        <li className={"text-center"}>No Notifications available</li>}
                </ul>
            </div>
        </div>
    )
}
