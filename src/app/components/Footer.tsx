import Image from "next/image"

import JaviLogo from '@/app/assets/images/javi-logo-hd.png'

export default function Footer() {
    return (
        <footer className="mt-10 rounded-3xl border-0 lg:border-2 border-solid border-zinc-200 dark:border-stone-800 lg:p-20 p-5 mb-10 ">
            <div className={'grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'}>

                <div className={'flex flex-col items-center lg:items-start'}>
                    <h1 className={'text-center lg:text-left font-display text-4xl font-medium sm:text-5xl text-zinc-800 dark:text-white'}>Let's</h1>
                    <h1 className={'text-center lg:text-left font-display text-4xl font-medium sm:text-5xl text-zinc-800 dark:text-white'}>work <span className={'text-black dark:text-neutral-300'}>together</span></h1>
                    <p className={'mt-2 lg:text-left text-center text-zinc-700 dark:text-white'}>Contact me to see how we can elevate your next project together.</p>

                    <a className={'mt-5 w-full lg:w-auto flex justify-center items-center rounded bg-black px-5 py-3 text-base font-semibold text-white hover:bg-white hover:text-black dark:bg-white dark:text-black focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-black flex-1 text-center lg:flex-none'}
                       href="mailto:hello@javirdz.com">
                        Contact me
                        <span className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="size-6">
                                <path
                                    d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z"/>
                                <path
                                    d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z"/>
                            </svg>
                        </span>
                    </a>
                </div>

                <div>
                    <p className={'mb-2 text-center lg:text-left leading-relaxed text-zinc-700 font-semibold dark:text-white'}>Pushing the boundaries of web and mobile development for optimal user experiences.</p>
                    <p className={'text-center lg:text-left leading-relaxed text-zinc-700 dark:text-neutral-300'}>Let's collaborate to turn your ideas into powerful, efficient, and user-friendly applications.</p>

                    <div className={'flex flex-col justify-center items-center lg:items-start'}>
                        <Image className={'javi-logo mt-12'} width={0} height={0} sizes={'100vw'} style={{ width: '50px' }} src={ JaviLogo } alt={'javi'} />

                        <p className={'mt-5 text-xs text-zinc-600 dark:text-neutral-300 text-center lg:text-left'}>© { new Date().getFullYear() } Javi Rodríguez.</p>
                        <p className={'mt-1 text-xs text-zinc-600 dark:text-neutral-300 text-center lg:text-left'}>All rights reserved. All trademarks and logos are property of their respective owners.</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}
