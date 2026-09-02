import React from 'react'
import Picture from "../../assets/HeaderPicture.jpeg"

const HeroImage = () => {
  return (
      <div className="itemSpan WeekSitting  p-3 dark:bg-gold-dark bg-forest  flex justify-center items-center">
          <img className="itemSpan WeekSitting h-120 w-80 border-forest object-cover" src={Picture} alt="My Picture" />
      </div>
  )
}

export default HeroImage
