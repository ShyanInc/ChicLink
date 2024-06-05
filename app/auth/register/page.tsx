import RegisterForm from '@/components/forms/Register'

const RegisterPage = () => {
    return (
        <main className="flex-1 flex items-center justify-center">
            <div className="container flex justify-between">
                <div className="flex-1 max-w-[400px]">
                    <RegisterForm />
                </div>
                <div className="flex items-center justify-center">
                    <h1 className="text-[#EAB4F7] text-5xl">Meet Your Perfect Match</h1>
                </div>
            </div>
        </main>
    )
}

export default RegisterPage
