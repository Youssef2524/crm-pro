import React, { useState } from 'react'
import '../Forward/Forward.css'
import img1 from '../../assets/img/Icon 1.svg'
import img2 from '../../assets/img/icon2.svg'
import img11 from '../../assets/img/Icon8.svg'
import img3 from '../../assets/img/Icon7.svg'
import img4 from '../../assets/img/Icon6.svg'
import img5 from '../../assets/img/Icon5.svg'
import img6 from '../../assets/img/Icon4.svg'
import img225 from '../../assets/img/l.svg'
import img7 from '../../assets/img/Icon3.svg'
function Replay() {
    const [display, setDisplay] = useState("block");

    return (

        <>
            <div className="YK-Forword" style={{ display }}>
                <div className="YK-Forward-header">
                    <div className="YK-Forward-header-left">
                        <div className="im">
                            <img src={img225} alt="" />
                            <img src={img2} alt="" />
                        </div>
                        <div className="pp8">
                            <p className='text1'>to: <span className='span1'> Jared Black</span></p>
                            <p className='text1'>Cc: <span className='span1'> Someone Else</span></p>
                            <p className='text1'>Bcc: <span className='span1'> And Another Person </span></p>
                        </div>
                    </div>
                    <div className="YK-Forward-header-right">

                        <img src={img11} alt="" onClick={() => setDisplay("none")} />
                    </div>
                </div>
                <p className='text2'>


                </p>

                <div className="YK-footer">
                    <div className="YK-footer-left">
                        <button> Send </button>
                        <img src={img7} alt="" />
                        <img src={img6} alt="" />
                        <img src={img5} alt="" />
                        <img src={img4} alt="" />
                    </div>
                    <div className="YK-footer-right">
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Replay