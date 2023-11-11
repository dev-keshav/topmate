import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

function AboutMe() {
  return (
    <div className='about_div'>
        <h1>About me</h1>
        <div className='social_icons'>
            <InstagramIcon className='icon' />
        </div>
        <div className='social_icons'>
            <LinkedInIcon className='icon' />
        </div>
        <div className='social_icons'>
            <GitHubIcon className='icon' />
        </div>
        <div className='social_icons'>
            <LanguageIcon className='icon' />
        </div>
        <div>
            <p className='about_para'>- I am the youngest developer from India. <br/> - I have developed number of websites. <br /> - Also contributed to open source projects. <br />- My experties in Javascript, ReactJs, Firebase, MongoDb, ExpressJs and API. </p>
        </div>
    </div>
  )
}

export default AboutMe