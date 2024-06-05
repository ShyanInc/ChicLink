import { CustomInput } from '@/components/CustomInput'
import { FormTitle } from '@/components/forms/Title'

const LoginForm = () => {
    return (
        <div className={'flex flex-col py-8 px-4 bg-black border border-[#F2F99C] rounded-2xl'}>
            <FormTitle text={'Sign In'} />
            <form className={'flex flex-col gap-4'}>
                <CustomInput type="email" id="email" label="Email" placeholder="Email" />
                <CustomInput
                    type="password"
                    id="password"
                    label="Password"
                    placeholder="Password"
                />
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
export default LoginForm
