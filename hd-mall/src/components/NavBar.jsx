import { React, useState } from 'react';
import "../index.css";
import hdmall from '../resource/hdmall.svg';

const NavBar = () => {

    const [activeLink, setActiveLink] = useState('รายละเอียด');

    const handleClick = (text) => {
        setActiveLink(text);
    };

    const allText = ["รายละเอียด","สถานที่ให้บริการ","HDReview","รีวิวแพ็กเกจ","คำถามจากผู้ใช้","บทความเกียวข้อง","แพ็กเกจแนะนำ"]

    return (
        <nav className="navbar">
            <a><img src={hdmall} alt="Logo" /></a>
            {allText.map((text) => (
                <a
                    key={text}
                    href={`#${text.toLowerCase()}`}
                    onClick={() => handleClick(text)}
                    className={activeLink === text ? 'active' : ''}
                >
                    {text}
                </a>
            ))}
           
        </nav>
    )
}
export default NavBar;