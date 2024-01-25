import React, { useState } from 'react'
import img12 from '../../assets/img/img12.svg'
import img13 from '../../assets/img/img13.svg'
import img14 from '../../assets/img/img14.svg'
import img15 from '../../assets/img/img15.svg'
import img16 from '../../assets/img/img16.svg'
import img17 from '../../assets/img/img21.png'
import img18 from '../../assets/img/image.png'
import img22 from '../../assets/img/img22.svg'
import img23 from '../../assets/img/img23.svg'
import img24 from '../../assets/img/img25.svg'
import img25 from '../../assets/img/imgs.svg'
import img26 from '../../assets/img/imgs1.svg'
import img27 from '../../assets/img/imgs2.svg'
import img33 from '../../assets/img/aa.png'
import img32 from '../../assets/img/as.svg'
import img31 from '../../assets/img/ss.svg'
import './Smsphoto.css'
function Smsphoto() {

    const [isFullScreen, setIsFullScreen] = useState(false);
    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
   
   
    };
    
    
    return (
        <>
            <div className="YK-smsphoto">
                <div className="YK-smsphoto-header">
                    <div className="YK-smsphoto-header-left">
                        <img src={img12} alt="" />
                        <img src={img13} alt="" />
                        <img src={img14} alt="" />
                        <img src={img15} alt="" />
                        <img src={img16} alt="" />
                    </div>
                    <div className="YK-smsphoto-header-right">
                        <p>06/21 @ 10:07 AM (5hrs ago)</p>

                    </div>
                </div>
                <div className="YK-smsphoto-title">
                    <div className="YK-smsphoto-titlt1">
                        <h2>New Insurance Policy</h2>
                    </div>
                    <div className="YK-smsphoto-title2">
                        <img src={img18} alt="" />
                        <p>Jared Black <span>to me, Jordan</span></p>
                    </div>

                </div>

                <div className="YK-smsphoto-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas nulla a ex hendrerit, sed pharetra augue lobortis. Pellentesque tincidunt nisl sit amet dictum ultrices. Vivamus lobortis quam et pulvinar dignissim. Aenean turpis felis, euismod nec laoreet a, ullamcorper sed arcu. In congue mauris ac sagittis molestie. Etiam eu auctor neque, et bibendum mi. Vivamus convallis, odio vitae malesuada pellentesque, ex leo pretium leo, eget dapibus odio sem consequat ex. Aliquam vulputate odio eu magna efficitur imperdiet eu at dolor. Mauris consectetur, turpis tristique vulputate congue, ligula elit semper neque, quis pellentesque tortor nisl ut diam. Nulla sed tempor neque. Donec aliquam malesuada gravida. Sed semper arcu vel est aliquam, non semper diam porttitor. In hac habitasse platea dictumst.</p>
                </div>
                <div className="YK-smsphoto-img">
                    {isFullScreen ? (
                        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 9999 }}>
                            <img
                                src={img33}
                                alt="صورة"
                                style={{ width: '80%', height: '80%', objectFit: 'cover', position: 'absolute', top: '10%', left: '10%' }}
                            />
                            <img src={img25} alt="" onClick={toggleFullScreen} style={{ position: 'absolute', top: 0, left: 0, padding: 10, margin: 5, backgroundColor: 'white', color: 'black' }} />
                            <img src={img26} alt="" onClick={toggleFullScreen} style={{ position: 'absolute', top: 0, right: 0, padding: 10, margin: 5, backgroundColor: 'white', color: 'black' }} />
                            <img src={img27} alt="" onClick={toggleFullScreen} style={{ position: 'absolute', top: 0, left: 50, padding: 10, margin: 5, backgroundColor: 'white', color: 'black' }} />
                            <img src={img32} alt="" onClick={toggleFullScreen} style={{ position: 'absolute', top: '92%', left: '56%', padding: 10, backgroundColor: 'white', color: 'black' }} />
                            <button onClick={toggleFullScreen} style={{ position: 'absolute', top: '92%', left: '49%', padding: 10, backgroundColor: 'white', color: 'black' }}>Reset Zoom </button>
                            <img src={img31} alt="" onClick={toggleFullScreen} style={{ position: 'absolute', top: '92%', left: '46%', padding: 10, backgroundColor: 'white', color: 'black' }} />
                        </div>
                    ) : (
                        <img
                            src={img17}
                            onClick={toggleFullScreen}
                            alt="صورة"
                        />
                    )}
                </div>
                <div className="YK-smsphoto-btns">
                    <button><span><img src={img22} alt="" />Reply</span> </button>
                    <button><span><img src={img23} alt="" />Reply All</span> </button>
                    <button><span><img src={img24} alt="" />Forward</span> </button>

                </div>
            </div>


        </>
    )
}

export default Smsphoto