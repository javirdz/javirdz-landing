'use client'

import Image from "next/image"

import VueLogo from '@/app/assets/images/tech-logos/vue-logo.png'
import LaravelLogo from '@/app/assets/images/tech-logos/laravel-logo.png'

import ProfileImg from '@/app/assets/images/javi-rdz-profile-img.png'
import ProfileImgDark from '@/app/assets/images/javi-rdz-profile-img-dark.png'

export default function Hero() {

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    /*useEffect(() => {
        const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
        setIsDarkMode(darkMode)
    }, [])*/

    return (
        <div className={'grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-10'}>
            <div
                className="col-span-1 lg:col-span-2 lg:bg-gradient-to-b bg-gradient-to-t from-zinc-200 to-transparent dark:from-stone-800 dark:to-transparent rounded-b-2xl lg:rounded-2xl p-5 lg:p-10 min-h-96 order-2 lg:order-1">

                {/* FOR DESKTOP */}
                <h1 className={' font-display text-4xl font-medium leading-tight hidden lg:block '}>Hello,
                    I&#39;m Javi Rodriguez</h1>
                <h1 className={' mt-1 font-display text-3xl font-medium leading-tight hidden lg:block'}>
                    a
                    <span className={'ml-2 mr-2 underline underline-offset-4'}>full-stack developer</span>
                    based in Monterrey, México
                </h1>

                {/* FOR MOBILE */}
                <h1 className={'font-display text-3xl font-medium leading-tight text-center block lg:hidden'}>Hello</h1>
                <h1 className={'font-display text-3xl font-medium leading-tight text-center block lg:hidden'}>I&#39;m Javi Rodriguez</h1>
                <h1 className={'mt-1 font-display text-2xl font-medium leading-tight text-center block lg:hidden'}>
                    a
                    <span className={'ml-2 mr-2 underline underline-offset-4'}>full-stack developer</span>
                    based in Monterrey, México
                </h1>


                <div className={'mt-5 mb-5'}>
                    <p className={'uppercase font-semibold text-xs text-center lg:text-left dark:text-neutral-300'}>Specialized in:</p>
                    <div className="mt-2 flex gap-3 justify-center lg:justify-start">
                        <Image width={0} height={0} sizes={'100vw'} style={{height: '26px', width: 'auto'}}
                               src={LaravelLogo} alt={'Laravel'}/>
                        <Image width={0} height={0} sizes={'100vw'} style={{height: '30px', width: 'auto'}}
                               src={VueLogo} alt={'VueJS'}/>
                    </div>
                </div>

                <p className={'font-sans leading-relaxed mb-5 text-justify'}>My passion lies in crafting robust,
                    scalable solutions that solve real-world problems.</p>
                <p className={'font-sans leading-relaxed mb-5 text-justify'}>Whether you're a startup looking to build
                    your MVP or an established company aiming to optimize your digital presence, I bring the technical
                    expertise and creative problem-solving skills to bring your vision to life.</p>
                <p className={'font-sans leading-relaxed text-xl font-bold mb-5 text-center lg:text-left'}>Let's
                    collaborate on your next project!</p>

                <div className={'flex gap-3'}>
                    <a className={'rounded bg-black px-5 py-3 text-base font-semibold text-white hover:bg-white hover:text-black dark:bg-white dark:text-black focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-black flex-1 text-center lg:flex-none'}
                       href="mailto:hello@javirdz.com">
                        Let&#39;s talk
                    </a>

                    <a className={'flex items-center justify-center bg-white text-black rounded w-12 h-12 hover:bg-black hover:text-white dark:bg-stone-900 dark:text-white'}
                       href="https://www.linkedin.com/in/javirdz/" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" width="100"
                             height="100" viewBox="0 0 30 30" className="size-8">
                            <path
                                d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                        </svg>
                    </a>

                    <a className={'flex items-center justify-center bg-white text-black rounded w-12 h-12 hover:bg-black hover:text-white dark:bg-stone-900 dark:text-white'}
                       href="https://github.com/javirdz" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" width="100"
                             height="100" viewBox="0 0 50 50" className="size-8">
                            <path
                                d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className={'rounded-t-2xl background-img lg:rounded-2xl p-10 min-h-96 order-1 lg:order-2'}
                 style={{
                     backgroundImage: `url(${  prefersDark ? ProfileImgDark.src : ProfileImg.src}) `
                 }}
            ></div>
        </div>
    )
}
