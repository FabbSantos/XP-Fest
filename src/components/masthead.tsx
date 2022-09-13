import React from 'react'

import the_exp from '../assets/the_exp.png'
import clouds_inverted from '../assets/clouds_inverted.png'
import clouds from '../assets/clouds.png'
import clouds_mirror from '../assets/clouds_mirror.png'


function Masthead() {

    return (
        <>
            <div className="max-w-screen lg:h-screen py-20 lg:py-0 flex flex-col lg:flex-row relative items-center justify-center">
                <img src={the_exp} alt="The Experience Festival - Uma experiência metaverso" className='max-h-[476px] lg:max-h-[700px] w-auto' />
                <h1 className='invisible absolute'>The Experience Festival - Uma experiência metaverso</h1>


                <div className='icon-scroll'></div>

                <img src={clouds_inverted} alt="clouds" className="absolute -top-44 left-0 rotate-40 max-h-[476px] lg:hidden lg:max-h-[400px] w-auto" />

                <img src={clouds} alt="clouds" className="absolute bottom-0 left-0 max-h-[476px] hidden lg:block lg:max-h-[400px] w-auto" />
                <img src={clouds_mirror} alt="clouds" className="absolute bottom-0 right-0 hidden lg:block lg:max-h-[400px] w-auto" />
            </div>
        </>
    )

}

export default Masthead;
