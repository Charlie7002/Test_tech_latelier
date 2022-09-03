import Card from './Card';
import styled from 'styled-components';

const Cards = ({ players, handleOpenCard, isLoading }) => {
	return isLoading ? (
		<p>Loading...</p>
	) : (
		<StyledCards data-testid="cardsList">
			{players?.length < 1 && <p className="no_player">Aucun joueur trouvé :(</p>}
			{players?.map(player => (
				<Card key={player.id} player={player} handleOpenCard={handleOpenCard} />
			))}
		</StyledCards>
	);
};
const StyledCards = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem 0;
	justify-content: flex-start;
	align-items: flex-start;
	height: 95%;
	width: 100%;
	margin-bottom: 1rem;

	.no_player {
		color: white;
	}
`;
export default Cards;
