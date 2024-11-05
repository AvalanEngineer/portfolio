import "../../css/footer.css";
import { data } from "../../ts/section_data.ts";
import IconGitHub from "../icons/github.tsx";
import IconInstagram from "../icons/instagram.tsx";
import IconLinkedin from "../icons/linkedin.tsx";
import IconTwitter from "../icons/twitter.tsx";

function Footer() {
  const onLinkClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="footer">
      <div id="footer_socials" className="footer_socials">
        {/** start of github */}
        <IconGitHub
          onClick={() => onLinkClick(data.contact.socials.github)}
          className="social_btn"
        />
        {/** start of instagram */}
        <IconInstagram
          onClick={() => onLinkClick(data.contact.socials.instagram)}
          className="social_btn"
        />
        {/** start of linked in */}
        <IconLinkedin
          onClick={() => onLinkClick(data.contact.socials.linkedIn)}
          className="social_btn"
        />
        {/** start of twiter */}
        <IconTwitter
          onClick={() => onLinkClick(data.contact.socials.twiter)}
          className="social_btn"
        />
      </div>
      <h6 style={{ textAlign: "center",width:'fit-content',alignSelf:'center' }}>{data.footer.content}</h6>
    </div>
  );
}

export default Footer;
