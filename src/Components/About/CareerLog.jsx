
const CareerLog = () => {
    const career = [
        { id: 1, commit: "8a1c9f2", date: "2021", 
            start: "Started BSc Agricultural Science", 
            learnt: "Learned to model complex systems, crops, livestock, and the economics behind them."
        },
        {id: 2, commit: "e5d0b47", date: "2023", start: "Discovered frontend development",
            learnt: "Traded field data for component state. Started shipping real UIs."
        },
        { id: 3, commit: "2f6a9c1", date: "2025", start: "Building fast, accessible interfaces",
            learnt: "Next.js, React, TypeScript. Currently looking for the next team to join."
        }
    ]
    return (
        <div className="bg-forest  dark:bg-forest-dark border border-ink-soft rounded-xl">
            <div className="flex gap-2 items-center p-3">
                <div className="flex gap-2">
                    <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                    <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-sm tracking-wider text-ink-soft-dark font-mono">career.log</p>
            </div>
            <hr className="border-t border-ink-soft"/>
            {career.map(c => (
                <div className="p-3 tracking-wide font-mono" key={c.id}>
                    <p className="text-gold-dark">commit {c.commit}</p>
                    <div className="flex gap-2 items-center text-ink-soft-dark flex-wrap">
                        <p>Author: Amusa Abdullah</p>
                        -
                        <p>Date: {c.date}</p>
                    </div>
                    <div className="p-3">
                        <p className="text-bg">{c.start}</p>
                        <p className="text-ink-soft-dark">{c.learnt}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CareerLog
