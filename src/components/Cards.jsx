import Card from './Card';
import styled from 'styled-components';

const Cards = ({ players, handleOpenCard }) => {
	return (
		<StyledCards>
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
	gap: 3%;
	justify-content: flex-start;
	align-items: center;
	height: 95%;
	.no_player {
		color: white;
	}
`;
export default Cards;
