import Notification from './Notification';
import {IonBadge} from '@ionic/react';

export default function NotificationsCard ({data}) {
    //TODO Set number only for unread
    return (
        <div className='mb-4 sm:ml-4 xl:mr-4'>
            <div className='shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full '>
                <p className='flex justify-between font-bold text-md text-black dark:text-white'>
                    Notifications <IonBadge className={'bg-red-500 flex items-center px-2 py-2'} >9</IonBadge>
                </p>
                <ul className={'h-80 overflow-auto'}>
                    <Notification data={{message: 'New Transfer Alert', status: 1, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 1, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                    <Notification data={{message: 'New Transfer Alert', status: 0, name: 'Transfer' }}/>
                </ul>
            </div>
        </div>
    )
}
