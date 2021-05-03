import "./Footer.css";
import github from '../assets/images/github.webp';
import linkedIn from '../assets/images/linked-in.webp';
function Footer(props) {
    return (
        <footer id ='contact'>
            <h3>Contact Me</h3>
            <ul>
                <li><a>620-757-3554</a></li>
                <li><a> mackenziealyce@gmail.com</a></li>
                <li><a href="MacKenzieResume.pdf" download style={{color: 'white'}}> Download my Resume</a></li>
                <li>
                    <a href  = "https://github.com/KenzieAlyce">
                        <img src={github} width="70" height = "70" />
                    </a>
                </li>
                <li>
                    <a href = "https://www.linkedin.com/in/mackenzie-clinton-3112931ba/">
                        <img src={linkedIn} width="70" height="70" />
                    </a>
                </li>
            </ul>
        </footer>
    );
}
  
  export default Footer;