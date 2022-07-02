import React from "react";
import logo from "../../assets/icon/logo.svg";
import location from "../../assets/icon/location.svg";
import mobilePhone from "../../assets/icon/telephone.svg";
import gmail from "../../assets/icon/email.svg";
import facebookIcon from "../../assets/icon/facebook.svg";
import twitterIcon from "../../assets/icon/twitter.svg";
import instagramIcon from "../../assets/icon/instagram.svg";
import linkedinIcon from "../../assets/icon/linkedin.svg";
import arrow from "../../assets/icon/arrow.svg";

import {
	Logo,
	LogoLink,
	LogoTitle,
	Contacts,
	Footer1,
	FooterContainer,
	FooterElementTitle,
	FooterHr,
	FooterLink,
	FooterLinkA,
	FooterLinksCol,
	FooterLinksTitle,
	FooterSocialLink,
	FooterSocialLinkImg,
	FooterSocialMedia,
	GmailDescription,
	GmailImg,
	Gmails,
	LocationDescription,
	LocationImg,
	Locations,
	PhoneDescription,
	PhoneImg,
	Phones,
	FooterCopyrightTextArrow,
	FooterCopyrightText,
	FooterCopyrightArrowLink,
	FooterCopyrightArrowImg,
	FooterCopyright,
} from "./style";

const Footer = () => {
	return (
		<div>
			<FooterContainer>
				<Footer1>
					<Contacts>
						<FooterElementTitle>Contact Us</FooterElementTitle>
						<Locations>
							<LocationImg src={location} alt="Location" />
							<LocationDescription>
								329 Queensberry Street, North Melbourne VIC 3051, Australia.
							</LocationDescription>
						</Locations>
						<Phones>
							<PhoneImg src={mobilePhone} alt="Mobile Phone" />
							<PhoneDescription>123 456 7890</PhoneDescription>
						</Phones>
						<Gmails>
							<GmailImg src={gmail} alt="gmail" />
							<GmailDescription>support@houzing.com</GmailDescription>
						</Gmails>
						<FooterSocialMedia>
							<FooterSocialLink facebook href="#">
								<FooterSocialLinkImg src={facebookIcon} alt="Facebook Icon" />
							</FooterSocialLink>
							<FooterSocialLink href="#">
								<FooterSocialLinkImg src={twitterIcon} alt="Facebook Icon" />
							</FooterSocialLink>
							<FooterSocialLink href="#">
								<FooterSocialLinkImg src={instagramIcon} alt="Facebook Icon" />
							</FooterSocialLink>
							<FooterSocialLink href="#">
								<FooterSocialLinkImg src={linkedinIcon} alt="Facebook Icon" />
							</FooterSocialLink>
						</FooterSocialMedia>
					</Contacts>
					<FooterLinksTitle>
						<FooterElementTitle>Discover</FooterElementTitle>
						<FooterLinksCol>
							<FooterLink>
								<FooterLinkA href="#">Chicago</FooterLinkA>
							</FooterLink>
							<FooterLink>
								<FooterLinkA href="#">Los Angeles</FooterLinkA>
							</FooterLink>
							<FooterLink>
								<FooterLinkA href="#">Miami</FooterLinkA>
							</FooterLink>
							<FooterLink>
								<FooterLinkA href="#">New York</FooterLinkA>
							</FooterLink>
						</FooterLinksCol>
					</FooterLinksTitle>
					<FooterLinksTitle>
						<FooterElementTitle>Lists by Category</FooterElementTitle>
						<FooterLinksCol>
							<FooterLink>
								<FooterLinkA href="#">Apartments</FooterLinkA>
							</FooterLink>
							<FooterLink>
								<FooterLinkA href="#">Condos</FooterLinkA>
							</FooterLink>
							<FooterLink>
								<FooterLinkA href="#">Houses</FooterLinkA>
							</FooterLink>
							<FooterLink>
								<FooterLinkA href="#">Offices</FooterLinkA>
							</FooterLink>
							<FooterLink>
								<FooterLinkA href="#">Retail</FooterLinkA>
							</FooterLink>
							<FooterLink>
								<FooterLinkA href="#">Villas</FooterLinkA>
							</FooterLink>
						</FooterLinksCol>
					</FooterLinksTitle>
					<FooterLinksTitle>
						<FooterElementTitle>Lists by Category</FooterElementTitle>
						<FooterLinksCol>
							<FooterLink>
								<FooterLinkA href="#">About Us</FooterLinkA>
							</FooterLink>
							<FooterLink>
								<FooterLinkA href="#">Terms & Conditions</FooterLinkA>
							</FooterLink>
							<FooterLink>
								<FooterLinkA href="#">Support Center</FooterLinkA>
							</FooterLink>
							<FooterLink>
								<FooterLinkA href="#">Contact Us</FooterLinkA>
							</FooterLink>
						</FooterLinksCol>
					</FooterLinksTitle>
				</Footer1>
			</FooterContainer>
			<FooterHr />
			<FooterContainer>
				<FooterCopyright>
					<Logo>
						<LogoLink href="#">
							<img src={logo} alt="Navbar logo" />
							<LogoTitle>Houzing</LogoTitle>
						</LogoLink>
					</Logo>
					<FooterCopyrightTextArrow>
						<FooterCopyrightText>
							Copyright © 2021 CreativeLayers. All Right Reserved.
						</FooterCopyrightText>
						<FooterCopyrightArrowLink href="#">
							<FooterCopyrightArrowImg src={arrow} alt="Arrow Icons" />
						</FooterCopyrightArrowLink>
					</FooterCopyrightTextArrow>
				</FooterCopyright>
			</FooterContainer>
		</div>
	);
};

export default Footer;
