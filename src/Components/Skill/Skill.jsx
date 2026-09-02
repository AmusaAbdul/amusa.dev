
const Skill = () => {
    const languages = [
        {
            name: "HTML",
            div: <div className="h-2 w-2 bg-red-500"></div>
        },
        {
            name: "CSS",
            div: <div className="h-2 w-2 bg-blue-700"></div>
        }, 
        {   name: "JavaScript",
            div: <div className="h-2 w-2 bg-yellow-500"></div>
        },
        {
            name: "TypeScript",
            div: <div className="h-2 w-2 bg-blue-800"></div>
        }
    ]
    const frameworks = [
        {
            name: "React",
            div: <div className="h-2 w-2 bg-blue-400"></div>
        },
        {
            name: "Next.js",
            div: <div className="h-2 w-2 bg-black"></div>
        },
        {
            name: "Tailwind CSS",
            div: <div className="h-2 w-2 bg-blue-400"></div>
        },
        { name: "Bootstrap", 
            div: <div className="h-2 w-2 bg-purple-500"></div>
        }
    ]
    const tools = [
        {
            name: "Git",
            div: <div className="h-2 w-2 bg-black"></div>
        },
        {
            name: "Github",
            div: <div className="h-2 w-2 bg-black"></div>
        },
        {
            name: "Vercel",
            div: <div className="h-2 w-2 bg-black"></div>
        },
        {
            name: "Figma",
            div: <div className="h-2 w-2 bg-forest"></div>
        }
    ]
    return (
        <div className="mt-20 mb-15">
            <div className="container p-4 space-y-5">
                <p className="text-forest dark:text-gold-dark tracking-wider font-mono">TOOLKIT</p>
                <h1 className="text-2xl lg:text-3xl tracking-wide font-mono font-semibold">Skills & technologies</h1>
                <div className="grid grid-cols-[auto] sm:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto] gap-5">
                    <div className="text-sm  dark:bg-forest-dark bg-surface-2 p-4 rounded-xl space-y-3">
                        <p className="text-forest dark:text-gold-dark font-semibold tracking-wider font-mono">LANGUAGES</p>
                        <div className="flex flex-wrap gap-2">
                            {languages.map((s, index) => (
                                <div key={index} className="rounded-xl font-mono p-2 text-sm border bg-line border-line dark:bg-surface-2-dark  dark:border-ink-soft tracking-wider flex justify-center items-center gap-2">
                                    {s.div}
                                    <p className="">{s.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-sm  dark:bg-forest-dark bg-surface-2 p-4 rounded-xl space-y-3">
                        <p className="text-forest dark:text-gold-dark font-semibold tracking-wider font-mono">FRAMEWORKS & LIBRARIES</p>
                        <div className="flex flex-wrap gap-2">
                            {frameworks.map((s, index) => (
                                <div key={index} className="rounded-xl font-mono p-2 text-sm border bg-line border-line dark:bg-surface-2-dark  dark:border-ink-soft tracking-wider flex justify-center items-center gap-2">
                                    {s.div}
                                    <p className="">{s.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-sm  dark:bg-forest-dark bg-surface-2 p-4 rounded-xl space-y-3">
                        <p className="text-forest dark:text-gold-dark font-semibold tracking-wider font-mono">TOOLS</p>
                        <div className="flex flex-wrap gap-2">
                            {tools.map((s, index) => (
                                <div key={index} className="rounded-xl font-mono p-2 text-sm border bg-line border-line dark:bg-surface-2-dark  dark:border-ink-soft tracking-wider flex justify-center items-center gap-2">
                                    {s.div}
                                    <p className="">{s.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
