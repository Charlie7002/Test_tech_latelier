import styled from 'styled-components';

const searchBar = ({ handleSearch, inputSearch }) => {
	return (
		<StyledSearchBar>
			<input
				type="text"
				placeholder="Rechercher un joueur"
				value={inputSearch}
				onChange={handleSearch}
			/>
		</StyledSearchBar>
	);
};

const StyledSearchBar = styled.div`
	justify-content: flex-start;
	display: flex;
	width: 100%;
	@media (max-width: 900px) {
		width: 100%;
		justify-content: center;
	}
	input {
		background-color: #0000007f;
		border: none;
		border-radius: 0.7rem;
		height: 1.4rem;
		width: 100%;
		padding: 0.9rem;
		color: #ffd891;
		letter-spacing: 0.1rem;
		font-weight: 600;
		font-family: 'Montserrat', sans-serif;
		&:focus {
			outline: none;
			border-color: var(--orange);
		}
	}
`;

export default searchBar;
