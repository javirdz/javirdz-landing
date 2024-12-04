import Image from "next/image"
import Html5Logo from '@/app/assets/images/tech-logos/html5-logo.png'
import CssLogo from '@/app/assets/images/tech-logos/css-logo.png'
import JsLogo from '@/app/assets/images/tech-logos/js-logo.png'
import LaravelLogo from '@/app/assets/images/tech-logos/laravel-logo.png'
import VueLogo from '@/app/assets/images/tech-logos/vue-logo.png'
import ReactLogo from '@/app/assets/images/tech-logos/react-logo.png'
import ReactNativeLogo from '@/app/assets/images/tech-logos/react-native-logo.png'
import FigmaLogo from '@/app/assets/images/tech-logos/figma-logo.png'
import MiroLogo from '@/app/assets/images/tech-logos/miro-logo.png'

export default function WhatIDo() {
    return (
        <div className={' border-0 lg:border-2 border-solid border-zinc-200 dark:border-stone-800 rounded-3xl mt-10 p-5 lg:p-10 '} id="what-i-do">

            <h1 className={'mt-4 font-display text-4xl font-medium sm:text-5xl text-zinc-800 dark:text-white'}>What I do</h1>
            <p className={'mt-5 text-lg leading-relaxed text-zinc-700 dark:text-neutral-300 whitespace-pre-wrap'}>As a digital expert, I'm dedicated to build your next big project.</p>
            <p className={'text-lg leading-relaxed text-zinc-700 dark:text-neutral-300 whitespace-pre-wrap'}>I'm committed to crafting customized solutions that match the ambition of your concepts.</p>

            <div className="grid grid-cols-3 gap-10 mt-10">
                <div
                    className={'col-span-3 lg:col-span-1 bg-transparent border-2 border-zinc-100 dark:border-stone-900 rounded-2xl py-5 px-5 text-zinc-800 dark:text-neutral-300'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-9">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
                    </svg>
                    <p className={'mt-2 text-zinc-800 dark:text-white font-display font-semibold text-lg tracking-wide'}>Web
                        development</p>
                    <p className={'mt-2 text-zinc-700 dark:text-neutral-300 text-lg leading-relaxed whitespace-pre-wrap'}>My web development service focuses on delivering websites that are user-friendly, visually appealing, and secure.</p>
                    <p className="mt-5 uppercase font-semibold text-xs flex items-center text-zinc-800 dark:text-neutral-300">
                        Tools
                    </p>
                    <div className="mt-3 flex gap-4 items-center flex-wrap">
                        <Image width={0} height={0} sizes="100vw" style={{height: '28px', width: 'auto'}} src={Html5Logo} alt=""/>
                        <Image width={0} height={0} sizes="100vw" style={{height: '28px', width: 'auto'}} src={CssLogo} alt=""/>
                        <Image width={0} height={0} sizes="100vw" style={{height: '28px', width: 'auto'}} src={JsLogo} alt=""/>
                        <Image width={0} height={0} sizes="100vw" style={{height: '28px', width: 'auto'}} src={LaravelLogo} alt=""/>
                        <Image width={0} height={0} sizes="100vw" style={{height: '28px', width: 'auto'}} src={VueLogo} alt=""/>
                        <Image width={0} height={0} sizes="100vw" style={{height: '35px', width: 'auto'}} src={ReactLogo} alt=""/>
                    </div>
                </div>

                <div
                    className={'col-span-3 lg:col-span-1 bg-transparent border-2 border-zinc-100 dark:border-stone-900 rounded-2xl py-5 px-5 text-zinc-800 dark:text-neutral-300'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-9">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
                    </svg>
                    <p className={'mt-2 text-zinc-800 dark:text-white font-display font-semibold text-lg tracking-wide'}>Mobile
                        development</p>
                    <p className="mt-2 text-zinc-700 dark:text-neutral-300 text-lg leading-relaxed whitespace-pre-wrap">
                        I develop custom mobile applications, from apps with specific purposes or limited audiences to large-scale solutions for all types of users.
                    </p>
                    <p className="mt-5 uppercase font-semibold text-xs flex items-center text-zinc-800 dark:text-neutral-300">
                        Tools
                    </p>
                    <div className="mt-3 flex gap-4 items-center">
                        <Image width={0} height={0} sizes="100vw" style={{height: '30px', width: 'auto'}} src={ReactNativeLogo} alt=""/>
                    </div>
                </div>

                <div
                    className={'col-span-3 lg:col-span-1 bg-transparent border-2 border-zinc-100 dark:border-stone-900 rounded-2xl py-5 px-5 text-zinc-800 dark:text-neutral-300'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-9">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/>
                    </svg>
                    <p className={'mt-2 text-zinc-800 dark:text-white font-display font-semibold text-lg tracking-wide'}>UI/UX
                        design</p>
                    <p className="mt-2 text-zinc-700 dark:text-neutral-300 text-lg leading-relaxed whitespace-pre-wrap">
                        I work closely with you to ensure that the designs I create align with your business objectives and reflect your brand identity.
                    </p>
                    <p className="mt-5 uppercase font-semibold text-xs flex items-center text-zinc-800 dark:text-neutral-300">
                        Tools
                    </p>
                    <div className="mt-3 flex gap-4 items-center">
                        <Image width={0} height={0} sizes="100vw" style={{height: '20px', width: 'auto'}} src={FigmaLogo} alt=""/>
                        <Image width={0} height={0} sizes="100vw" style={{height: '28px', width: 'auto'}} src={MiroLogo} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
