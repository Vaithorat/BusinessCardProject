import Images from '../components/FooterLogo';
import React from 'react'
// import Photo from "./Images/photo.jpg"
export default function Footer (){
    return (
        <>
        <div className='footer'>
        <img className = "footerF"src={Images.logoFacebook} alt = "" />
    <img className = "footerT"src={Images.logoTwitter} alt = "" />
    <img className = "footerI"src={Images.logoInstagram} alt = "" />
    <img className = "footerG"src={Images.logoGithub} alt = "" />
        </div>
        </>
    )
}