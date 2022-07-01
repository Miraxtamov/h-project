import styled from "styled-components";

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding-right: 130px;
	padding-left: 130px;
`;

export const FilterSearchContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 64px;
`;
export const FilterSearchInput = styled.input`
	border: 1px solid #e6e9ec;
	border-radius: 2px;
	outline: none;
	padding: 12px;
	width: 527px;
	color: #0d263b;
	font-size: 14px;
	line-height: 20px;
`;

export const FilterSearchButtons = styled.button`
	border: 1px solid #e6e9ec;
	border-radius: 2px;
	cursor: pointer;
	padding: 12px 30px;
	background-color: #ffffff;
	display: flex;
	align-items: center;
	color: #0d263b;
	font-size: 14px;
	line-height: 20px;
	margin-left: 20px;
`;

export const FilterSearchButtonsSearch = styled.button`
	display: flex;
	align-items: center;
	border: 1px solid #e6e9ec;
	border-radius: 2px;
	cursor: pointer;
	font-size: 14px;
	line-height: 20px;
	margin-left: 20px;
	padding: 12px 54px;
	color: #ffffff;
	background-color: #0061df;
`;

export const FilterButtonImg = styled.img`
	margin-right: 8px;
`;
