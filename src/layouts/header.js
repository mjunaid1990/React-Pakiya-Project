import React from "react";
import { isMobile } from 'react-device-detect';
import Menu from "./menu";

function Header() {

    if (isMobile) {
        return (
            <header className="header home-style">
                <Menu></Menu>
            </header>
        )
    } else {
        return (
            <header className="header hm">
                <Menu></Menu>
            </header>
        )
    }

}
export default Header;