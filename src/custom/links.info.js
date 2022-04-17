/* example
    {
        * type is set by svg loader, it'll display svg icon of given application
        type: 'github',
        * name of button next to svg icon 
        name: 'My github', 
        * redirect url
        url: 'https://github.com/kopytkg', 
        * boolean to hide / show url
        show: false,
        * disclick is usefull in case you dont use url but tag. It'll disable click function on button
        disclick: true
    },

*/

const data = [
    {
        type: "site",
        name: "Personal website",
        url: "https://definitelynotawebsite.website",
        show: false,
        disclick: false
    },
    {
        type: "twitter",
        name: "Twitter",
        url: "https://twitter.com/kopy_tkg",
        show: false,
        disclick: false
    },
    {
        type: "facebook",
        name: "Facebook",
        url: "https://www.facebook.com/Kopyy/",
        show: false,
        disclick: false
    },
    {
        type: "twitch",
        name: "Twitch",
        url: "https://www.twitch.tv/kopytkg",
        show: false,
        disclick: false
    },
    {
        type: "instagram",
        name: "Instagram",
        url: "https://www.instagram.com/kopy_tkg/",
        show: false,
        disclick: false
    },
    {
        type: "discord",
        name: "Discord",
        url: "https://discord.gg/ZtjNUMHm8C",
        show: false,
        disclick: false
    },
];

export default data;