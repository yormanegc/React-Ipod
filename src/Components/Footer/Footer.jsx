import { SlSocialBehance , SlSocialGithub, SlSocialLinkedin, } from "react-icons/sl";
const Footer = () => {
    return(
        <footer className="footer">
            <h3 className="footer__name">Design by Yorman Gonzalez</h3>
            <ul className="footer__social">
                <a target="_blank" href="https://www.behance.net/yormangonzalezfresh" className="footer__social-item"><SlSocialBehance className="footer__social-item-link"/></a>
                <a target="_blank" href="https://github.com/yormanegc" className="footer__social-item"><SlSocialGithub className="footer__social-item-link"/></a>
                <a target="_blank" href="https://www.linkedin.com/in/yorman-gonzalez-180959164/" className="footer__social-item"><SlSocialLinkedin className="footer__social-item-link"/></a>
            </ul>
        </footer>
    )
}

export default Footer;