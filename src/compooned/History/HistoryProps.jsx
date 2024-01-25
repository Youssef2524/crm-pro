import React from 'react'

function HistoryProps(props) {
    return (
        <>

            <div className="YK-account-history">
                <div className="YK-account-body">
                    <img className='YK-icons' src={props.icon} alt="" />
                    <div className="YK-account-sms1">
                        <div className="YK-account-sms-children1">
                            <p> {props.title} <span>{props.ans}</span></p>
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

export default HistoryProps