import React from 'react'

const AboutText = () => {
    return (
        <div className="w-[50%] itemSpan space-y-5 text-start p-2">
            <p className="text-forest dark:text-gold-dark tracking-wider font-mono">ABOUT</p>
            <h1 className="text-2xl lg:text-3xl font-display font-semibold">From soil systems to software systems</h1>
            <div className="mt-5 flex flex-col gap-5 itemSpan">
                <p className="font-body tracking-wide text-ink-soft dark:text-ink-soft-dark">
                    I'm a <span className="font-bold text-ink dark:text-ink-soft-dark">frontend developer</span> who enjoys building modern, responsive, user-friendly
                    web experience, writing clean, scalable code andturning ideas into interfaces that solve real
                    problems.
                </p>
                <p className="font-body tracking-wide text-ink-soft dark:text-ink-soft-dark">
                    My path here started in <span className="font-bold text-ink dark:text-ink-soft-dark">Agricultural Science,</span> studying systems: inputs, outputs,
                    feedback loops, and how small changes cascade through a whole structure.
                    That way of thinking transferred directly to frontend work, reasoning about state,
                    data flow, and how one component change ripples through a UI.
                </p>
                <p className="font-body tracking-wide text-ink-soft dark:text-ink-soft-dark">
                    Outside of code: personal projects, football, contributing to open source when I can,
                    and staying close to the dev community through meetups and continuous learning.
                </p>
            </div>
        </div>
    )
}

export default AboutText
