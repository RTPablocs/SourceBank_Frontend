import Input from "./FormFields/Input";
import InputIcon from "./FormFields/InputIcon";
import {useForm, Controller} from "react-hook-form";
import {Link} from "react-router-dom"
import axios from "axios"
import {useIonToast} from "@ionic/react";
import {useHistory} from "react-router-dom";

export default function RegisterLayout() {

    const [present] = useIonToast()
    const history = useHistory()


    const {handleSubmit, control} = useForm()
    const onSubmit = handleSubmit(async (data) => {
        await present('Register Complete', 1500)
        console.log(data)
        await axios.post('http://localhost:8000/user/register/', data)
        history.push('/login')

    })
    return (<div className="flex justify-center items-center h-screen">
            <div
                className="flex flex-col  max-w-md h-max max-h-md px-4 py-8 bg-white rounded-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 content-center top-0">
                <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Welcome to SourceBank
                </div>
                <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                    Already have an account? <Link to='/login'
                                                   className="text-sm text-blue-500 underline hover:text-blue-700">
                    Sign in
                </Link>
                </span>
                <div className="p-6 mt-8">
                    <form onSubmit={onSubmit}>
                        <div className="flex flex-col mb-2">
                            <Controller control={control} defaultValue="" name='username' rules={{required: true}}
                                        render={({field}) => <InputIcon icon='User' placeholder='Username'
                                                                        type='text' {...field}/>}/>

                        </div>
                        <div className="flex gap-4 mb-2">
                            <Controller control={control} defaultValue="" name='first_name' rules={{required: true}}
                                        render={({field}) => <Input placeholder='First Name' type='text' {...field}/>}/>
                            <Controller control={control} defaultValue="" name="last_name"
                                        render={({field}) => <Input placeholder='Last Name' type='text'{...field}/>}/>
                        </div>
                        <div className="flex flex-col mb-2">
                            <Controller control={control} defaultValue="" name='email' rules={{required: true}}
                                        render={({field}) => <InputIcon icon='Mail' placeholder='Email'
                                                                        type='email' {...field}/>}/>

                        </div>
                        <div className="flex flex-col mb-2">
                            <Controller control={control} defaultValue="" name='phone'
                                        render={({field}) => <InputIcon icon='Phone' placeholder='Phone Number'
                                                                        type='text' {...field}/>}/>
                        </div>
                        <div className='flex gap-4 mb-2'>
                            <Controller control={control} defaultValue="" name="city" rules={{required: true}}
                                        render={({field}) => <Input placeholder='City' type='text'{...field}/>}/>
                            <Controller control={control} defaultValue="" name="country" rules={{required: true}}
                                        render={({field}) => <Input placeholder='Country' type='text'{...field}/>}/>
                        </div>
                        <div className='flex flex-col mb-2'>
                            <Controller control={control} defaultValue="" name='password' rules={{required: true}}
                                        render={({field}) => <InputIcon icon='Key' placeholder='Password'
                                                                        type='password' {...field}/>}/>
                        </div>
                        <div className="flex w-full my-4">
                            <button type="submit"
                                    className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    )
}
