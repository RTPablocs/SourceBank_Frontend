import Input from "./FormFields/Input";
import InputIcon from "./FormFields/InputIcon";
import PasswordField from "./FormFields/PasswordField";

const RegisterLayout: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div
                className="flex flex-col  max-w-md h-max max-h-md px-4 py-8 bg-white rounded-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 content-center top-0">
                <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Welcome to SourceBank
                </div>
                <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                    Already have an account? <a href="#" target="_blank"
                                                className="text-sm text-blue-500 underline hover:text-blue-700">
                    Sign in
                </a>
                </span>
                <div className="p-6 mt-8">
                    <form action="#">
                        <div className="flex flex-col mb-2">
                            <InputIcon icon='User' placeholder='Username' type='text'/>
                        </div>
                        <div className="flex gap-4 mb-2">
                            <Input placeholder='First name' type='text'/>
                            <Input placeholder='Last Name' type='text'/>
                        </div>
                        <div className="flex flex-col mb-2">
                            <InputIcon icon='Mail' placeholder='Email' type='email'/>
                        </div>
                        <div className="flex flex-col mb-2">
                            <InputIcon icon='Phone' placeholder='Phone Number' type='text'/>
                        </div>
                        <div className='flex gap-4 mb-2'>
                            <Input placeholder='City' type='text'/>
                            <Input placeholder='Country' type='text'/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <PasswordField/>
                        </div>
                        <div className="flex w-full my-4">
                            <button type="submit"
                                    className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default RegisterLayout