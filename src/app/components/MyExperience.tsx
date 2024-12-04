import Image from "next/image"

import HeinekenLogo from '@/app/assets/images/client-logos/heineken-logo.png'
import HBOLogo from '@/app/assets/images/client-logos/hbo-logo.png'
import RocheLogo from '@/app/assets/images/client-logos/roche-logo.png'
import TerumoLogo from '@/app/assets/images/client-logos/terumo-logo.png'
import MyTappinessLogo from '@/app/assets/images/client-logos/mytappiness-logo.png'
import ILSBLogo from '@/app/assets/images/client-logos/ilsb-logo.png'

export default function MyExperience() {

    const techSkills = [
        'HTML',
        'CSS',
        'Javascript',
        'VueJS',
        'PHP',
        'Laravel',
        'Git',
        'GitHub',
        'MySQL',
        'React',
        'React native',
        'AWS S3',
        'AWS EC2',
        'Digital Ocean',
        'ngrok',
        'Apache',
        'Figma',
        'Miro',
        'Canva',
        'Typescript',
        'WordPress',
        'Thinkific',
        'LearnDash',
        'Inertia',
        'Vite',
        'Tailwind'
    ]

    const softSkills = [
        'Enthusiasm',
        'Communication',
        'Leadership',
        'Creativity',
        'Teamwork',
        'Problem-solving',
        'Work ethic',
        'Critical thinking',
        'Emotional intelligence',
        'Social commitment',
        'Integrity',
        'Attention to detail',
        'Empathy',
        'Customer service',
        'Goal-setting',
        'Patience',
        'Positive attitude',
        'Initiative',
        'Resilience',
    ]

    return (
        <div
            className={'border-0 lg:border-2 border-solid border-zinc-200 dark:border-stone-800 rounded-3xl mt-10 p-5 lg:p-10'}
            id={'experience'}>

            <h1 className={'mt-4 font-display text-4xl font-medium sm:text-5xl text-zinc-800 dark:text-white'}>My
                experience</h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-700 dark:text-neutral-300 whitespace-pre-wrap">
                Throughout my career, I've successfully delivered over 20 projects for clients ranging from startups to
                established corporations, always pushing the boundaries of what's possible in web and mobile
                development.
            </p>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                    <div
                        className="w-full bg-transparent border-2 border-zinc-100 dark:border-stone-900 rounded-2xl py-5 px-5 text-zinc-800 dark:text-neutral-300">
                        <h1 className={'text-sm font-bold uppercase mb-2 text-zinc-800 dark:text-neutral-300'}>Work
                            experience</h1>

                        <div className="mt-6">
                            <h1 className="mb-1 text-xs font-bold uppercase text-zinc-800 dark:text-neutral-300">2019 -
                                Currently</h1>
                            <p className="text-lg font-semibold font-display">Software developer</p>
                            <p className="mb-1 text-sm text-zinc-800 dark:text-neutral-300 font-semibold">Freelance</p>
                            <p className="mt-1 text-zinc-700 dark:text-neutral-300">
                                Over the past 5 years, I've got the chance to work for multiple clients from different
                                industries like Heineken, Hoffmann-La Roche, HBO, Campari Group, and more.
                            </p>
                        </div>

                        <div className="mt-6">
                            <h1 className="mb-1 text-xs font-bold uppercase text-zinc-800 dark:text-neutral-300">2014 -
                                2019</h1>
                            <p className="text-lg font-semibold font-display">Software developer Jr</p>
                            <p className="mb-1 text-sm text-zinc-800 font-semibold dark:text-neutral-300">Ingeniería
                                Sustentable & TIC</p>
                            <p className="mt-1 text-zinc-700 dark:text-neutral-300">
                                At IS&TIC I had the opportunity to work on my first professional projects. I was in
                                charge of developing different web platforms for local clients in Monterrey.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className="w-full bg-transparent border-2 border-zinc-100 dark:border-stone-900 rounded-2xl py-5 px-5 text-zinc-800 dark:text-neutral-300">
                        <h1 className={'text-sm font-bold uppercase mb-2 text-zinc-800 dark:text-neutral-300'}>Education</h1>

                        <div className="mt-6">
                            <h1 className="mb-1 text-xs font-bold uppercase text-zinc-800 dark:text-neutral-300">2012 -
                                2017</h1>
                            <p className="mb-1 text-lg font-semibold font-display">Ing. Tecnología de Software</p>
                            <p className="mt-1 text-zinc-700 dark:text-neutral-300">Facultad de Ingeniería Mecánica y
                                Eléctrica</p>
                        </div>

                        <div className="mt-6">
                            <h1 className="mb-1 text-xs font-bold uppercase text-zinc-800 dark:text-neutral-300">2015 -
                                Currently</h1>
                            <p className="mb-1 text-lg font-semibold font-display">Platzi</p>
                            <p className="mt-1 text-zinc-700 dark:text-neutral-300">My trusted source of education.</p>
                        </div>

                        <div className="mt-6">
                            <h1 className="mb-1 text-xs font-bold uppercase text-zinc-800 dark:text-neutral-300">2008 -
                                Currently</h1>
                            <p className="mb-1 text-lg font-semibold font-display">Self-taught</p>
                            <p className="mt-1 text-zinc-700 dark:text-neutral-300">I started to learn about HTML and
                                CSS in 2008 watching YouTube videos.</p>
                            <p className="mt-1 text-zinc-700 dark:text-neutral-300 underline">Self-learning is one of
                                the most important values in my professional career.</p>
                        </div>
                    </div>


                </div>
            </div>


            <h1 className={'mt-10 text-sm font-bold uppercase mb-2 text-zinc-800 dark:text-neutral-300'}>Clients</h1>
            <div className="flex flex-wrap items-center gap-8 mb-10">
                <Image className="brightness-0 dark:brightness-90" width={0} height={0} sizes="100vw"
                       style={{width: '100px'}} src={HeinekenLogo} alt=""/>
                <Image className="brightness-0 dark:brightness-90" width={0} height={0} sizes="100vw"
                       style={{height: '20px', width: 'auto'}} src={HBOLogo} alt=""/>
                <Image className="brightness-0 dark:brightness-90" width={0} height={0} sizes="100vw"
                       style={{width: '60px'}} src={RocheLogo} alt=""/>
                <Image className="brightness-0 dark:brightness-90" width={0} height={0} sizes="100vw"
                       style={{width: '100px'}} src={TerumoLogo} alt=""/>
                <Image className="brightness-0 dark:brightness-90" width={0} height={0} sizes="100vw"
                       style={{height: '20px', width: 'auto'}} src={MyTappinessLogo} alt=""/>
                <Image className="brightness-0 dark:brightness-90" width={0} height={0} sizes="100vw"
                       style={{height: '20px', width: 'auto'}} src={ILSBLogo} alt=""/>
            </div>

            <h1 className="text-sm font-bold uppercase mb-2 text-zinc-800 dark:text-neutral-300">Tech skills</h1>
            <div className="flex flex-wrap gap-3 mb-10">
                {
                    techSkills.map((skill) => (
                        <div className=" py-1.5 px-3.5 bg-zinc-100 dark:bg-stone-800 rounded" key={`skill_${skill}`}>
                            <p className="text-sm">{skill}</p>
                        </div>
                    ))
                }
            </div>

            <h1 className="text-sm font-bold uppercase mb-2 text-zinc-800 dark:text-neutral-300">Soft skills</h1>
            <div className="flex flex-wrap gap-3 mb-10">
                {
                    softSkills.map((skill) => (
                        <div className=" py-1.5 px-3.5 bg-zinc-100 dark:bg-stone-800 rounded" key={`skill_${skill}`}>
                            <p className="text-sm">{skill}</p>
                        </div>
                    ))
                }
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    <div className="col-span-1">
                        <div className="w-full bg-transparent">
                            <h1 className="text-sm font-bold uppercase mb-5 text-zinc-800 dark:text-neutral-300">Learning about</h1>
                            <p className="text-base leading-relaxed text-zinc-700 whitespace-pre-wrap dark:text-neutral-300">What I'm currently learning about:</p>

                            <ul className="mt-4 list-inside list-disc">
                                <li className="text-base text-zinc-700 dark:text-neutral-300">Personal growth</li>
                                <li className="text-base text-zinc-700 dark:text-neutral-300">Business</li>
                            </ul>

                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="w-full bg-transparent flex flex-col items-start">
                            <h1 className="text-sm font-bold uppercase mb-5 text-zinc-800 dark:text-neutral-300">Currently reading</h1>
                            <p className="text-base leading-relaxed text-zinc-700 dark:text-neutral-300 whitespace-pre-wrap">
                            <span className="font-semibold ml-1">
                                Cashflow Quadrant
                            </span>
                            </p>
                            <p className="text-base leading-relaxed text-zinc-700 dark:text-neutral-300 whitespace-pre-wrap">
                                <small>
                                    Author: Robert T. Kiyosaki
                                </small>
                            </p>

                            <a className="mt-5 rounded flex items-center bg-transparent border-2 border-zinc-600 px-3 py-2 text-xs text-zinc-600 font-semibold hover:bg-zinc-600 hover:text-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white dark:border-neutral-100 dark:text-neutral-300 dark:hover:bg-white dark:hover:text-black"
                               href="mailto:hello@javirdz.com">
                                Any recommendations?
                                <span className="ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="size-4">
                                    <path
                                        d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z"/>
                                    <path
                                        d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z"/>
                                </svg>
                            </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
