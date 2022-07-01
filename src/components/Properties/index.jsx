import React from "react";
import {
	CardContainer,
	CardMainDescription,
	CardMainTitle,
	CardResult,
	CardResultSortBy,
	CardResultSortByButton,
	CardSelect,
	CardSelectOption,
	SpanBold,
	CardsBtnShowMore,
	ContainerContainer,
	CardItem1,
	CardIconImg,
	CardIconText,
	CardHr,
	CardItemPriceLike,
	CardItemPrices,
	CardItemDiscount,
	CardItemPrice,
	CardItemResizeLike,
	CardResizeImg,
	CardHeartImg,
	CardProfileImg,
	CardIcons,
	CardIcon,
	CardItemDescription,
	CardItemFeatured,
	CardItemImg,
	CardItemSale,
	CardItemSales,
	CardItemTitle,
} from "./style";

import cardHouse1 from "../../assets/img/cardHouses.png";
import cardHouse2 from "../../assets/img/cardHouses1.png";
import cardProfile from "../../assets/img/cardProfile.png";
import cardBed from "../../assets/icon/bed.svg";
import cardCar from "../../assets/icon/car.svg";
import cardBath from "../../assets/icon/bath.svg";
import cardRuler from "../../assets/icon/ruler.svg";
import cardResize from "../../assets/icon/resize.svg";
import cardHeart from "../../assets/icon/love.svg";

