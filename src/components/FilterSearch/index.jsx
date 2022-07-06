import React, { useState } from "react";
import statusIcon from "../../assets/icon/statusIcon.svg";
import priceIcon from "../../assets/icon/priceIcon.svg";
import advancedIcon from "../../assets/icon/advancedIcon.svg";
import searchIcon from "../../assets/icon/searchIcon.svg";

import {
	Container,
	FilterSearchContainer,
	FilterSearchInput,
	FilterSearchButtons,
	FilterButtonImg,
	FilterSearchButtonsSearch,
} from "./style";
import AdvancedModal from "../AdvancedModal";

const FilterSearchButton = () => {
	const [openModal, setOpenModal] = useState(false);

	const openModalBtn = () => {
		setOpenModal({ openModal: !openModal });
	};

	return (
		<Container>
			<FilterSearchContainer>
				<FilterSearchInput placeholder="Enter an address, neighborhood, city, or ZIP code" />
				<FilterSearchButtons>
					<FilterButtonImg
						src={statusIcon}
						alt="Status Icon"
						width={"20px"}
						height={"20px"}
					/>
					Status
				</FilterSearchButtons>
				<FilterSearchButtons>
					<FilterButtonImg
						src={priceIcon}
						alt="Status Icon"
						width={"20px"}
						height={"20px"}
					/>
					Price
				</FilterSearchButtons>
				<FilterSearchButtons onClick={openModalBtn}>
					<FilterButtonImg
						src={advancedIcon}
						alt="Status Icon"
						width={"20px"}
						height={"20px"}
					/>
					Advanced
				</FilterSearchButtons>
				<FilterSearchButtonsSearch>
					<FilterButtonImg
						src={searchIcon}
						alt="Status Icon"
						width={"20px"}
						height={"20px"}
					/>
					Search
				</FilterSearchButtonsSearch>
			</FilterSearchContainer>
			{openModal && <AdvancedModal closeModal={setOpenModal} />}
		</Container>
	);
};

export default FilterSearchButton;
