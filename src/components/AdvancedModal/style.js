import styled from "styled-components";

export const ModalContainer = styled.div`
	position: absolute;
	z-index: 2;
	top: 150px;
	left: 162px;
	padding-top: 30px;
	padding-bottom: 30px;
	width: 850px;
	height: 400px;
	border-radius: 5px;
	box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
	background-color: #ffffff;
`;

export const ModalTitles = styled.div`
	color: #0d263b;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 10px;
	padding-left: 30px;
`;

export const ModalAddressContainer = styled.div`
	display: flex;
	align-items: center;
	padding-left: 30px;
	padding-right: 30px;
`;

export const ModalAddressInput = styled.input`
	border: 1px solid #e6e9ec;
	border-radius: 2px;
	color: #0d263b;
	font-size: 14px;
	line-height: 20px;
	outline: none;
	padding: 12px;
	margin-bottom: 20px;
	width: 175px;
	margin-left: ${(props) => (props.firstML ? "0" : "20px")};
`;

export const ModalInfoContainer = styled(ModalAddressContainer)``;

export const ModalInfoInput = styled(ModalAddressInput)``;

export const ModalPriceContainer = styled(ModalAddressContainer)``;

export const ModalPriceInput = styled(ModalAddressInput)``;

export const ModalButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background: #f6f8f9;
	border-radius: 0px 0px 5px 5px;
	width: 850px;
`;

export const ModalCancelButton = styled.button`
	color: #0d263b;
	font-size: 14px;
	line-height: 20px;
	padding: 12px 40px;
	border: 1px solid #0d263b;
	border-radius: 2px;
	cursor: pointer;
	margin-top: 20px;
	margin-bottom: 20px;
`;

export const ModalSubmitButton = styled.button`
	background: #0061df;
	outline: none;
	border: 2px solid #0061df;
	border-radius: 2px;
	color: #ffffff;
	font-size: 14px;
	line-height: 20px;
	padding: 12px 38px;
	margin-top: 20px;
	margin-bottom: 20px;
	cursor: pointer;
	margin-left: 20px;
	margin-right: 30px;
`;
