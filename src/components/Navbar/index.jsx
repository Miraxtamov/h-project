import React from "react";
import logo from "../../assets/icon/logo.svg";
import FilterSearchButton from "../FilterSearch";
import {
	Logo,
	LogoImg,
	LogoTitle,
	Nav,
	NavButton,
	Navigation,
	NavItem,
	UlNavList,
	NavLinkHref,
	LogoLink,
} from "./style";

const Navbar = () => {
	return (
		<Nav>
			<Nav.NavbarClass>
				<Logo>
					<LogoLink to="/">
						<LogoImg src={logo} />
						<LogoTitle>Houzing</LogoTitle>
					</LogoLink>
				</Logo>
				<Navigation>
					<UlNavList>
						<NavItem>
							<NavLinkHref to={"/home"}>Home</NavLinkHref>
						</NavItem>
						<NavItem>
							<NavLinkHref to={"/properties"}>Properties</NavLinkHref>
						</NavItem>
						<NavItem>
							<NavLinkHref to={"contacts"}>Contacts</NavLinkHref>
						</NavItem>
						<NavLinkHref to={"/login"}>
							<NavButton>Login</NavButton>
						</NavLinkHref>
					</UlNavList>
				</Navigation>
			</Nav.NavbarClass>
		</Nav>
	);
};

export default Navbar;
