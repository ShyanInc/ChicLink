import LoginForm from '@/components/forms/Login'

const LoginPage = () => {
    return (
        <main className="flex-1 flex items-center justify-center">
            <div className="container flex justify-between">
                <div className="flex items-center justify-center">
                    <h1 className="text-[#F2F99C] text-5xl">Meet Your Perfect Match</h1>
                </div>
                <div className="flex-1 max-w-[400px]">
                    <LoginForm />
                </div>
            </div>
        </main>
    )
}

export default LoginPage
