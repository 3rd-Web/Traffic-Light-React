import React from "react";
import { useState } from "react";

export const Trafficlight = () => {

    let [state, setState] = useState({
        red: "redLight",
        yellow: "yellowLight",
        green: "greenLight"
    });


    return (
        <div className="container-fluid" id="background">
            <div id="wire"></div>
            <div id="lights">
                <div
                    className={state.red}
                    onClick={() =>
                        setState({
                            red: "redLightSelected",
                            yellow: "yellowLight",
                            green: "greenLight"
                        })
                    }>

                </div>
                <div
                    className={state.yellow}
                    onClick={() =>
                        setState({
                            red: "redLight",
                            yellow: "yellowLightSelected",
                            green: "greenLight"
                        })
                    }>

                </div>
                <div
                    className={state.green}
                    onClick={() =>
                        setState({
                            red: "redLight",
                            yellow: "yellowLight",
                            green: "greenLightSelected"
                        })
                    }>

                </div>
            </div>
        </div>
    );
};

export default Trafficlight;