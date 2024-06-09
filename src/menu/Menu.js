import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // fortawesome에서 SVG 아이콘 import
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import './menustyle.css'; // CSS 파일

function Menu({ setIsHovered }) {
    const [isOpen, setIsOpen] = useState(false);
    const [expandMenu, setExpandMenu] = useState(false);
    const menuRef = useRef(null);
    const bodyRef = useRef(document.body);
    const overlayRef = useRef();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        bodyRef.current.classList.toggle('overflow');
        overlayRef.current.classList.toggle('overlay--active');
        menuRef.current.classList.toggle('open');
    };

    const toggleExpand = () => {
        setExpandMenu(!expandMenu);
    };




    return (
        <>
            <header className="navbar sticky">
                <a href="#" className="logo"><FontAwesomeIcon icon={faAppleWhole} /> YUJA</a>
                <div className="menu-btn" onClick={toggleMenu}>
                    <div className="menu-btn__lines"></div>
                </div>

                <ul className="menu-items">
                    <li><a href="#" className="menu-item first-item">Home Page</a></li>
                    <li>
                        <a href="#" className="menu-item first-item">게시판</a>
                    </li>
                    <li>
                        <a href="#" className="menu-item first-item">캘린더</a>
                    </li>
                    <li className="mega-menu-hover">
                        <a href="#" className="menu-item first-item expand-btn"
                        onMouseEnter={() => setIsHovered(true)}     
                        onMouseLeave={() => setIsHovered(false)}
                        >기출문제</a> {/* 블러처리를 위한 코드 */}
                        <div className="mega-menu sample">
                            <div className="content">
                                <div className="col">
                                    <section>
                                        <div className="menu-title">Category 1</div>
                                        <a href="#" className="img-wrapper">
                                            <span className="img"><img src="https://picsum.photos/400?random=1" alt="Random Image" /></span>
                                        </a>
                                        <p>Very beautiful.</p>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <div className="menu-title">Category 2</div>
                                        <ul className="mega-links">
                                            <li><a href="#" className="menu-item">Item with a long menu name 1</a></li>
                                            <li><a href="#" className="menu-item">Item with a long menu name 2</a></li>
                                            <li><a href="#" className="menu-item">Item with a long menu name 3</a></li>
                                            <li><a href="#" className="menu-item">Item with a long menu name 4</a></li>
                                            <li><a href="#" className="menu-item">Item with a long menu name 5</a></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <div className="menu-title">Category 3</div>
                                        <ul className="mega-links">
                                            <li><a href="#" className="menu-item">Item 1</a></li>
                                            <li><a href="#" className="menu-item">Item 2</a></li>
                                            <li><a href="#" className="menu-item">Item 3</a></li>
                                            <li><a href="#" className="menu-item">Item 4</a></li>
                                            <li><a href="#" className="menu-item">Item 5</a></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <div className="menu-title">Category 4</div>
                                        <ul className="mega-links">
                                            <li><a href="#" className="menu-item">Item 1</a></li>
                                            <li><a href="#" className="menu-item">Item 2</a></li>
                                            <li><a href="#" className="menu-item">Item 3</a></li>
                                            <li><a href="#" className="menu-item">Item 4</a></li>
                                            <li><a href="#" className="menu-item">Item 5</a></li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="menu-item first-item expand-btn"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>자격증</a>
                        <div className="mega-menu blog sample">
                            <div className="content">
                                <div className="col">
                                    <a href="#" className="img-wrapper">
                                        <span className="img"><img src="https://picsum.photos/400?random=2" alt="Random Image" /></span>
                                    </a>
                                    <div className="menu-title">Your Title</div>
                                    <p>
                                        I looked at a lot of menus, something is wrong everywhere.
                                        In this menu, in my opinion, I took into account all the shortcomings.
                                        Simple and clear code in pure JS. No Jquery, Bootstrap and other libraries are closed when you click outside the area and press Esc.
                                    </p>
                                    <a href="#" className="read-more">read more</a>
                                </div>
                                <div className="col">
                                    <a href="#" className="img-wrapper">
                                        <span className="img"><img src="https://picsum.photos/400?random=3" alt="Random Image" /></span>
                                    </a>
                                    <div className="menu-title">Your Title</div>
                                    <p>
                                        I looked at a lot of menus, something is wrong everywhere.
                                        In this menu, in my opinion, I took into account all the shortcomings.
                                        Simple and clear code in pure JS. No Jquery, Bootstrap and other libraries are closed when you click outside the area and press Esc.
                                    </p>
                                    <a href="#" className="read-more">read more</a>
                                </div>
                                <div className="col">
                                    <a href="#" className="img-wrapper">
                                        <span className="img"><img src="https://picsum.photos/400?random=4" alt="Random Image" /></span>
                                    </a>
                                    <div className="menu-title">Your Title</div>
                                    <p>
                                        I looked at a lot of menus, something is wrong everywhere.
                                        In this menu, in my opinion, I took into account all the shortcomings.
                                        Simple and clear code in pure JS. No Jquery, Bootstrap and other libraries are closed when you click outside the area and press Esc.
                                    </p>
                                    <a href="#" className="read-more">read more</a>
                                </div>
                                <div className="col">
                                    <a href="#" className="img-wrapper">
                                        <span className="img"><img src="https://picsum.photos/400?random=5" alt="Random Image" /></span>
                                    </a>
                                    <div className="menu-title">Your Title</div>
                                    <p>
                                        I looked at a lot of menus, something is wrong everywhere.
                                        In this menu, in my opinion, I took into account all the shortcomings.
                                        Simple and clear code in pure JS. No Jquery, Bootstrap and other libraries are closed when you click outside the area and press Esc.
                                    </p>
                                    <a href="#" className="read-more">read more</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#" className="menu-item first-item">
                        <FontAwesomeIcon icon={faUser} style={{fontSize: '18px' }} /></a></li>

                </ul>

            </header>
        </>

    )

}

export default Menu;