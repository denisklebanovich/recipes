import React from 'react';
import Trend from "../components/Trends";
import Veggie from "../components/Veggie";
import Trends from "../components/Trends";
import {motion} from "framer-motion";

const Home = () => {
    return (
        <motion.div animate={{opacity: 1}}
                    initial={{opacity: 0}}
                    exit={{opacity:0}}
                    transition = {{duration:0.5}}>
            <Trends/>
            <Veggie/>
        </motion.div>
    );
};

export default Home;
