import React from 'react';
import '../App.css';
import './AboutUsSection.css';

function AboutUsSection() {
  return (
    <div className='about-us-container'>
      <div className='about-us-logo'>
        <h1 className='about-us-title'>About SPADATAS</h1>
        <img className='about-us-icon' src='./images/SPADATAS_logo.png' alt='The logo of SPADATAS in a shield-like shape'/>
      </div>

      <div className='about-description-container'>
        <div className='about-description-body'>
          <h2>What is SPADATAS?</h2>
          <br/>
          <p>In educational environments, cloud technology adoption in the last 10 years has enabled a data-driven and decision-making paradigm in organizations. Regarding technology, schools and universities are experiencing rapid processes of digital updating where the adoption of third-party technology solutions in the cloud results in changes in academic and learning processes. Regarding data, technology that collects and analyzes students’ data to present actionable information enhances teaching-learning processes. In the one hand, those organizations that understand the power of data can improve educational context in very different manners. In the other hand, those that do not envision this data-shift in the teaching-learning processes cannot benefit from analytical outputs. However, both perspectives have the same cloud computed technology associated problems regarding data fragility.</p>
          <br/>
          <p>Cloud storage brings the ubiquity of data to this technical transition. However, in many cases, this suggests that certain actors, beyond the control of schools and colleges, collect, handle, and treat educational data on private servers and data centers. This privatization enables the manipulation of stored records, data leaks, and unauthorized access. Hence, although the integration of cloud services in schools and universities have a positive shift, it also presents threats to all academic roles that need to be discussed in terms of protection, privacy, and confidentiality.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;