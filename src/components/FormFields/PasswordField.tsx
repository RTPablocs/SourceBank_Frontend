import InputIcon from "./InputIcon";

const PasswordField: React.FC = () => {
    return (

        <div className=" relative ">
            <InputIcon icon='Key' placeholder='Password' type='password'/>
            <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3">
                <div className="h-full col-span-3 bg-green-500 rounded">
                </div>
                <div className="h-full col-span-3 bg-green-500 rounded">
                </div>
                <div className="h-full col-span-3 bg-green-500 rounded">
                </div>
                <div className="h-full col-span-3 bg-gray-200 rounded dark:bg-dark-1">
                </div>
            </div>
            <div className="mt-2 text-green-500">
                Valid password
            </div>
        </div>

    )
}
export default  PasswordField