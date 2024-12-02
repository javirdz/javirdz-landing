import Header from "@/app/components/Header"
import Hero from "@/app/components/Hero"
import Stats from "@/app/components/Stats"

export default function Page(){
    return (
        <main className={'min-h-screen px-5 py-5 lg:px-48 lg:py-12'}>

            { Header() }

            { Hero() }

            { Stats() }

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aperiam autem dicta doloribus ipsum iste iure maxime modi non, nostrum odio pariatur quibusdam saepe similique tempore ullam, velit veritatis vero.</p>
        </main>
    )
}
