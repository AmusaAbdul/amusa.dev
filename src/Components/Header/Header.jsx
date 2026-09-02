import {useState, useEffect} from "react"
import Desktop from "./Desktop"
import Mobile from "./Mobile"

const Header = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme ? savedTheme === "dark" : true
    })

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode)

        localStorage.setItem("theme", darkMode ? "dark" : "light")
    }, [darkMode])

    const [isOpen, setIsOpen] = useState(false)
    const [translateX, setTranslateX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;

        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;

        if (diff > 0) {
            setTranslateX(diff);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);

        if (translateX > 100) {
            setIsOpen(false);
        }
        setTranslateX(0);
    };

    return (
        <div className="">
        <Desktop darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Mobile darkMode={darkMode} setDarkMode={setDarkMode} isOpen={isOpen} setIsOpen={setIsOpen}
            handleTouchStart={handleTouchStart} translateX={translateX} handleTouchMove={handleTouchMove}
            handleTouchEnd={handleTouchEnd} isDragging={isDragging}
        />
        </div>
    )
}

export default Header
