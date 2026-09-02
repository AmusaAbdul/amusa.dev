import HeroText from "./HeroText"
import HeroImage from "./HeroImage"

const Hero = () => {
    return (
        <div className="notebook">
            <div className="container p-5 pt-25 itemSpan items-center lg:pt-20 flex flex-col gap-10 WeekSitting">
                <HeroText />
                <HeroImage />
            </div>
        </div>
    )
}

export default Hero
