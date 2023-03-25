import {useState} from "react";
import Background from "./theme/background";

const Fallback = () => {
    const [limit, setLimit] = useState(false);
    const [density, setDensity] = useState(950);
    const Mount = () => {
        let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if(vw < 1000) 
        {   
            setDensity(100);
        }
        setLimit(true);
    }

    return(<>
        {!limit? Mount(): null}
        <div className="spin-container">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <h2>Site is loading... Please wait</h2>
        </div>
        <Background density={density}/>

    </>);
}

export default Fallback;