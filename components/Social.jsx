import Link from "next/link";

import {
    FaGithub,
    FaLinkedinIn,
    FaWhatsapp,
    FaInstagram,
} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path:"https://github.com/jerinjerinjerin"},
<<<<<<< HEAD
    {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/jerin-raj-baa691272/"},
=======
    {icon: <FaLinkedinIn/>, path:""},
>>>>>>> 482842aa74fa9c2bad8ecfc41a41a36de3ba9d79
    {icon: <FaWhatsapp/>, path:"https://api.whatsapp.com/send?phone=%2B918015752367"},
    {icon: <FaInstagram/>, path:""},
];

const Social = ({containerStyle, iconStyles}) => {


  return (
    <div className={containerStyle}>
       {socials.map((item, index) => {
        return(
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        )
       })}
    </div>
  )
}

export default Social