import Header from "@/app/components/Header"
import Hero from "@/app/components/Hero"
import Stats from "@/app/components/Stats"
import WhatIDo from "@/app/components/WhatIDo"
import MyExperience from "@/app/components/MyExperience"
import Footer from "@/app/components/Footer"

export default function Page(){
    return (
        <main className={'min-h-screen px-5 py-5 lg:px-48 lg:py-12'}>

            { Header() }

            <Hero />

            { Stats() }

            { WhatIDo() }

            { MyExperience() }

            { Footer() }
        </main>
    )
}
