import './timer.css'
import { motion } from 'framer-motion'

// definir o cálculo do tempo em dias, horas, minutos e segundos 
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;


// definir a data para a contagem regressiva 
let contagemTempo = new Date('Sep 17, 2022 00:00:00').getTime(),

    // atualizar a contagem regressiva a cada 1 segundo  
    x = setInterval(function () {

        // encontrar a data de agora
        let hoje = new Date().getTime(),

            // encontrar a distância entre a data de agora e a data da contagem regressiva    
            distancia = contagemTempo - hoje;


        // aparecer no ecrã a contagem em dias, horas, minutos e segundos e corresponder a mesma ao cálculo do tempo definido acima      
        document.getElementById('dias')!.innerHTML = String(Math.floor(distancia / (day))),
        document.getElementById('horas')!.innerHTML = String(Math.floor((distancia % (day)) / (hour))),
        document.getElementById('minutos')!.innerHTML = String(Math.floor((distancia % (hour)) / (minute))),
        document.getElementById('segundos')!.innerHTML = String(Math.floor((distancia % (minute)) / second));

        // quando a contagem terminar, desaparecer a data e aparecer uma mensagem 
        if (distancia < 0) {
            clearInterval(x);
            document.getElementById("tempo")!.innerHTML = "FIM";
        }

    }, second);


function Timer() {

    return (
        <>
            <motion.div id="tempo"
            initial={{ opacity: 0, x:'-5rem' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 4, duration: 1.5 }}
            >

                <ul>

                    {/*  dias  */}
                    <li>
                        <span id="dias">
                        </span>
                        <p>Dias</p>
                    </li>


                    {/*  horas  */}
                    <li>
                        <span id="horas">
                        </span>
                        <p>Horas</p>
                    </li>


                    {/*  minutos  */}
                    <li>
                        <span id="minutos">
                        </span>
                        <p>Minutos</p>
                    </li>


                    {/*  segundos  */}
                    <li>
                        <span id="segundos">
                        </span>
                        <p>Segundos</p>
                    </li>

                </ul>

            </motion.div>
        </>
    )

}

export default Timer;
