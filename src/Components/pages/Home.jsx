import React from "react";
import Galeria1 from "../Galeria1";
import Galeria2 from "../Galeria2";

const Home = () => {
    return (
        <>
            <div className="galeria_wrapper">
                <Galeria1></Galeria1>
                <Galeria2></Galeria2>
            </div>
        </>
    );
};

export default Home;
