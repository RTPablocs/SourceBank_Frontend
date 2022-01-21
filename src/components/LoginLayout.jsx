import {Link} from "react-router-dom";
import {Controller, useForm} from "react-hook-form";
import InputIcon from "./FormFields/InputIcon";
import axios from "axios";



export default function LoginLayout() {

    const {handleSubmit, control} = useForm()
    const onSubmit = handleSubmit(async (data) => {
        console.log(data)
        await axios.post('http://localhost:8000/user/login/', data)
    })
    return (
        <div className="flex justify-center items-center h-screen">
            <div
                className="flex flex-col  max-w-md h-max max-h-md px-4 py-8 bg-white rounded-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 content-center top-0">
                <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Welcome back to SourceBank
                </div>
                <span
                    className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                    Don't have an account? <Link to='/register'
                                                 className="text-sm text-blue-500 underline hover:text-blue-700">
                    Sign Up
                </Link>
                </span>
                <div className="p-6 mt-8">
                    <form>
                        <div className="flex flex-col mb-2">
                            <Controller control={control} defaultValue="" name='email'
                                        render={({field}) => <InputIcon icon='Mail' placeholder='Email'
                                                                        type='email' {...field}/>}/>

                        </div>
                        <div className='flex flex-col mb-2'>
                            <Controller control={control} defaultValue="" name='password'
                                        render={({field}) => <InputIcon icon='Key' placeholder='Password'
                                                                        type='password' {...field}/>}/>
                        </div>
                        <div className="flex w-full my-4">
                            <button type="submit"
                                    className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
