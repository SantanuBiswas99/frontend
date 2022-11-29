import React from "react"
import "./noconcern.css"
import { useState } from "react";

const NoConcern = ({ course_name, question_num, std_roll, ta_roll, std_comment, ta_comment }) => {
    const [studentreadmore, setstudentreadmore] = useState("no");
    const [tareadmore, settareadmore] = useState("no");
    async function clickstudentReadMore() {
        setstudentreadmore("yes");
    }
    async function clickstudentReadLess() {
        setstudentreadmore("no");
    }
    async function clicktaReadMore() {
        settareadmore("yes");
    }
    async function clicktaReadLess() {
        settareadmore("no");
    }
    return (
        <div className="concern">
            <div className="about">Students Roll No</div>
            <div className="sboxes" id="srollno">{std_roll}</div>
            <div className="about">Course Name</div>
            <div className="sboxes" id="coursename">{course_name}</div>
            <div className="about">Question number</div>
            <div className="sboxes" id="questionnumber">{question_num}</div>
            <div className="about">TA's Roll</div>
            <div className="sboxes" id="TArollnumber">{ta_roll}</div>
            <div className="about">Students comment</div>
            {std_comment.length < 125 || studentreadmore === "no" ? <div className="lboxes" id="scomment">{std_comment.substring(0, 125)}{std_comment.length >= 125 ? <a className="read" onClick={clickstudentReadMore}>...readmore</a> : null}</div> : <div className="xlboxes" id="scomment">{std_comment}<a className="read" onClick={clickstudentReadLess}>...readless</a></div>}
            <div className="about">Your response</div>
            {ta_comment.length < 125 || tareadmore === "no" ? <div className="lboxes" id="scomment">{ta_comment.substring(0, 125)}{ta_comment.length >= 125 ? <a className="read" onClick={clicktaReadMore}>...readmore</a> : null}</div> : <div className="xlboxes" id="scomment">{ta_comment}<a className="read" onClick={clicktaReadLess}>...readless</a></div>}
        </div>
    )
}

export default NoConcern