const Properties = () => {
	return (
		<ContainerContainer>
			<CardMainTitle> Properties</CardMainTitle>
			<CardMainDescription>
				Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
			</CardMainDescription>
			<CardResultSortBy>
				<CardResult>
					<SpanBold>13,474</SpanBold>
					results
				</CardResult>
				<CardResultSortByButton>
					<CardSelect>
						<CardSelectOption value="Sort by: Newest Listings">
							Sort by: Newest Listings
						</CardSelectOption>
						<CardSelectOption value="Sort by: The oldest lists">
							Sort by: The oldest lists
						</CardSelectOption>
					</CardSelect>
				</CardResultSortByButton>
			</CardResultSortBy>
			<CardContainer>
				<CardItem1>
					<CardItemImg src={cardHouse1} />
					<CardItemSales>
						<CardItemFeatured>FEATURED</CardItemFeatured>
						<CardItemSale>FOR SALE</CardItemSale>
					</CardItemSales>
					<CardProfileImg src={cardProfile} />
					<CardItemTitle>New Apartment Nice Wiew</CardItemTitle>
					<CardItemDescription>
						Quincy St, Brooklyn, NY, USA
					</CardItemDescription>
					<CardIcons>
						<CardIcon>
							<CardIconImg src={cardBed} />
							<CardIconText>4 Beds</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardBath} />
							<CardIconText>5 Baths</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardCar} />
							<CardIconText>1 Garage</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardRuler} />
							<CardIconText>1200 Sq Ft</CardIconText>
						</CardIcon>
					</CardIcons>
					<CardHr />
					<CardItemPriceLike>
						<CardItemPrices>
							<CardItemDiscount>$2,800/mo</CardItemDiscount>
							<CardItemPrice>$7,500/mo</CardItemPrice>
						</CardItemPrices>
						<CardItemResizeLike>
							<CardResizeImg src={cardResize} />
							<CardHeartImg src={cardHeart} />
						</CardItemResizeLike>
					</CardItemPriceLike>
				</CardItem1>
				<CardItem1>
					<CardItemImg src={cardHouse2} />
					<CardItemSales>
						<CardItemFeatured>FEATURED</CardItemFeatured>
						<CardItemSale>FOR SALE</CardItemSale>
					</CardItemSales>
					<CardProfileImg src={cardProfile} />
					<CardItemTitle>New Apartment Nice Wiew</CardItemTitle>
					<CardItemDescription>
						Quincy St, Brooklyn, NY, USA
					</CardItemDescription>
					<CardIcons>
						<CardIcon>
							<CardIconImg src={cardBed} />
							<CardIconText>4 Beds</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardBath} />
							<CardIconText>5 Baths</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardCar} />
							<CardIconText>1 Garage</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardRuler} />
							<CardIconText>1200 Sq Ft</CardIconText>
						</CardIcon>
					</CardIcons>
					<CardHr />
					<CardItemPriceLike>
						<CardItemPrices>
							<CardItemDiscount>$2,800/mo</CardItemDiscount>
							<CardItemPrice>$7,500/mo</CardItemPrice>
						</CardItemPrices>
						<CardItemResizeLike>
							<CardResizeImg src={cardResize} />
							<CardHeartImg src={cardHeart} />
						</CardItemResizeLike>
					</CardItemPriceLike>
				</CardItem1>
				<CardItem1>
					<CardItemImg src={cardHouse1} />
					<CardItemSales>
						<CardItemFeatured>FEATURED</CardItemFeatured>
						<CardItemSale>FOR SALE</CardItemSale>
					</CardItemSales>
					<CardProfileImg src={cardProfile} />
					<CardItemTitle>New Apartment Nice Wiew</CardItemTitle>
					<CardItemDescription>
						Quincy St, Brooklyn, NY, USA
					</CardItemDescription>
					<CardIcons>
						<CardIcon>
							<CardIconImg src={cardBed} />
							<CardIconText>4 Beds</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardBath} />
							<CardIconText>5 Baths</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardCar} />
							<CardIconText>1 Garage</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardRuler} />
							<CardIconText>1200 Sq Ft</CardIconText>
						</CardIcon>
					</CardIcons>
					<CardHr />
					<CardItemPriceLike>
						<CardItemPrices>
							<CardItemDiscount>$2,800/mo</CardItemDiscount>
							<CardItemPrice>$7,500/mo</CardItemPrice>
						</CardItemPrices>
						<CardItemResizeLike>
							<CardResizeImg src={cardResize} />
							<CardHeartImg src={cardHeart} />
						</CardItemResizeLike>
					</CardItemPriceLike>
				</CardItem1>
				<CardItem1>
					<CardItemImg src={cardHouse1} />
					<CardItemSales>
						<CardItemFeatured>FEATURED</CardItemFeatured>
						<CardItemSale>FOR SALE</CardItemSale>
					</CardItemSales>
					<CardProfileImg src={cardProfile} />
					<CardItemTitle>New Apartment Nice Wiew</CardItemTitle>
					<CardItemDescription>
						Quincy St, Brooklyn, NY, USA
					</CardItemDescription>
					<CardIcons>
						<CardIcon>
							<CardIconImg src={cardBed} />
							<CardIconText>4 Beds</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardBath} />
							<CardIconText>5 Baths</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardCar} />
							<CardIconText>1 Garage</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardRuler} />
							<CardIconText>1200 Sq Ft</CardIconText>
						</CardIcon>
					</CardIcons>
					<CardHr />
					<CardItemPriceLike>
						<CardItemPrices>
							<CardItemDiscount>$2,800/mo</CardItemDiscount>
							<CardItemPrice>$7,500/mo</CardItemPrice>
						</CardItemPrices>
						<CardItemResizeLike>
							<CardResizeImg src={cardResize} />
							<CardHeartImg src={cardHeart} />
						</CardItemResizeLike>
					</CardItemPriceLike>
				</CardItem1>
				<CardItem1>
					<CardItemImg src={cardHouse2} />
					<CardItemSales>
						<CardItemFeatured>FEATURED</CardItemFeatured>
						<CardItemSale>FOR SALE</CardItemSale>
					</CardItemSales>
					<CardProfileImg src={cardProfile} />
					<CardItemTitle>New Apartment Nice Wiew</CardItemTitle>
					<CardItemDescription>
						Quincy St, Brooklyn, NY, USA
					</CardItemDescription>
					<CardIcons>
						<CardIcon>
							<CardIconImg src={cardBed} />
							<CardIconText>4 Beds</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardBath} />
							<CardIconText>5 Baths</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardCar} />
							<CardIconText>1 Garage</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardRuler} />
							<CardIconText>1200 Sq Ft</CardIconText>
						</CardIcon>
					</CardIcons>
					<CardHr />
					<CardItemPriceLike>
						<CardItemPrices>
							<CardItemDiscount>$2,800/mo</CardItemDiscount>
							<CardItemPrice>$7,500/mo</CardItemPrice>
						</CardItemPrices>
						<CardItemResizeLike>
							<CardResizeImg src={cardResize} />
							<CardHeartImg src={cardHeart} />
						</CardItemResizeLike>
					</CardItemPriceLike>
				</CardItem1>
				<CardItem1>
					<CardItemImg src={cardHouse1} />
					<CardItemSales>
						<CardItemFeatured>FEATURED</CardItemFeatured>
						<CardItemSale>FOR SALE</CardItemSale>
					</CardItemSales>
					<CardProfileImg src={cardProfile} />
					<CardItemTitle>New Apartment Nice Wiew</CardItemTitle>
					<CardItemDescription>
						Quincy St, Brooklyn, NY, USA
					</CardItemDescription>
					<CardIcons>
						<CardIcon>
							<CardIconImg src={cardBed} />
							<CardIconText>4 Beds</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardBath} />
							<CardIconText>5 Baths</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardCar} />
							<CardIconText>1 Garage</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardRuler} />
							<CardIconText>1200 Sq Ft</CardIconText>
						</CardIcon>
					</CardIcons>
					<CardHr />
					<CardItemPriceLike>
						<CardItemPrices>
							<CardItemDiscount>$2,800/mo</CardItemDiscount>
							<CardItemPrice>$7,500/mo</CardItemPrice>
						</CardItemPrices>
						<CardItemResizeLike>
							<CardResizeImg src={cardResize} />
							<CardHeartImg src={cardHeart} />
						</CardItemResizeLike>
					</CardItemPriceLike>
				</CardItem1>
				<CardItem1>
					<CardItemImg src={cardHouse1} />
					<CardItemSales>
						<CardItemFeatured>FEATURED</CardItemFeatured>
						<CardItemSale>FOR SALE</CardItemSale>
					</CardItemSales>
					<CardProfileImg src={cardProfile} />
					<CardItemTitle>New Apartment Nice Wiew</CardItemTitle>
					<CardItemDescription>
						Quincy St, Brooklyn, NY, USA
					</CardItemDescription>
					<CardIcons>
						<CardIcon>
							<CardIconImg src={cardBed} />
							<CardIconText>4 Beds</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardBath} />
							<CardIconText>5 Baths</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardCar} />
							<CardIconText>1 Garage</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardRuler} />
							<CardIconText>1200 Sq Ft</CardIconText>
						</CardIcon>
					</CardIcons>
					<CardHr />
					<CardItemPriceLike>
						<CardItemPrices>
							<CardItemDiscount>$2,800/mo</CardItemDiscount>
							<CardItemPrice>$7,500/mo</CardItemPrice>
						</CardItemPrices>
						<CardItemResizeLike>
							<CardResizeImg src={cardResize} />
							<CardHeartImg src={cardHeart} />
						</CardItemResizeLike>
					</CardItemPriceLike>
				</CardItem1>
				<CardItem1>
					<CardItemImg src={cardHouse2} />
					<CardItemSales>
						<CardItemFeatured>FEATURED</CardItemFeatured>
						<CardItemSale>FOR SALE</CardItemSale>
					</CardItemSales>
					<CardProfileImg src={cardProfile} />
					<CardItemTitle>New Apartment Nice Wiew</CardItemTitle>
					<CardItemDescription>
						Quincy St, Brooklyn, NY, USA
					</CardItemDescription>
					<CardIcons>
						<CardIcon>
							<CardIconImg src={cardBed} />
							<CardIconText>4 Beds</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardBath} />
							<CardIconText>5 Baths</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardCar} />
							<CardIconText>1 Garage</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardRuler} />
							<CardIconText>1200 Sq Ft</CardIconText>
						</CardIcon>
					</CardIcons>
					<CardHr />
					<CardItemPriceLike>
						<CardItemPrices>
							<CardItemDiscount>$2,800/mo</CardItemDiscount>
							<CardItemPrice>$7,500/mo</CardItemPrice>
						</CardItemPrices>
						<CardItemResizeLike>
							<CardResizeImg src={cardResize} />
							<CardHeartImg src={cardHeart} />
						</CardItemResizeLike>
					</CardItemPriceLike>
				</CardItem1>
				<CardItem1>
					<CardItemImg src={cardHouse1} />
					<CardItemSales>
						<CardItemFeatured>FEATURED</CardItemFeatured>
						<CardItemSale>FOR SALE</CardItemSale>
					</CardItemSales>
					<CardProfileImg src={cardProfile} />
					<CardItemTitle>New Apartment Nice Wiew</CardItemTitle>
					<CardItemDescription>
						Quincy St, Brooklyn, NY, USA
					</CardItemDescription>
					<CardIcons>
						<CardIcon>
							<CardIconImg src={cardBed} />
							<CardIconText>4 Beds</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardBath} />
							<CardIconText>5 Baths</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardCar} />
							<CardIconText>1 Garage</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardRuler} />
							<CardIconText>1200 Sq Ft</CardIconText>
						</CardIcon>
					</CardIcons>
					<CardHr />
					<CardItemPriceLike>
						<CardItemPrices>
							<CardItemDiscount>$2,800/mo</CardItemDiscount>
							<CardItemPrice>$7,500/mo</CardItemPrice>
						</CardItemPrices>
						<CardItemResizeLike>
							<CardResizeImg src={cardResize} />
							<CardHeartImg src={cardHeart} />
						</CardItemResizeLike>
					</CardItemPriceLike>
				</CardItem1>
				<CardItem1>
					<CardItemImg src={cardHouse1} />
					<CardItemSales>
						<CardItemFeatured>FEATURED</CardItemFeatured>
						<CardItemSale>FOR SALE</CardItemSale>
					</CardItemSales>
					<CardProfileImg src={cardProfile} />
					<CardItemTitle>New Apartment Nice Wiew</CardItemTitle>
					<CardItemDescription>
						Quincy St, Brooklyn, NY, USA
					</CardItemDescription>
					<CardIcons>
						<CardIcon>
							<CardIconImg src={cardBed} />
							<CardIconText>4 Beds</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardBath} />
							<CardIconText>5 Baths</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardCar} />
							<CardIconText>1 Garage</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardRuler} />
							<CardIconText>1200 Sq Ft</CardIconText>
						</CardIcon>
					</CardIcons>
					<CardHr />
					<CardItemPriceLike>
						<CardItemPrices>
							<CardItemDiscount>$2,800/mo</CardItemDiscount>
							<CardItemPrice>$7,500/mo</CardItemPrice>
						</CardItemPrices>
						<CardItemResizeLike>
							<CardResizeImg src={cardResize} />
							<CardHeartImg src={cardHeart} />
						</CardItemResizeLike>
					</CardItemPriceLike>
				</CardItem1>
				<CardItem1>
					<CardItemImg src={cardHouse2} />
					<CardItemSales>
						<CardItemFeatured>FEATURED</CardItemFeatured>
						<CardItemSale>FOR SALE</CardItemSale>
					</CardItemSales>
					<CardProfileImg src={cardProfile} />
					<CardItemTitle>New Apartment Nice Wiew</CardItemTitle>
					<CardItemDescription>
						Quincy St, Brooklyn, NY, USA
					</CardItemDescription>
					<CardIcons>
						<CardIcon>
							<CardIconImg src={cardBed} />
							<CardIconText>4 Beds</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardBath} />
							<CardIconText>5 Baths</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardCar} />
							<CardIconText>1 Garage</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardRuler} />
							<CardIconText>1200 Sq Ft</CardIconText>
						</CardIcon>
					</CardIcons>
					<CardHr />
					<CardItemPriceLike>
						<CardItemPrices>
							<CardItemDiscount>$2,800/mo</CardItemDiscount>
							<CardItemPrice>$7,500/mo</CardItemPrice>
						</CardItemPrices>
						<CardItemResizeLike>
							<CardResizeImg src={cardResize} />
							<CardHeartImg src={cardHeart} />
						</CardItemResizeLike>
					</CardItemPriceLike>
				</CardItem1>
				<CardItem1>
					<CardItemImg src={cardHouse1} />
					<CardItemSales>
						<CardItemFeatured>FEATURED</CardItemFeatured>
						<CardItemSale>FOR SALE</CardItemSale>
					</CardItemSales>
					<CardProfileImg src={cardProfile} />
					<CardItemTitle>New Apartment Nice Wiew</CardItemTitle>
					<CardItemDescription>
						Quincy St, Brooklyn, NY, USA
					</CardItemDescription>
					<CardIcons>
						<CardIcon>
							<CardIconImg src={cardBed} />
							<CardIconText>4 Beds</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardBath} />
							<CardIconText>5 Baths</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardCar} />
							<CardIconText>1 Garage</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardRuler} />
							<CardIconText>1200 Sq Ft</CardIconText>
						</CardIcon>
					</CardIcons>
					<CardHr />
					<CardItemPriceLike>
						<CardItemPrices>
							<CardItemDiscount>$2,800/mo</CardItemDiscount>
							<CardItemPrice>$7,500/mo</CardItemPrice>
						</CardItemPrices>
						<CardItemResizeLike>
							<CardResizeImg src={cardResize} />
							<CardHeartImg src={cardHeart} />
						</CardItemResizeLike>
					</CardItemPriceLike>
				</CardItem1>
				<CardItem1>
					<CardItemImg src={cardHouse1} />
					<CardItemSales>
						<CardItemFeatured>FEATURED</CardItemFeatured>
						<CardItemSale>FOR SALE</CardItemSale>
					</CardItemSales>
					<CardProfileImg src={cardProfile} />
					<CardItemTitle>New Apartment Nice Wiew</CardItemTitle>
					<CardItemDescription>
						Quincy St, Brooklyn, NY, USA
					</CardItemDescription>
					<CardIcons>
						<CardIcon>
							<CardIconImg src={cardBed} />
							<CardIconText>4 Beds</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardBath} />
							<CardIconText>5 Baths</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardCar} />
							<CardIconText>1 Garage</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardRuler} />
							<CardIconText>1200 Sq Ft</CardIconText>
						</CardIcon>
					</CardIcons>
					<CardHr />
					<CardItemPriceLike>
						<CardItemPrices>
							<CardItemDiscount>$2,800/mo</CardItemDiscount>
							<CardItemPrice>$7,500/mo</CardItemPrice>
						</CardItemPrices>
						<CardItemResizeLike>
							<CardResizeImg src={cardResize} />
							<CardHeartImg src={cardHeart} />
						</CardItemResizeLike>
					</CardItemPriceLike>
				</CardItem1>
				<CardItem1>
					<CardItemImg src={cardHouse2} />
					<CardItemSales>
						<CardItemFeatured>FEATURED</CardItemFeatured>
						<CardItemSale>FOR SALE</CardItemSale>
					</CardItemSales>
					<CardProfileImg src={cardProfile} />
					<CardItemTitle>New Apartment Nice Wiew</CardItemTitle>
					<CardItemDescription>
						Quincy St, Brooklyn, NY, USA
					</CardItemDescription>
					<CardIcons>
						<CardIcon>
							<CardIconImg src={cardBed} />
							<CardIconText>4 Beds</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardBath} />
							<CardIconText>5 Baths</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardCar} />
							<CardIconText>1 Garage</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardRuler} />
							<CardIconText>1200 Sq Ft</CardIconText>
						</CardIcon>
					</CardIcons>
					<CardHr />
					<CardItemPriceLike>
						<CardItemPrices>
							<CardItemDiscount>$2,800/mo</CardItemDiscount>
							<CardItemPrice>$7,500/mo</CardItemPrice>
						</CardItemPrices>
						<CardItemResizeLike>
							<CardResizeImg src={cardResize} />
							<CardHeartImg src={cardHeart} />
						</CardItemResizeLike>
					</CardItemPriceLike>
				</CardItem1>
				<CardItem1>
					<CardItemImg src={cardHouse1} />
					<CardItemSales>
						<CardItemFeatured>FEATURED</CardItemFeatured>
						<CardItemSale>FOR SALE</CardItemSale>
					</CardItemSales>
					<CardProfileImg src={cardProfile} />
					<CardItemTitle>New Apartment Nice Wiew</CardItemTitle>
					<CardItemDescription>
						Quincy St, Brooklyn, NY, USA
					</CardItemDescription>
					<CardIcons>
						<CardIcon>
							<CardIconImg src={cardBed} />
							<CardIconText>4 Beds</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardBath} />
							<CardIconText>5 Baths</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardCar} />
							<CardIconText>1 Garage</CardIconText>
						</CardIcon>
						<CardIcon>
							<CardIconImg src={cardRuler} />
							<CardIconText>1200 Sq Ft</CardIconText>
						</CardIcon>
					</CardIcons>
					<CardHr />
					<CardItemPriceLike>
						<CardItemPrices>
							<CardItemDiscount>$2,800/mo</CardItemDiscount>
							<CardItemPrice>$7,500/mo</CardItemPrice>
						</CardItemPrices>
						<CardItemResizeLike>
							<CardResizeImg src={cardResize} />
							<CardHeartImg src={cardHeart} />
						</CardItemResizeLike>
					</CardItemPriceLike>
				</CardItem1>
			</CardContainer>
			<CardsBtnShowMore type="button">SHOW MORE</CardsBtnShowMore>
		</ContainerContainer>
	);
};

export default Properties;
