
const Mobile = ({ darkMode, setDarkMode, isOpen, setIsOpen, handleTouchEnd, handleTouchMove, handleTouchStart}) => {
    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };
    
    return (
        <div className="lg:hidden fixed w-full bg-bg dark:bg-bg-dark">
            <div className="flex justify-between p-2 items-center max-[350px]:flex-wrap max-[350px]:justify-center">
                <div className="p-4 flex gap-2 items-center font-mono max-[350px]:justify-between max-[350px]:w-full">
                    <div className="bg-forest p-2 text-surface-2 text-sm rounded-xl font-semibold dark:bg-gold-dark dark:text-surface-2-dark">AA</div>
                    <p className="text-lg tracking-wide text-ink-soft font-semibold dark:text-ink-soft-dark">amusa.dev</p>
                </div>

                <div className="flex gap-2 items-center justify-end max-[350px]:justify-between max-[350px]:w-full max-[350px]:p-3">
                    <button className="border-2 border-line dark:border-surface-2-dark hover:border hover:border-forest p-2 rounded h-10 w-10 flex justify-center items-center"
                        onClick={() => openLink("https://github.com/AmusaAbdul")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                    </button>
                    <button className="border-2 border-line dark:border-surface-2-dark hover:border hover:border-forest p-2 rounded h-10 w-10 flex justify-center items-center"
                        onClick={() => openLink("https://www.linkedin.com/in/amusa-abdullah-962b0938a/")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                    </button>
                    <button onClick={() => setDarkMode(prev => !prev)} className="border-2 border-line dark:border-surface-2-dark hover:border hover:border-forest p-2 rounded h-8 w-8 flex justify-center items-center">
                        {darkMode ? "☀️" : "🌙"}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="border-2 border-forest dark:border-surface-2  hover:border hover:border-forest p-2 rounded  flex justify-center items-end  flex-col  gap-1 cursor-pointer z-1002">
                        <div className="h-0.5 w-4 bg-gold"></div>
                        <div className="h-0.5 w-4 bg-gold"></div>
                        <div className="h-0.5 w-4 bg-gold"></div>
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className="w-full px-7 pt-3 pb-5 flex flex-col gap-5 text-lg bg-surface dark:bg-surface-dark"
                    onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}
                    onClick={() => setIsOpen(false)}
                >
                    <a className="block w-full py-2 border-b border-ink-soft-dark dark:border-ink-soft " href="#about">
                        About
                    </a>
                    <a className="block w-full py-2 border-b border-ink-soft-dark dark:border-ink-soft" href="#projects">
                        Projects
                    </a>
                    <a className="block w-full py-2 border-b border-ink-soft-dark dark:border-ink-soft" href="#skills">
                        Skills
                    </a>
                    <a className="block w-full py-2 border-b border-ink-soft-dark dark:border-ink-soft" href="#education">
                        Education
                    </a>
                    <a className="" href="#contact">
                        Contact
                    </a>
                </nav>
            )}
        </div>
    )
}

export default Mobile
