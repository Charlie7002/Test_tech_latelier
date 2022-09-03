import styled from 'styled-components';

const card = ({ player, handleOpenCard }) => {
	return (
		<StyledCard onClick={() => handleOpenCard(player.id)} data-testid="cardItem">
			<div className="card_image">
				<img src={player?.picture} alt={player?.firstname} />
			</div>

			<div className="card_content">
				<h3>
					{player?.firstname} {player?.lastname}
				</h3>
				<div className="card_content_stat">
					<div className="card_content_stat--item">
						<span className="card_content_stat--title">rank</span>
						<span className="card_content_stat--detail">#{player?.data?.rank}</span>
					</div>
					<div className="card_content_stat--item">
						<span className="card_content_stat--title">points</span>
						<span className="card_content_stat--detail">{player?.data?.points}</span>
					</div>
					<div className="card_content_stat--item">
						<span className="card_content_stat--title">country</span>
						<span className="card_content_stat--detail">{player?.country?.code}</span>
					</div>
				</div>
			</div>
		</StyledCard>
	);
};

const StyledCard = styled.article`
	height: 8.4rem;
	width: 100%;
	background-color: white;
	display: flex;
	position: relative;
	overflow: hidden;
	box-shadow: var(--shadow-light);
	.card_image {
		height: auto;
		min-height: 100%;
		width: 15%;
		position: absolute;
		top: 65%;
		left: 11%;
		img {
			object-fit: contain;
			height: 100%;
			width: 100%;
			transform: scale(2.9) translateY(5%);
		}
	}
	.card_content {
		height: 100%;
		width: 100%;
		gap: 17%;
		margin-left: 38%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 0.65rem;
		h3 {
			color: var(--orange);
			font-size: 1rem;
		}
		&_stat {
			display: flex;
		}
		&_stat--item {
			display: flex;
			width: 100%;
			flex-direction: column;
			align-items: flex-start;
			height: 1.8rem;
			justify-content: space-around;
		}
		&_stat--title {
			text-transform: uppercase;
			color: var(--black30);
			font-size: 0.65rem;
			font-weight: 600;
			letter-spacing: 1px;
		}
		&_stat--detail {
			color: var(--orange);
			font-weight: 700;
		}
	}
	a {
		width: 100%;
	}
`;

export default card;
