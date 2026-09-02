
const Education = () => {
    return (
        <div className="bg-line dark:bg-forest-dark pt-20">
            <div className="container p-4 space-y-5">
                <p className="text-forest dark:text-gold-dark tracking-wider font-mono">BACKGROUND</p>
                <h1 className="text-2xl lg:text-3xl tracking-wide font-mono font-semibold">Education</h1>
                <div className="dark:bg-bg-dark bg-surface-2 p-4 rounded-xl flex flex-col sm:flex-row  gap-3">
                    <div className="bg-forest dark:bg-gold-dark font-bold font-mono w-fit rounded-xl text-bg dark:text-forest-dark p-2 h-fit">TASUED</div>
                    <div className="space-y-3"> 
                        <h1 className="text-xl">B.Sc. Agricultural Science</h1>
                        <p className="font-body text-sm tracking-wide text-ink-soft dark:text-ink-soft-dark">Tai Solarin Federal University of Education · 2021 – 2025</p>
                        <p className="font-body text-sm tracking-wide text-ink-soft dark:text-ink-soft-dark"><span className="font-bold text-ink dark:text-ink-soft-dark">Coursework:</span> Animal Production,
                            Crop Production, Agricultural Economics, Agricultural Extension, Fishery,
                            Soil Science.
                        </p>
                        <p className="font-body text-sm tracking-wide text-ink-soft dark:text-ink-soft-dark"><span className="font-bold text-ink dark:text-ink-soft-dark">Focus:</span> Built strong analytical, research, and problem-solving skills, 
                            now applied to frontend development and UI-focused solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Education
