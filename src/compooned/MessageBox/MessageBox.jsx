import React, { useState } from 'react'
import './MessageBox.css'

import img1 from '../../assets/img/ww.svg'
import img2 from '../../assets/img/wwq.svg'
function MessageBox() {
    const [messages, setMessages] = useState([]);

    const handleMessageSubmit = (messageText) => {
        const newMessage = {
            id: messages.length + 1,
            text: messageText
        };
        setMessages([...messages, newMessage]);
    }

    return (
        <>

            <div className="YK-MessageBox">
                <div className="YK-MessageBox-header">
                    <div className="YK-MessageBox-header-h">
                        <h2>Jared Black</h2>
                        <p>584-329-0929</p>
                    </div>
                    <div className="YK-MessageBox-header-btn">
                        <button>End Chat </button>
                    </div>

                </div>

                <div className="YK-MessageBox-body">
                    <div className="YK-MessageBox-body-p1">
                        <p>Praesent et dictum ipsum, nec fringilla tortor. Morbi metus tortor, tempor id rhoncus vel, vulputate nec neque. Vestibulum id volutpat metus. Etiam tristique quis quam eu facilisis. Duis vel laoreet nisi.</p>
                        <span>4:54pm</span>
                    </div>
                    <div className="YK-MessageBox-body-p2">
                        <p className='p1'>Quisque ullamcorper ipsum vitae lorem euismod sodales. Donec a nisi eget eros laoreet pellentesque. Donec sed bibendum justo, at ornare mi. Sed eget tempor metus, sed sagittis lacus. </p>
                        <p className='p2'>Donec sit amet orci hendrerit, varius diam in, porttitor felis.</p>
                        <p className='p3'>Nam ornare lobortis orci, eget rhoncus ligula euismod ut.</p>
                        <div className="span">
                            <span>Lee White</span>
                            <span>5:14pm</span>
                        </div>

                    </div>
                    <div className="YK-MessageBox-body-p3">
                        <p>Donec sit amet orci hendrerit, varius diam in, porttitor felis.</p>
                        <span>5:21pm</span>
                        <span>Read</span>
                    </div>
                    <div className="YK-MessageBox-body-p4">
                        <p>Nulla sit amet sapien consectetur, tempor ante eget, sagittis orci. Curabitur enim lorem, cursus et massa non, pretium faucibus lacus.</p>
                        <span>5:34pm</span>
                        {messages.map((message) => (
                            <p style={{
                                display: 'flex',
                                padding: '8px 12px',
                                borderRadius: '8px',
                                background: 'var(--background-color-background, #F4F4F6)',
                                color: 'var(--text-color-text, #121C2D)',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                width: '480px',
                                fontfamily: "Inter",
                                flex: '1 0 0',
                                marginRight:'400px',
                                paddingBottom: '15px',
                            }} key={message.id}>{message.text}</p>
                        ))}
                    </div>
                </div>
                <div className="YK-MessageBox-footer">
                    <div className="chat">
                        {/* <p>Chat text</p> */}
                        <input
                        className='chat'
                            type="text"
                            placeholder="Chat text"
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    handleMessageSubmit(e.target.value);
                                }
                            }}
                        />
                        <div className="send">
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MessageBox