import Model from '../../component/shared/model/model'
import NavBar from '../../component/navBar/navBar'
import './Cq/createquestion.scss'
import { useState } from "react";
import CreateQuestionMcq from './mcq/createquestionMcq';
import CreateQuestionCq from './cq/createquestionCq';

const CreateQuestion = () => {

    const [cq, setCq] = useState(false);
    const [mcq, setMcq] = useState(false);

    const handleClickOpenCq = () => {
        setCq(true);
        setMcq(false)
    };

    const handleCloseCq = () => {
        setCq(false);
    };
    const handleClickOpenMcq = () => {
        setMcq(true);
        setCq(false)
    };

    const handleCloseMcq = () => {
        setMcq(false);
    };


    return (
        <>
            <NavBar color='#369FE4' />
            <h4> Create your Question</h4>
            <div className='questionbtn'>
                <button
                    onClick={handleClickOpenCq}>
                    CQ
                </button>
                <button
                    onClick={handleClickOpenMcq}>
                    MCq
                </button>
            </div>

            {
                cq ? <Model handleClose={handleCloseCq} open={open}>
                    <CreateQuestionCq />
                </Model> : ''

            }
            {
                mcq ? <Model handleClose={handleCloseCq} open={open}>
                    <CreateQuestionMcq />
                </Model> : ''
            }

        </>

    )
}
export default CreateQuestion