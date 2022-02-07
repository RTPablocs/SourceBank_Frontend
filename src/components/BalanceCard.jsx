import Icon from "./Icon";
import MovementDisplay from "./MovementDisplay";

export default function BalanceCard({data}) {
    return (
        <div className="mb-4">
            <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <span className="rounded-xl relative p-2 bg-blue-100 text-blue-500">
                          <Icon name='PiggyBank'/>
                        </span>
                        <div className="flex flex-col">
                            <span className="font-bold text-md text-black dark:text-white ml-2">
                                Account Balance
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">
                    </div>
                </div>
                <div className="block m-auto">
                    <div>
                        {data === null ?
                            <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                                0
                                <span className="text-4xl"> € </span>
                            </p> :
                            <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                                {data.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                                <span className="text-4xl"> € </span>
                            </p>}
                    </div>
                </div>
                <div className="flex items-center justify-between my-4 space-x-4">
                        <span className="px-4 py-2 flex items-center text-xs rounded-md text-blue-500 font-semibold bg-blue-100">
                        RECENT MOVEMENTS
                    </span>
                    <button className="py-1 px-4 w- flex justify-between items-center bg-blue-100 hover:bg-blue-200 focus:ring-blue-red-500 focus:ring-offset-blue-200 text-blue-500 transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg text-xs">
                        <Icon name={'ArrowLeftRight'} />
                        TRANSFER
                    </button>
                </div>
                <div className="overflow-auto h-32">
                    <ul>
                        {data === null ? <li>No movements available</li> : data.movements.map(movement =>
                            <MovementDisplay data={movement} key={movement.movement_id}/>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}
