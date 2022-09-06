import { motion } from 'framer-motion'
import Slide from './slide/slide';

function Sponsors() {

    return (
        <>
            <div className="max-w-screen lg:min-h-screen py-20 lg:py-0 flex flex-col relative items-center  justify-center">
                <motion.img src="./src/assets/patrocinadores.gif"
                    initial={{ opacity: 0, x:'-5rem' }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1.5 }} 
                /> 

                <img src="./src/assets/clouds_inverted.png" alt="clouds" className="absolute top-0 left-0  hidden lg:block max-h-[476px] lg:max-h-[400px] w-auto" />
                <img src="./src/assets/clouds_mirror_inverted.png" alt="clouds" className="absolute top-0 right-0 hidden lg:block lg:max-h-[400px] w-auto" />

                <motion.h4 className='robot text-center text-lg lg:max-w-[1100px] lg:mt-[-10rem] lg:mb-[4rem]'
                    initial={{ opacity: 0, x:'-5rem' }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 1.5 }} 
                > 
                Nossos patrocinadores são empresas altamente tecnológicas, que buscam sempre  inovação e evolução, assim como a gente. Cada uma dessas empresas disponibilizará um stand virtual dentro do nosso Festival. Em cada um desses stands, você encontrará um mini game, que ao completa-lo corretamente lhe concederá um prêmio. Assim nossos usuários terão a experiência completa de um festival de música de respeito dentro da nossa plataforma metaverso. Enjoy!  </motion.h4>            

                <Slide/>
            </div>
        </>
    )

}

export default Sponsors;
