import Github from "assets/@svg/react/solid/github";

const Footer = (props) => {
    return(
        <>
            <a className="footer" href={props.project}>
                <span className="text"> project </span>
                <Github className="svg" />
            </a>
        </>
    );
}

export default Footer;