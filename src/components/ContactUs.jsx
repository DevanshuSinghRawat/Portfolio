import { GrLinkedin } from "react-icons/gr"; 
import { ImGithub } from "react-icons/im"; 
import { HiOutlineMail } from "react-icons/hi"; 
import './styling/contactus.css';

export default function ContactUs(){
    return (<div className="contactus">
        <h1> Contact Us </h1>
        <ol>
            <li> <HiOutlineMail />  <a href="https://mail.google.com/"> devanshu21001@gmail.com </a></li>
            <li> <GrLinkedin /> <a href="www.linkedin.com/in/devanshu-rawat"> linkedin.com/in/devanshu-rawat </a> </li>
            <li> <ImGithub /> <a href="github.com/DevanshuSinghRawat"> github.com/DevanshuSinghRawat </a> </li>
        </ol>
    </div>)
} 