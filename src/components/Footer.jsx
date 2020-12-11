import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



export default function Footer() {
  return (
    <div id='footer'>
      <a className='gitLink' href='https://github.com/LLuth0r'> 
        <GitHubIcon fontSize='large' className='github' />
      </a>
      <a className='linkedIn-link' href='https://www.linkedin.com/in/michael-pakulak-he-him-his-7372a05a/'> 
        <LinkedInIcon fontSize='large' className='LinkedIn' />
      </a>
      <p className='coding'>2020 Lluth0r Coding</p>
    </div>
  )
}
