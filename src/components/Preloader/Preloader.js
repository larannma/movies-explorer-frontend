import React from 'react'
import './Preloader.css'

const Preloader = ( { isPreloaderDisplayed } ) => {
    return (
        <div className={`preloader ${isPreloaderDisplayed ? '' : 'preloader_display-none'} `}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
