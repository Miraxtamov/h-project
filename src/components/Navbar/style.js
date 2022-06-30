import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
	background-color: #0d263b;
	color: #ffffff;
	margin-bottom: 10px;
`;

Nav.NavbarClass = styled(Nav)`
	max-width: 1440px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	padding: 14px 130px 14px 130px;
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
`;

export const LogoLink = styled(NavLink)`
	display: flex;
	align-items: center;
`;

export const LogoImg = styled.img``;

export const LogoTitle = styled.h2`
	margin-left: 11px;
	color: #ffffff;
`;

export const Navigation = styled.div`
	margin-left: auto;
`;

export const UlNavList = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NavItem = styled.li`
	margin-right: 64px;
`;

export const NavLinkHref = styled(NavLink)`
	font-size: 16px;
	color: #ffffff;
	line-height: 24px;
	font-weight: 400;
`;

export const NavButton = styled.button`
	color: #ffffff;
	padding: 12px 40px;
	background-color: transparent;
	border: 1px solid #ffffff;
	border-radius: 2px;
	cursor: pointer;
	font-size: 14px;
	line-height: 20px;
	margin-left: 238px;
`;
