import Input from "./FormFields/Input";
import InputIcon from "./FormFields/InputIcon";
import {useForm, Controller} from "react-hook-form";
import {Link} from "react-router-dom"
import {useIonToast} from "@ionic/react";
import useUser from "../hooks/useUser";
import Avatar, {genConfig} from "react-nice-avatar";
import {useState} from "react";

export default function RegisterLayout() {
    const {register} = useUser()
    const [present] = useIonToast()
    const [conf, setConf] = useState(genConfig())

    const {handleSubmit, control} = useForm()
    const onSubmit = handleSubmit(async (data) => {
        data.photo = JSON.stringify(conf)
        console.log(data)
        await register(data)
    }, async () => {
        await present('Cannot complete registration, fields missing or incorrect', 1500)
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
                <div className="p-6 mt-2">
                    <form onSubmit={onSubmit}>
                        <div className="flex flex-col mb-2">
                            <div className={'flex justify-center my-3 flex-col items-center'}>
                                <Avatar className="w-28 h-28 mb-3 rounded-lg" {...conf}/>
                                <button type="button"
                                        onClick={() => {
                                            setConf(genConfig())
                                        }}
                                        className="py-2 px-4 w-28 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                >
                                    Random
                                </button>
                            </div>
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
