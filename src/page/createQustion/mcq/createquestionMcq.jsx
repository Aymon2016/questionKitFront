
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import React, { useState } from "react"
import axios from 'axios'
import './createquestion.scss'
import { useNavigate } from 'react-router-dom';

const CreateQuestionMcq = () => {
    const URL = import.meta.env.VITE_backendurl

    const init = {
        classes: '',
        bookName: '',
        chapter: null,

    }
    const navigate = useNavigate();

    const checkValidity = (values) => {
        const errors = {};

        const { classes, bookName, chapter } = values;


        if (!classes) {
            errors.classes = 'Invalid classes';
        }
        if (!bookName) {
            errors.bookName = 'Invalid bookName';
        }

        return {
            errors,
            isValid: Object.entries(errors).length === 0,
        };
    };

    const [questions, setQuestion] = useState({ ...init })


    const [errors, setErrors] = useState({ ...init });

    const addData = (e) => {
        const { name, value } = e.target;
        setQuestion(() => {
            return {
                ...questions,
                [name]: value

            }

        })
    }

    const sendData = async (e) => {
        e.preventDefault();
        const { isValid, errors } = checkValidity(questions);

        if (isValid) {
            setErrors({ ...errors })
        } else {
            setErrors({ ...errors });
        }

        const { classes, bookName, chapter } = questions
        if (isValid) {

            try {
                const data = await axios.get(`${URL}/api/v1/question_paper/mcq?classes=${classes}&bookName=${bookName}&chapter=${chapter}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",

                    },
                })
                navigate('/cqdownload', { state: data?.data });

            } catch (error) {
                window.alert(error?.response?.message)
                console.log(error)
            }


        }

    }



    return (
        <div className="questionContainer">
            <form method='post' className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Create Question</h3>
                    <div className="form-group mt-3">
                        <label>Class</label>
                        <select
                            className="form-control mt-1"
                            name="classes"
                            value={questions.classes}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {questions.classes ? questions.classes : 'Select a class'}
                            </option>
                            <option value="6">class 6</option>
                            <option value="7">class 7</option>
                            <option value="8">class 8</option>
                            <option value="9">class 9</option>
                            <option value="10">class 10</option>
                            <option value="11">class 11</option>
                            <option value="12">class 12</option>
                        </select>
                        {errors.classes && <p>{errors.classes}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Book Name</label>
                        <select
                            className="form-control mt-1"
                            name="bookName"
                            value={questions.bookName}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {questions.bookName ? questions.bookName : 'Select a Book'}
                            </option>
                            <option value="Bangla_1st_paper">Bangla_1st_paper</option>
                            <option value="English_1st_paper">English_1st_paper</option>

                        </select>
                        {errors.bookName && <p>{errors.bookName}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Chapter</label>
                        <select
                            className="form-control mt-1"
                            name="chapter"
                            value={questions.chapter}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {questions.chapter ? questions.chapter : 'Select a Chapter'}
                            </option>
                            <option value="">none </option>
                            <option value="1">1 </option>
                            <option value="2">2</option>
                            <option value="3">3 </option>
                            <option value="4">4</option>
                            <option value="5">5 </option>
                            <option value="6">6</option>
                            <option value="7">7 </option>
                            <option value="8">8</option>
                            <option value="9">9 </option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>

                        </select>
                        {errors.chapter && <p>{errors.chapter}</p>}
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit"
                            className="btn btn-primary"
                            onClick={sendData}

                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default CreateQuestionMcq