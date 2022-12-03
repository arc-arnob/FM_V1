import React from 'react'
import Chips from './DesignComponents/Chips'
import { topics } from '../static/constants'

const Discover = () => {
  return (
    <div className="flex flex-wrap gap-2 space-y-2 max-w-xs">
        {
            topics.map(item => (
                <Chips icon={item.icon} displayText={item.name}/>
            ))
        }
    </div>
  )
}

export default Discover