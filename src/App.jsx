import React from 'react'
import History from './compooned/History/History'
import './App.css'
import MessageBox from './compooned/MessageBox/MessageBox'
import ClintHistory from './compooned/History/ClintHistory'
import Forward from './compooned/Forward/Forward'
import Replay from './compooned/Replay/Replay'
import Smsphoto from './compooned/Smsphoto/Smsphoto'
function App() {
  let Lead = false;
  let user;
  if (Lead) {
    user = <History />
  } else {
    user=<ClintHistory />
  }
  return (
    <>
      {/* <History />
      <ClintHistory/> */}
      {user}
      <Forward />
      <Replay />
      <Smsphoto />
      <MessageBox />
    </>
  )
}

export default App
