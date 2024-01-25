import chat from '../../assets/img/Chat.svg'
import chat1 from '../.././assets/img/Chat1.svg'
import Agent from '../../assets/img/Agent.svg'
import messag from '../../assets/img/messag.svg'
import telephone from '../../assets/img/telephone.svg'
import personal from '../../assets/img/personal.svg'
import file from '../../assets/img/File.svg'
import './History.css'
import HistoryProps from './HistoryProps.jsx'
import History1 from './History1.jsx'
import './Clint.css'
function History() {
    return (
        <>
            <History1
                icon={chat1}
                title='SMS: '
                ans='06/21 - 12:07 PM'
                img={chat}
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
            <History1
                icon={telephone}
                title='Call:'
                ans='06/21 - 12:07 PM'
                img={file}
                desc='Hello. Thank you for calling...'
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
            <div className="YK-account-personal">
                <p className='YK-text-point'>Prospect Auto-Generated: <span>06/21 - 12:07 PM</span></p>
            </div>
            <p className='point'></p>



        </>
    )
}

export default History