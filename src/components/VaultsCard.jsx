import Icon from "./Icon";
import Vault from "./Vault";

export default function VaultsCard({data}){
    return (
        <div className="mb-4">
            <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                                            <span className="rounded-xl relative p-2 bg-blue-100 text-blue-500">
                                                <Icon name={"Lock"}/>
                                            </span>
                        <div className="flex flex-col">
                                                <span className="font-bold text-md text-black dark:text-white ml-2">
                                                    Vaults
                                                </span>
                        </div>
                    </div>
                </div>
                <Vault data={{name: "Weekend Savings", targetAmount: 2000, currentAmount: 20 }}/>
            </div>
        </div>
    )
}
