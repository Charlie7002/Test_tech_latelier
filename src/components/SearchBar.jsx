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
	justify-content: center;
	display: flex;
	input {
		background-color: #0000007f;
		border: none;
		border-radius: 0.7rem;
		height: 2.3rem;
		width: 100%;
		max-width: 28rem;
		padding: 0.9rem;
		color: #ffd891;
		font-weight: 600;
		&:focus {
			outline: none;
			border-color: var(--orange);
		}
	}
`;

export default searchBar;
