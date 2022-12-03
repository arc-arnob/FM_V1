import React, { useState } from 'react'
//Icons
import MenuIcon from './Icons/MenuIcon';
import CrossIcon from './Icons/CrossIcon';
import HomeIcon from './Icons/HomeIcon';

// Components
import Discover from './Discover';
import Suggestions from './Suggestions';
import Footer from './Footer';

// Animation
import 'animate.css';

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className="h-full border-r border-gray-200">
            <div 
                className='block xl:hidden m-2 ml-4 mt-3 text-xl'
                onClick={() => setShowSidebar((prev) => !prev)}
            >
                {
                    showSidebar ? <MenuIcon/> : <CrossIcon />
                }
            </div>
            <div className="flex flex-col h-full px-4 py-3 space-y-2">
                <HomeIcon />
                <Discover />
                <Suggestions />
                <Footer />
            </div>
        </div>
    )
}

export default Sidebar