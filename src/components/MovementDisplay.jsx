export default function MovementDisplay({data}) {
    return (
        <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-start text-sm">
                <span className={`mx-4 ${data.amount >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {data.amount}
                </span>
                <span>
                    {data.message}
                </span>
            </div>
            <span
                className={`px-2 py-1 flex items-center text-xs rounded-md font-semibold ${data.status !== 1 ? data.status === 2 ? 'bg-gray-100 text-gray-500': 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
                {data.status !== 1 ? data.status === 2 ? 'PENDING' : 'SUCCESS' : 'FAILED'}
            </span>
        </li>
    )
}
