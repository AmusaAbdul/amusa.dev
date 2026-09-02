import Typewriter from "typewriter-effect";

const HeroText = () => {
    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

  return (
      <div className="pt-20 space-y-5">
          <div className="flex w-fit gap-1 p-2 items-center rounded-full bg-line dark:bg-forest-dark">
              <div className="h-3 w-3 flex justify-center items-center rounded-full bg-forest-light">
                  <div className="h-1.5 w-1.5  rounded-full bg-forest"></div>
              </div>
              <h1 className="tracking-widest font-mono text-sm leading-none">OPEN TO FRONTEND OPPORTUNITIES</h1>
          </div>

          <div>
              <h1 className="text-[clamp(2.3rem,6vw,4rem)] font-body font-semibold leading-none">Amusa <span className="text-forest dark:text-gold-dark">Abdullah</span></h1>
          </div>

          <div className="tracking-wide font-mono text-base leading-none">
              <Typewriter
                  options={{
                      strings: [
                          "> building fast, responsive web apps.",
                          "> turning idea into clean interfaces.",
                          "> from agricultural systems to software systems."
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 50,
                  }}
              />
          </div>

          <div className="flex flex-wrap gap-5 text-base font-display">
              <button  className="bg-forest text-sm dark:bg-gold-dark tracking-wider dark:text-forest-dark text-bg dark:border-surface-2-dark hover:border hover:border-forest p-2 rounded-xl  flex justify-center items-center">
                  <a  href="#projects">
                      View Projects
                  </a>              
                </button>
              <button className="border-2 text-sm border-line  dark:border-surface-2-dark hover:border hover:border-forest p-2 rounded-xl  flex justify-center items-center"
                  onClick={() => openLink("https://github.com/AmusaAbdul")}>
                  GitHub
              </button>
              <button className="border-2 text-sm border-line  dark:border-surface-2-dark hover:border hover:border-forest p-2 rounded-xl  flex justify-center items-center"
                  onClick={() => openLink("https://wa.me/23408156345656")}>
                  Get in touch
              </button>
          </div>
      </div>
  )
}

export default HeroText
