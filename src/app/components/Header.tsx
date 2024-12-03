import Image from "next/image"

import JaviLogo from '@/app/assets/images/javi-logo-hd.png'

export default function Header() {
    return (
        <header className="flex items-center mb-5 py-0 lg:py-3 rounded-3xl">
            <div className={'grow'}>
                <Image className="javi-logo mt-4 mb-4" width={0} height={0}  sizes="100vw" style={{ width: '70px' }} src={JaviLogo} alt="" />
            </div>
            <div className={'flex gap-3'}>
                <a className={'hidden lg:block rounded bg-white dark:bg-stone-800 dark:text-white px-5 py-3 text-base font-semibold text-black '} href="#what-i-do">
                    What I do
                </a>

                <a className={'hidden lg:block rounded bg-white dark:bg-stone-800 dark:text-white px-5 py-3 text-base font-semibold text-black '} href="#experience">
                    My experience
                </a>

                <a className={'hidden lg:block rounded bg-black px-5 py-3 text-base font-semibold text-white dark:bg-white dark:text-black'} href="mailto:hello@javirdz.com">
                    Let&#39;s talk
                </a>
            </div>
        </header>
    )
}
