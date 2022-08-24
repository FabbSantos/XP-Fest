import React from 'react'

function Sponsors() {

    return (
        <>
            <div className="max-w-screen h-screen flex flex-col lg:flex-row relative items-center justify-center">


                <div className='icon-scroll'></div>

                <img src="./src/assets/clouds_inverted.png" alt="clouds" className="absolute top-0 left-0 max-h-[476px] lg:max-h-[400px] w-auto" />
                <img src="./src/assets/clouds_mirror_inverted.png" alt="clouds" className="absolute top-0 right-0 hidden lg:block lg:max-h-[400px] w-auto" />
            </div>
        </>
    )

}

export default Sponsors;
