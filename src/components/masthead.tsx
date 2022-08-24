import React from 'react'

function Masthead() {

    return (
        <>
            <div className="max-w-screen h-screen flex flex-col lg:flex-row relative items-center justify-center">
                <img src="./src/assets/the_exp.png" alt="The Experience" className='max-h-[476px] lg:max-h-[500px] w-auto' />
                <h1 className='invisible absolute'>The Experience Festival</h1>


                <div className='icon-scroll'></div>

                <img src="./src/assets/clouds.png" alt="clouds" className="absolute bottom-0 left-0 max-h-[476px] lg:max-h-[400px] w-auto" />
                <img src="./src/assets/clouds_mirror.png" alt="clouds" className="absolute bottom-0 right-0 hidden lg:block lg:max-h-[400px] w-auto" />
            </div>
        </>
    )

}

export default Masthead;
