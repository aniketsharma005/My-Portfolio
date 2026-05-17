import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'


export default function Mywork() {
  return (
    <div id='Work' className='mywork'>
        <div className='mywork-title'>
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className='mywork-container'>
          {mywork_data.map((work)=>{
        return <img key={work.w_no} src={work.w_img} alt={work.w_name} />
          })}
        </div>
        <div className='mywork-showmore'>
            <p>Show more</p>
            <img style={{paddingBottom:"10px"}} src={arrow_icon} alt='' />
        </div>
    </div>
  )
}
