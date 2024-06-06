import { CustomInput } from '@/components/CustomInput'
import { FormTitle } from '../Title'

const RegisterForm = () => {
    return (
        <div className={'flex flex-col py-8 px-4 bg-black border border-[#F2F99C] rounded-2xl'}>
            <FormTitle text={'Sign Up'} color={'white'} />
            <form className={'flex flex-col gap-4'}>
                <CustomInput type="email" id="email" label="Email" placeholder="Email" />
                <CustomInput
                    type="password"
                    id="password"
                    label="Password"
                    placeholder="Password"
                />
                <CustomInput
                    type="password"
                    id="confirm_password"
                    label="Repeat password"
                    placeholder="Password"
                />
                <div className="flex gap-1">
                    <CustomInput type="text" id="first_name" label="Name" placeholder="Name" />
                    <CustomInput type="text" id="last_name" label="Surname" placeholder="Surname" />
                </div>
                <CustomInput type="text" id="city" label="City" placeholder="City" />
                <CustomInput type="tel" id="phone" label="Phone Number" placeholder="+380" />
                <button
                    type="submit"
                    className={
                        'py-3 px-1 text-white border border-[#F2F99C] rounded-lg hover:bg-[#F2F99C] hover:text-black'
                    }
                >
                    Sign In
                </button>
            </form>
        </div>
    )
}
export default RegisterForm
