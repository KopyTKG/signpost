import { At, Discord, Drive, Facebook, Github, Gmail, Instagram, LinkedIn, Messenger, Patreon, Pinterest, Private, Reddit, Site, Snapchat, Spotify, Steam, Telegram, Tiktok, Twitch, Twitter, Ubisoft, Vercel, Vimeo, Youtube } from "../assets/@svg/react/solid"

function SVGloader(props) {
    const width = "50px";
    switch(props.type) {
        default:
            return(null);
            
        case "at": 
                return(<At width={width} />);
                
        case "discord": 
                return(<Discord width={width} />);
                
        case "drive": 
                return(<Drive width={width} />);
                
        case "facebook": 
                return(<Facebook width={width} />);
                
        case "github": 
                return(<Github width={width} />);
                
        case "gmail": 
                return(<Gmail width={width} />);
                
        case "instagram": 
                return(<Instagram width={width} />);
                
        case "linkedin": 
                return(<LinkedIn width={width} />);
                
        case "messenger": 
                return(<Messenger width={width} />);
                
        case "patreon": 
                return(<Patreon width={width} />);
                
        case "pinterest": 
                return(<Pinterest width={width} />);
                
        case "private": 
                return(<Private width={width} />);
                
        case "reddit": 
                return(<Reddit width={width} />);
                
        case "site": 
                return(<Site width={width} />);
                
        case "snapchat": 
                return(<Snapchat width={width} />);
                
        case "spotify": 
                return(<Spotify width={width} />);
                
        case "steam": 
                return(<Steam width={width} />);
                
        case "telegram": 
                return(<Telegram width={width} />);
                
        case "tiktok": 
                return(<Tiktok width={width} />);
                
        case "twitch": 
                return(<Twitch width={width} />);
                
        case "twitter": 
                return(<Twitter width={width} />);
                
        case "ubisoft": 
                return(<Ubisoft width={width} />);
                
        case "vercel": 
                return(<Vercel width={width} />);
                
        case "vimeo": 
                return(<Vimeo width={width} />);
                
        case "youtube": 
                return(<Youtube width={width} />);
                
    }
}

export default SVGloader;