import React from 'react'

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
    className?: string;
    lg?: boolean;
    md?: boolean;
}

const Heading = ({ title, subtitle, center, className, lg, md }: HeadingProps) => {
  return (
    <div className={center ? "text-center" : "text-start" + " " + className}>
        {lg && <h1 className="text-4xl">{title}</h1>}
        {md && <h2 className="text-2xl">{title}</h2>}
        {!lg && !md && <h3 className="text-xl">{title}</h3>}
        {subtitle && <p className="text-gray-500">{subtitle}</p>}
    </div>
  )
}

export default Heading