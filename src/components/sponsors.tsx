import React from 'react'
import Slide from './slide/slide';

function Sponsors() {

    return (
        <>
            <div className="max-w-screen min-h-screen flex flex-col relative items-center  justify-center">
                <img src="./src/assets/patrocinadores.gif"/> 

                <img src="./src/assets/clouds_inverted.png" alt="clouds" className="absolute top-0 left-0 max-h-[476px] lg:max-h-[400px] w-auto" />
                <img src="./src/assets/clouds_mirror_inverted.png" alt="clouds" className="absolute top-0 right-0 hidden lg:block lg:max-h-[400px] w-auto" />

                <Slide/>
            </div>
        </>
    )

}

export default Sponsors;
