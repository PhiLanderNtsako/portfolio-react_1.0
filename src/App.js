import * as Icons from 'react-icons/fa';
import React, { useState } from 'react';
import myResume from './PhilanderNtsakoCV.pdf';

function App() {

  const [isCardSd, setCardSdVisible] = useState(false);
  const [isCardMp, setCardMpVisible] = useState(false);
  const [isCardYt, setCardYtVisible] = useState(false);
  const [isResume, setResumeVisible] = useState(false);

  return (
    <div className="app">
      {isCardSd && (
        <div className="skill-card-div" onClick={() => setCardSdVisible(false)}>
          <div className="card">
            <h4>Software Developer</h4>
            <div className="card-projects">
              <a href='https://www.plauditssa.co.za' className="btn-projects" target='_blank' rel="noreferrer">Plaudits SA Clothing</a>
              <p>Online store. HTML, CSS, Javascript, PHP, MySQL</p>
            </div>
            <div className="card-projects">
              <a href='https://www.sweetsound.co.za/musiq' className="btn-projects" target='_blank' rel="noreferrer">SS Musiq Website</a>
              <p>Music store. HTML, CSS, Javascript, PHP, MySQL</p>
            </div>
            <button className="close btn" onClick={() => setCardSdVisible(false)}>
            <Icons.FaTimes/>
          </button>
          </div>
        </div>
      )}
      {isCardMp && (
        <div className="skill-card-div" onClick={() => setCardMpVisible(false)}>
          <div className="card">
            <h4>Music Producer</h4>
            <div className="card-projects">
              <a href='https://www.sweetsound.co.za/musiq' className="btn-projects" target='_blank' rel="noreferrer">SS Musiq Website</a>
              <p>Playlist of all the songs I worked on. Producing, Mixing & Mastering, Recording Engineer, Vocalist and more.</p>
            </div>
          </div>
          <button className="close btn" onClick={() => setCardMpVisible(false)}>
            <Icons.FaTimes/>
          </button>
        </div>
      )}
      {isCardYt && (
        <div className="skill-card-div" onClick={() => setCardYtVisible(false)}>
          <div className="card">
            <h4>Youtuber</h4>
            <div className="card-projects">
              <a href='https://www.youtube.com/@Philanderntsako' className="btn-projects" target='_blank' rel="noreferrer">Youtube </a>
              <p>Here i document my life and what i do in a video format or as content.</p>
            </div>
          </div>
          <button  className="close btn" onClick={() => setCardYtVisible(false)}>
            <Icons.FaTimes/>
          </button>
        </div>
      )}
      {isResume && (
        <a href={myResume} download className="resume"><Icons.FaFileDownload/> My Resume</a>  
      )}
      <div className="name-resume">
        <button className="my-name" onClick={() => setResumeVisible(true)}>Philander Ntsako Malatji</button>
      </div>
      <div className="content">
        <div className="skills">
          <div className="skill">
            <button className="btn" onClick={() => setCardSdVisible(true)}><Icons.FaLaptopCode/> Software Developer</button>
          </div>
          <div className="skill">
            <button className="btn"  onClick={() => setCardMpVisible(true)}><Icons.FaMusic/> Music Producer</button>
          </div>
          <div className="skill">
            <button className="btn"  onClick={() => setCardYtVisible(true)}><Icons.FaYoutubeSquare/> Youtuber</button>
          </div>
        </div>
        <div className="social-media-links">
          <a href="https://www.facebook.com/philanderntsako.malatji" className='sm-link' target='_blank' rel="noreferrer"><Icons.FaFacebook /></a>
          <a href="https://wa.me/+27769796293" className='sm-link' target='_blank' rel="noreferrer"><Icons.FaWhatsapp  /></a>
          <a href="https://twitter.com/PhiLander_Ntsk" className='sm-link' target='_blank' rel="noreferrer"><Icons.FaTwitter  /></a>
          <a href="https://www.tiktok.com/@philanderntsako" className='sm-link' target='_blank' rel="noreferrer"><Icons.FaTiktok  /></a>
          <a href="https://www.youtube.com/@PhiLanderNtsako" className='sm-link' target='_blank' rel="noreferrer"><Icons.FaYoutube  /></a>
          <a href="https://www.linkedin.com/in/philandermalatji/" className='sm-link' target='_blank' rel="noreferrer"><Icons.FaLinkedin  /></a>
          <a href="https://github.com/PhiLanderNtsako" className='sm-link' target='_blank' rel="noreferrer"><Icons.FaGithub  /></a>
          <a href="mailto:philanderntsako.ms@gmail.com" className='sm-link' target='_blank' rel="noreferrer"><Icons.FaEnvelope  /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
