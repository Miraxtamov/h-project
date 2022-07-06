import styled from "styled-components";

export const ContainerContainer = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding-right: 130px;
	padding-left: 130px;
`;

export const CardMainTitle = styled.h1`
	color: #0d263b;
	text-align: center;
	letter-spacing: -0.02em;
	font-weight: 600;
	font-size: 28px;
	line-height: 36px;
	margin-bottom: 8px;
`;

export const CardMainDescription = styled.p`
	color: #696969;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	margin-bottom: 65px;
`;

export const CardResultSortBy = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
`;

export const CardResult = styled.div`
	color: #0d263b;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
`;

export const CardResultSortByButton = styled.div`
	color: #0d263b;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
`;

export const CardSelect = styled.select`
	color: #0d263b;
	font-size: 14px;
	line-height: 20px;
	outline: none;
	border: none;
	border-bottom: 2px solid #e6e9ec;
`;

export const CardSelectOption = styled.option`
	border: none;
`;

export const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	z-index: 0;
`;

export const SpanBold = styled.span`
	font-weight: 600;
	margin-right: 5px;
`;

export const CardItem1 = styled.div`
	border: 1px solid #e6e9ec;
	border-radius: 3px;
	padding: 1px;
	position: relative;
	width: 100%;
`;

export const CardItemImg = styled.img`
	position: relative;
	margin-bottom: -50px;
	z-index: 0;
	width: 100%;
`;

export const CardItemSaleProfileImg = styled.div`
	position: absolute;
	top: 18px;
	/* left: 3%; */
	width: 100%;
	height: 222px;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-right: 20px;
	padding-left: 20px;
`;

export const CardItemSales = styled.div`
	display: flex;
	justify-content: space-between;
	color: #ffffff;
`;

export const CardItemFeatured = styled.div`
	background: #0061df;
	border-radius: 3px;
	padding: 5px 10px;
`;

export const CardItemSale = styled(CardItemFeatured)`
	background: #0d263b;
`;

export const CardProfileImg = styled.img`
	z-index: 1;
	position: relative;
	top: -22px;
	width: 38px;
	height: 38px;
	box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
	border: 2px solid #ffffff;
	border-radius: 50%;
	margin-left: auto;
	margin-top: auto;
`;

export const CardItemTitle = styled.h1`
	color: #0d263b;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 4px;
	margin-top: 70px;
	padding-left: 20px;
`;

export const CardItemDescription = styled.p`
	color: #696969;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	padding-left: 20px;
	margin-bottom: 16px;
`;

export const CardIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 20px;
	padding-left: 20px;
`;

export const CardIcon = styled.div`
	text-align: center;
`;
export const CardIconImg = styled.img`
	margin-bottom: 5px;
`;
export const CardIconText = styled.p`
	color: #696969;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	margin-bottom: 16px;
`;

export const CardHr = styled.hr`
	background: #e6e9ec;
	margin-bottom: 8px;
`;

export const CardItemPriceLike = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;
	margin-bottom: 8px;
`;

export const CardItemPrices = styled.div`
	display: flex;
	flex-direction: column;
`;
export const CardItemDiscount = styled.div`
	color: #696969;
	text-decoration-line: line-through;
	font-size: 12px;
	line-height: 20px;
`;

export const CardItemPrice = styled.div`
	color: #0d263b;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
`;

export const CardItemResizeLike = styled.div`
	display: flex;
	align-items: center;
`;

export const CardResizeImg = styled.img`
	margin-right: 20px;
	cursor: pointer;
`;

export const CardHeartImg = styled.img`
	background: #f6f8f9;
	border-radius: 60px;
	padding: 11px 10px;
	cursor: pointer;
`;

export const CardsBtnShowMore = styled.button`
	display: flex;
	font-size: 14px;
	line-height: 20px;
	padding: 12px 85px;
	cursor: pointer;
	background: #0061df;
	border: none;
	border-radius: 2px;
	color: #ffffff;
	margin: 48px auto 96px auto;
`;
