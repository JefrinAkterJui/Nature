import React from 'react'
import './Team.css'

const Team = () => {
  return (
    <>
    <div className="container">
        <div className="Main_team_text py-[128px]">
                <div className="team_text">
                    <h1>Our Team</h1>
                </div>
            <div className="tem flex justify-between">
                <div className="Team_member mt-[64px]">
                    <img src="/imge/m1.png" alt="member" />
                    <h2>John Doe</h2>
                    <h3>CEO & Founder</h3>
                    <p>We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.</p>
                </div>
                <div className="Team_member mt-[64px]">
                    <img src="/imge/m2.png" alt="member" />
                    <h2>John Doe</h2>
                    <h3>Co-Founder & Head of Marketing</h3>
                    <p>We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.</p>
                </div>
                <div className="Team_member mt-[64px]">
                    <img src="/imge/m3.png" alt="member" />
                    <h2>Jonh Smith</h2>
                    <h3>CTO</h3>
                    <p>We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.</p>
                </div>
                <div className="Team_member mt-[64px]">
                    <img src="/imge/m4.png" alt="member" />
                    <h2>John Doe</h2>
                    <h3>Head of Data</h3>
                    <p>We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.</p>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Team