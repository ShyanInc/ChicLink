import LoginForm from '@/components/forms/Login'
import { FormTitle } from '@/components/forms/Title'
import { Approutes } from '@/utils/constans'

const LoginPage = () => {
    return (
        <main className='className="flex flex-col items-center justify-between'>
            <FormTitle text="Sign in" backStepText="Home" backStepRoute={Approutes.Landing} />
            <LoginForm />
        </main>
    )
}

export default LoginPage
