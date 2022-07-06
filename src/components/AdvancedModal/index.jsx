import React from "react";
import {
	ModalAddressContainer,
	ModalAddressInput,
	ModalContainer,
	ModalInfoContainer,
	ModalInfoInput,
	ModalPriceContainer,
	ModalTitles,
	ModalPriceInput,
	ModalButtonContainer,
	ModalCancelButton,
	ModalSubmitButton,
} from "./style";

function AdvancedModal({ closeModal }) {
	return (
		<div>
			<ModalContainer>
				<ModalTitles>Address</ModalTitles>
				<ModalAddressContainer>
					<ModalAddressInput firstML placeholder="Country" />
					<ModalAddressInput placeholder="Region" />
					<ModalAddressInput placeholder="City" />
					<ModalAddressInput placeholder="Zip code" />
				</ModalAddressContainer>
				<ModalTitles>Apartment info</ModalTitles>
				<ModalInfoContainer>
					<ModalInfoInput firstML placeholder="Rooms" />
					<ModalInfoInput placeholder="Size" />
					<ModalInfoInput placeholder="Sort" />
				</ModalInfoContainer>
				<ModalTitles>Price</ModalTitles>
				<ModalPriceContainer>
					<ModalPriceInput firstML placeholder="Min price" />
					<ModalPriceInput placeholder="Max price" />
				</ModalPriceContainer>
				<ModalButtonContainer>
					<ModalCancelButton onClick={() => closeModal(false)}>
						Cancel
					</ModalCancelButton>
					<ModalSubmitButton type="submit">Submit</ModalSubmitButton>
				</ModalButtonContainer>
			</ModalContainer>
		</div>
	);
}

export default AdvancedModal;
