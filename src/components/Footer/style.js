import styled, { css } from "styled-components";

export const LocationsPhonesGmail = css`
	display: flex;
	align-items: flex-start;
	margin-bottom: 20px;
`;

export const LocationsPhonesGmailDiv = css`
	margin-left: 21px;
	color: #ffffff;
	font-size: 14px;
	line-height: 20px;
`;

export const FooterSocialLinks = css`
	margin-left: 37px;
	font-size: 14px;
	line-height: 16px;
	color: #ffffff;
`;

export const FooterContainer = styled.div`
	background-color: #0d263b;
	/* padding: 14px 130px 14px 130px; */
`;

export const Footer1 = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	padding: 24px 130px 24px 130px;
`;

export const Contacts = styled.div``;

export const FooterElementTitle = styled.div`
	color: #ffffff;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	margin-top: 24px;
	margin-bottom: 32px;
`;

export const Locations = styled.div`
	${LocationsPhonesGmail}
`;

export const LocationImg = styled.img``;

export const LocationDescription = styled.div`
	${LocationsPhonesGmailDiv}
	width: 256px;
`;

export const Phones = styled.div`
	${LocationsPhonesGmail}
`;

export const PhoneImg = styled.img``;

export const PhoneDescription = styled.div`
	${LocationsPhonesGmailDiv}
`;

export const Gmails = styled.div`
	${LocationsPhonesGmail}
`;

export const GmailImg = styled.img``;

export const GmailDescription = styled.div`
	${LocationsPhonesGmailDiv}
	margin-bottom: 40px;
`;

export const FooterSocialMedia = styled.div`
	display: flex;
	align-items: center;
`;

export const FooterSocialLink = styled.a`
	${FooterSocialLinks}
	margin-left: ${(props) => (props.facebook ? "0" : "26px")};
`;

export const FooterSocialLinkImg = styled.img`
	padding: 11px;
	color: #ffffff;
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 3px;
		padding: 10px 11px;
		color: #ffffff !important;
	}
`;

export const FooterLinksTitle = styled.div``;

export const FooterLinksCol = styled.div``;
export const FooterLink = styled.div`
	margin-bottom: 20px;
	font-size: 14px;
	line-height: 20px;
`;

export const FooterLinkA = styled.a`
	font-weight: 400;
	color: #ffffff;
`;

export const FooterHr = styled.hr`
	background: rgba(255, 255, 255, 0.15);
`;

export const FooterCopyright = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	background-color: #0d263b;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24px 130px 24px 130px;
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
`;

export const LogoLink = styled.a`
	display: flex;
	align-items: center;
`;

export const LogoTitle = styled.h2`
	margin-left: 11px;
	color: #ffffff;
`;

export const FooterCopyrightTextArrow = styled.div`
	display: flex;
	align-items: center;
`;

export const FooterCopyrightText = styled.div`
	color: #ffffff;
`;

export const FooterCopyrightArrowLink = styled.a``;

export const FooterCopyrightArrowImg = styled.img`
	padding: 20px 18px;
	background-color: #0061df;
	margin-left: 73px;
`;
