import React from "react";
import {
	CheckboxRememberForgot,
	Container,
	LoginBtn,
	SignInCheckbox,
	SignInForgot,
	SignInInput,
	SignInLabel,
	SignInTitle,
} from "./style";

const Login = () => {
	return (
		<Container>
			<SignInTitle>Sign in</SignInTitle>
			<SignInInput login type="text" placeholder="Login" />
			<SignInInput psw type="password" placeholder="Password" />
			<CheckboxRememberForgot>
				<div style={{ display: "flex", "align-items": "center" }}>
					<SignInCheckbox id="checkbox_id" type="checkbox" />
					<SignInLabel for="checkbox_id">Remember me</SignInLabel>
				</div>
				<SignInForgot href="#">Forgot</SignInForgot>
			</CheckboxRememberForgot>
			<LoginBtn>Login</LoginBtn>
		</Container>
	);
};

export default Login;
