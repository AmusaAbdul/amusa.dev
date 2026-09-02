import AboutText from "./AboutText"
import CareerLog from "./CareerLog"

const About = () => {
    return (
        <div className="">
            <div className="container p-5 itemSpan items-center mt-5 flex flex-col gap-10 WeekSitting">
                <AboutText />
                <CareerLog />
            </div>
        </div>
    )
}

export default About
