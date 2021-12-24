import { useState } from "react";
import "./Accordion.css";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Accordion = () => {
    const [accor1, setAccor1] = useState(true);
    const [accor2, setAccor2] = useState(false);
    const [accor3, setAccor3] = useState(false);
    const [accor4, setAccor4] = useState(false);

    const handleAccor1 = () => {
        setAccor1(!accor1);
        setAccor2(false);
        setAccor3(false);
        setAccor4(false);
    }
    const handleAccor2 = () => {
        setAccor2(!accor2);
        setAccor1(false);
        setAccor3(false);
        setAccor4(false);
    }
    const handleAccor3 = () => {
        setAccor3(!accor3);
        setAccor1(false);
        setAccor2(false);
        setAccor4(false);
    }
    const handleAccor4 = () => {
        setAccor4(!accor4);
        setAccor1(false);
        setAccor2(false);
        setAccor3(false);
    }
    return (
        <>
            <div className={accor1 ? 'accordion active' : 'accordion'} onClick={handleAccor1}>
                <div className="head">
                    <span>
                        <span className="color-primary mr-10">1.</span>THINK AHEAD AND BOOST YOUR BUSINESS?
                    </span>
                    <div className="plus-icon">
                        <AiOutlinePlus className={accor1 ? "invisible accor-umounted-style" : "visible color-primary"} />
                        <AiOutlineMinus className={accor1 ? "visible text-grey accor-mounted-style " : "invisible"} />
                    </div>
                </div>
                <div className="body">
                    There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                </div>
            </div>

            <div className={accor2 ? 'accordion active' : 'accordion'} onClick={handleAccor2}>
                <div className="head">
                    <span>
                        <span className="color-primary mr-10">2.</span>HOW CONSULTANCY EXPERTS WORK?
                    </span>
                    <div className="plus-icon">
                        <AiOutlinePlus className={accor2 ? "invisible accor-unmounted-style" : "visible color-primary"} />
                        <AiOutlineMinus className={accor2 ? "visible text-grey accor-mounted-style" : "invisible"} />
                    </div>
                </div>
                <div className="body"> There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
            </div>

            <div className={accor3 ? 'accordion active' : 'accordion'} onClick={handleAccor3}>
                <div className="head">
                    <span>
                        <span className="color-primary mr-10">3.</span>WHAT IS THE BEST ADVICE FOR GROWTH?
                    </span>
                    <div className="plus-icon">
                        <AiOutlinePlus className={accor3 ? "invisible accor-unmounted-style" : "visible color-primary"} />
                        <AiOutlineMinus className={accor3 ? "visible text-grey accor-mounted-style" : "invisible"} />
                    </div>
                </div>
                <div className="body">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
            </div>

            <div className={accor4 ? 'accordion active' : 'accordion'} onClick={handleAccor4}>
                <div className="head">
                    <span>
                        <span className="color-primary mr-10">4.</span>HOW TO IMPROVE YOUR BUSINESS?
                    </span>
                    <div className="plus-icon">
                        <AiOutlinePlus className={accor4 ? "invisible accor-unmounted-style" : "visible color-primary"} />
                        <AiOutlineMinus className={accor4 ? "visible text-grey accor-mounted-style" : "invisible"} />
                    </div>
                </div>
                <div className="body"> There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
            </div>
        </>
    );
}
export default Accordion;