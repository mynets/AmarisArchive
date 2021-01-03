import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import {FooterContainer, SocialIcon, SocialIconLinks, SocialIcons, SocialMediaWrap, SocialMedia, WebsiteRights, SocialLogo} from "./footerElements";

const Footer = () => {
    return(
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon>

                        </SocialIcon>
                        Amari's Archive
                    </SocialLogo>
                        <WebsiteRights>Amari's Archive © {new Date().getFullYear()}</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLinks href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLinks>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer