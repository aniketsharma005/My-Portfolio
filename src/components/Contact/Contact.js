import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
      
    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus('');
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6013c90b-4e85-46b3-a9a9-5ba48d8894b8");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        try {
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
          }).then((res) => res.json());
      
          if (res.success) {
            setStatus(res.message || 'Thanks! Your message has been sent.');
            event.target.reset();
          } else {
            setStatus(res.message || 'Something went wrong. Please try again.');
          }
        } catch (error) {
          setStatus('Unable to send your message right now. Please try again later.');
        } finally {
          setIsSubmitting(false);
        }
      };


  return (
    <div id='Contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt='' />
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>I am currently available to take on new projects about anything that you want to work on. you can contact anytime.</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                     <img src={mail_icon} alt='' /> <p>aniketpandit444@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                    <img src={call_icon} alt='' /> <p>+91 7988587835</p>
                    </div>
                    <div className='contact-detail'>
                    <img src={location_icon} alt='' /> <p>Chandigarh, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} action='' className='contact-right'>
                <label htmlFor='name'> Your Name</label>
                <input id='name' type='text' placeholder='Enter Your Name' name='name' required />
                <label htmlFor='email'> Your Email</label>
                <input id='email' type='email' placeholder='Enter Your email' name='email' required/>
                <label htmlFor='message'> Write Your Message here</label>
                <textarea id='message' name='message' rows='8' placeholder='Enter Your message' required></textarea>
                {status && <p className='contact-status'>{status}</p>}
                <button type='submit' className='contact-submit' disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit now'}
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact
