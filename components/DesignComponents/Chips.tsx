import React from 'react'
// import Image from 'next/image'

interface ChipProps {
    displayText: string;
    icon: React.ReactNode;
  }


const Chips = ({displayText, icon}: ChipProps) => {
  return (
    // TODO: Add Icon
    <div className="flex space-x-2 px-2 py-1 border rounded-full items-center justify-center">
        
        <div className="flex space-x-2 items-center">
            {icon}
            <p>{displayText}</p>
        </div>
    </div>
  )
}

export default Chips