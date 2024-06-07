import Link from "next/link";

import {
    FaGithub,
    FaLinkedinIn,
    FaWhatsapp,
    FaInstagram,
} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path:""},
    {icon: <FaLinkedinIn/>, path:""},
    {icon: <FaWhatsapp/>, path:""},
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