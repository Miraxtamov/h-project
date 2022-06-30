import styled from "styled-components";

export const GenericContainer = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

GenericContainer.Title = styled(GenericContainer)`
  font-weight: 600;
  margin-left: 10px;
`