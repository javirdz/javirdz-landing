export default function Stats() {
    return (
        <div className={'w-full bg-white dark:bg-transparent mt-10 rounded-3xl p-10 '}>
            <div className={'grid grid-cols-2 lg:grid-cols-4 gap-10 items-center'}>
                <div className={' flex flex-col items-center justify-center '}>
                    <p className={'text-slate-900 dark:text-white font-display text-4xl font-bold mr-2'}>10<small>+</small></p>
                    <p className={'mt-1 font-semibold leading-tight text-zinc-700 dark:text-neutral-400 whitespace-pre-wrap text-center lg:text-left'}>Years of experience</p>
                </div>

                <div className={' flex flex-col items-center justify-center '}>
                    <p className={'text-slate-900 dark:text-white font-display text-4xl font-bold mr-2'}>20<small>+</small></p>
                    <p className={'mt-1 font-semibold leading-tight text-zinc-700 dark:text-neutral-400 whitespace-pre-wrap text-center lg:text-left'}>Projects completed</p>
                </div>

                <div className={' flex flex-col items-center justify-center '}>
                    <p className={'text-slate-900 dark:text-white font-display text-4xl font-bold mr-2'}>7.5<small>K+</small></p>
                    <p className={'mt-1 font-semibold leading-tight text-zinc-700 dark:text-neutral-400 whitespace-pre-wrap text-center lg:text-left'}>Cups of coffee</p>
                </div>

                <div className={' flex flex-col items-center justify-center '}>
                    <p className={'text-slate-900 dark:text-white font-display text-4xl font-bold mr-2'}>4<small>M+</small></p>
                    <p className={'mt-1 font-semibold leading-tight text-zinc-700 dark:text-neutral-400 whitespace-pre-wrap text-center lg:text-left'}>Lines of code</p>
                </div>

            </div>
        </div>
    )
}
