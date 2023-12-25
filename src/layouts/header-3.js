import React from "react";
import Menu from "./menu";
import { isMobile } from 'react-device-detect';

function Header3() {
    
    if (isMobile) {
        return (
            <header className="header product-style position-relative">
                    <Menu></Menu>
            </header>
        )
    } else {
        return (
            <header className="header product-style position-relative header-boxshadow">
                    <Menu></Menu>
            </header>

        )
    }

}
export default Header3;