import React from 'react'
import HistoryProps from './HistoryProps'
import chat from '../../assets/img/Chat.svg'
import chat1 from '../../assets/img/Chat1.svg'
import Agent from '../../assets/img/Agent.svg'
import messag from '../../assets/img/messag.svg'
import personal from '../../assets/img/personal.svg'
import pp from '../../assets/img/pp.svg'
import History1 from './History1'
import './Clint.css'
function ClintHistory() {
  return (
    <>
      <HistoryProps
        icon={personal}
        title='Lead created:'
        ans='06/21 - 12:07 PM'
        img2={Agent}
        call='Hannah Wells'

      />
      <HistoryProps
        icon={pp}
        title='Lead created:'
        ans='06/21 - 12:07 PM'
        img2={Agent}
        call='Hannah Wells'
      />
      <History1
        icon={chat}
        title='SMS: '
        ans='06/21 - 12:07 PM'
        img={chat1}
        desc='Yes, I will be available this afternoon. Please have them ready by 1PM. I sho...'
        img2={Agent}
        call='Hannah Wells'
      />
      <History1
        icon={messag}
        title='Email: '
        ans='06/21 - 12:07 PM'
        img={messag}
        desc='Thank you for your assistance.'
        img2={Agent}
        call='Hannah Wells'
      />
    
        <HistoryProps
        icon={personal}
        title='Lead created:'
        ans='06/21 - 12:07 PM'
        img2={Agent}
        call='Hannah Wells'

      />

      <div className="YK-account-personal1">
        <p className='YK-text-point1'>Prospect Auto-Generated: <span>06/21 - 12:07 PM</span></p>
      </div>
      <p className='point1'></p>

    </>
  )
}

export default ClintHistory