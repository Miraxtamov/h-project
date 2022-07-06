import styled from "styled-components";

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	border: 1px solid #e6e9ec;
	box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
	border-radius: 3px;
	width: 580px;
	min-height: 376px;
	margin-bottom: 64px;
	padding: 24px 30px 48px 30px;
`;

export const SignInTitle = styled.div`
	color: #0d263b;
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
`;

export const SignInInput = styled.input`
	outline: none;
	border: none;
	border-bottom: 2px solid #e6e9ec;
	&::placeholder {
		color: #696969;
		line-height: 20px;
	}
	padding: 4px 4px 4px 0;
	color: #0d263b;
	width: 100%;
	margin-top: ${(props) => (props.login ? "68px" : "44px")};
	margin-bottom: ${(props) => (props.psw ? "16px" : {})};
	font-size: 14px;
`;

export const CheckboxRememberForgot = styled.div`
	display: flex;
	justify-content: space-between;
	align-self: flex-start;
	margin-bottom: 28px;
`;

export const SignInCheckbox = styled.input`
	width: 18px;
	height: 18px;
	border: 2px solid #e6e9ec;
`;

export const SignInLabel = styled.label`
	margin-left: 11px;
	color: #696969;
	font-size: 14px;
	line-height: 20px;
`;

export const SignInForgot = styled.a`
	color: #0061df;
	text-decoration-line: underline;
	font-size: 16px;
	line-height: 24px;
`;

export const LoginBtn = styled.button`
	width: 100%;
	background: #0061df;
	border-radius: 2px;
	padding-top: 12px;
	padding-bottom: 12px;
	border: none;
	cursor: pointer;
	color: #ffffff;
	font-size: 14px;
	line-height: 20px;
`;
