import { projects } from "./Data"


const Project = () => {
    return (
        <div className="bg-line dark:bg-forest-dark">
            <div className="container p-4 pt-20 space-y-5">
                <p className="text-forest  dark:text-gold-dark tracking-wider font-mono">SELECTED WORK</p>
                <h1 className="text-2xl lg:text-3xl font-display font-semibold">Recent projects</h1>
                <div className="grid grid-cols-[auto] sm:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto] gap-5">
                    {projects.map(p => (
                        <article className="font-display rounded-2xl bg-bg dark:bg-bg-dark project-card">
                            <div className="p-3 flex gap-1 radius">
                                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                            </div>

                            <img src={p.Image} alt={p.name} className="h-30 w-full object-fit " />

                            <div key={p.id} className="p-4 space-y-3">

                                <h1 className="text-xl font-semibold dark:text-surface-2">
                                    <strong>📌</strong> {p.name}
                                </h1>
                                <p className="font-body text-sm tracking-wide text-ink-soft dark:text-surface-2">{p.summary}</p>
                                <div className="flex flex-col gap-1 text-xs ">
                                    <p className="text-forest dark:text-gold-dark">PROBLEM</p>
                                    <p className="font-body tracking-wider text-ink-soft dark:text-surface-2">{p.problem}</p>
                                </div>
                                <div className="flex flex-col gap-1 text-xs ">
                                    <p className="text-forest dark:text-gold-dark">SOLUTION</p>
                                    <p className="font-body tracking-wider text-ink-soft dark:text-surface-2">{p.solution}</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {p.technologies?.map(t => (
                                        <p className=" rounded-full font-mono p-2 text-sm bg-line dark:bg-forest-dark dark:text-surface-2 tracking-wider">{t.name}</p>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-3 mt-5">
                                    <button onClick={() => window.open(p.link, "_blank")}
                                        className="bg-forest text-sm dark:bg-gold-dark tracking-wider dark:text-forest-dark text-bg dark:border-surface-2-dark hover:border hover:border-forest p-2 rounded-xl  flex justify-center items-center"
                                    >
                                        Live demo
                                    </button>
                                    <button className="border border-line text-sm  text-surface-2-dark dark:text-surface-2  p-2 rounded-xl  flex justify-center items-center">
                                        
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project
