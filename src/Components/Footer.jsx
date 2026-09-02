import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()

  return (
      <div className="container p-3 font-mono tracking-wide flex flex-col justify-center items-center gap-5 WeekSitting text-ink-soft dark:text-ink-soft-dark">
          <p>©{year} Amusa Abdullah. All rights reserved.</p>
          <div className="p-4 flex gap-2 items-center">
              <div className="bg-forest p-2 text-surface-2 text-sm rounded-xl  dark:bg-gold-dark dark:text-surface-2-dark">AA</div>
              <p className="text-lg tracking-wide text-ink-soft  dark:text-ink-soft-dark">amusa.dev</p>
          </div>    
        </div>
  )
}

export default Footer
