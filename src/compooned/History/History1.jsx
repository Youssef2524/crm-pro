import React from 'react'
import './History.jsx'
function History1(props) {
    return (
        <>
            <div className="YK-account-history">
                <div className="YK-account-body">
                    <img className='YK-icons' src={props.icon} alt="" />
                    <div className="YK-account-sms">
                        <div className="YK-account-sms-children1">
                            <p> {props.title} <span>{props.ans}</span></p>
                        </div>
                        <div className="YK-account-sms-children2">
                            <img src={props.img} alt="" />
                            <p>{props.desc}</p>
                        </div>
                        <div className="YK-account-sms-children3">
                            <img src={props.img2} alt="" />
                            <p>{props.call}</p>
                        </div>
                    </div>

                </div>
            </div>
         
        </>
    )
}

export default History1

