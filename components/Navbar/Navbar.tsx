import React from "react";
import {Context, LinksSection, LogoSection} from "./Navbar.styles";


const Navbar: React.FC = () => {
    return (
        <Context>

            <LogoSection>
                hornbill
            </LogoSection>

            <LinksSection>

            </LinksSection>

        </Context>
    );
}


export default Navbar;
