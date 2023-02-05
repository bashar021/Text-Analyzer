import React,{useEffect} from 'react'

export default function TermsPrivacy(props) {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
  return (
    <div id='terms-and_services' className={`main_body main_body_${props.mode}`}>
        <div className={`about_box about_box_${props.mode}`}>
            <h1>Terms and Conditions</h1>
            <p className="h6 about_para">Welcome to Text Analyzer Tool</p>
            <p className="h6 about_para">These terms and conditions outline the rules and regulations for the use of Text Analyzer Tool</p>
            <p className="h6 about_para">By accessing this website we assume you accept these terms and conditions. Do not continue to use Text Analyzer if you do not agree to take all of the terms and conditions</p>
            <h3 className='mt-3'>Cookies</h3>
            <p className="h6 about_para">We employ the use of cookies. By accessing Text Analyzer you agreed to use cookies in agreement with the Text Analyzer Privacy Policy.</p>
            <p className="h6 about_para">Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.</p>
            <h3 className='mt-3'>Copyright</h3>
            <p className="h6 about_para">All files and information contained in this Website are copyright by Text Analyzer Tool, and may not be duplicated, copied, modified or adapted, in any way without our permission. Our Website may contain our service marks, in the form of words, graphics, and logos. Your use of our Website Services does not constitute any right or license for you to use our service marks or trademarks, without the prior written permission of Text Analyzer Tool. The copying, redistribution, use or publication by you of any such Content, is strictly prohibited. Your use of our Website and Services does not grant you any ownership rights to our Content.</p>
        </div>
    </div>
  )
}
