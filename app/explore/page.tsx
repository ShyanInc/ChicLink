import Card from '@/components/Card/Card'

const ExplorePage = () => {
    return (
        <main className="flex flex-1 justify-center">
            <div className="container flex justify-center items-center">
                <Card
                    name={'Emilie'}
                    age={24}
                    gender={'female'}
                    about={'Some information about person'}
                />
            </div>
        </main>
    )
}

export default ExplorePage
