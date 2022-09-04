import styled from 'styled-components';
import StatItem from '../components/StatItem';

const Details = ({ handleCloseCard, player }) => {
	return (
		<StyledDetails data-testid="detail">
			<div className="detail-container">
				<div className="detail-close" onClick={handleCloseCard}>
					<span data-testid="closeBtn">X</span>
				</div>

				<div className="detail-top">
					<div className="detail-top--name">
						<h4 className="detail-top--name_firstname">{player.firstname}</h4>
						<h4 className="detail-top--name_lastname">{player.lastname}</h4>
					</div>
					<div className="detail-top--country">
						<img src={player.country.picture} alt={player.country.code} className="detail-top--country_flag" />
						<h6 className="detail-top--country_code">{player.country.code}</h6>
					</div>
				</div>
				<div className="detail-bottom">
					<div className="detail-image">
						<img src={player.picture} alt={player.firstname} />
					</div>
					<div className="detail-bottom--stat">
						<StatItem title="rank" stat={`#${player?.data?.points}`} />
						<StatItem title="birthday" stat="22/10/1985" />
						<StatItem title="weight" stat={`${player?.data?.weight} kg`} />
						<StatItem title="points" stat={player?.data?.points} />
						<StatItem title="age" stat={player?.data?.age} />
						<StatItem title="height" stat={`${player?.data?.height} cm`} />
						<StatItem title="country" stat={player?.country?.code} />
					</div>
					<div className="detail-bottom--carrer">
						<div>
							<div className="title">carrer titles</div>

							<p className="detail-bottom--carrer_title">
								<span className="stat">2021</span> - 5
							</p>
							<div className="detail-bottom--carrer_content">
								<p>ATP Master 1000 Paris (Indoor/Grass)</p>
								<p>Wimbledon (Outdoor/Grass)</p>
								<p>US Open (Indoor/Outdoor)</p>
								<p>Australian Open (Indoor/Outdoor)</p>
								<p>Wimbledon (Outdoor/Grass) </p>
							</div>
							<p className="detail-bottom--carrer_title">
								<span className="stat">2021</span> - 5
							</p>
							<div className="detail-bottom--carrer_content">
								<p>ATP Master 1000 Paris (Indoor/Outdoor)</p>
								<p>Wimbledon (Outdoor/Grass)</p>
								<p>US Open (Indoor/Outdoor)</p>
								<p>Australian Open (Indoor/Outdoor)</p>
								<p>Wimbledon (Outdoor/Grass) </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StyledDetails>
	);
};

const StyledDetails = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: flex-end;
	background-color: #0000008f;
	position: fixed;
	.detail-container {
		z-index: 2;
		background: white;
		flex: 1;
		height: 80%;
		display: flex;
		flex-direction: column;
		position: relative;
		max-width: 1000px;
		@media (max-width: 700px) {
		}
	}
	.detail-close {
		position: absolute;
		top: -24%;
		left: 49%;
		padding: 2rem;
		span {
			font-size: 3rem;
			color: white;
		}
		@media (max-width: 910px) {
			top: -15%;
			left: 38%;
		}
	}
	.detail-image {
		position: absolute;
		bottom: 0;
		left: -13%;
		height: 550px;
		max-width: 350px;
		overflow-y: hidden;
		padding: 2rem 2rem 0;
		@media (max-width: 700px) {
			max-height: 400px;
			width: auto;
			left: auto;
			top: -2%;
			left: 50%;
			padding: 0;
		}
		@media (max-width: 490px) {
			max-height: 280px;
			width: auto;
			left: auto;
			top: -2%;
			left: 50%;
			padding: 0;
		}
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
			filter: drop-shadow(5px 2px 26px rgba(0, 0, 0, 0.45));
			@media (max-width: 700px) {
				filter: none;
			}
		}
	}

	.detail-top {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 5%;
	}
	.detail-top--name {
		color: var(--orange);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		width: 70%;
		padding-left: 16%;
		&_firstname {
			font-size: 3.8rem;
			color: white;
			@media (max-width: 700px) {
				font-size: 1.5rem;
			}
			text-shadow: 2px 2px 0 var(--orange), 2px -2px 0 var(--orange), -2px 2px 0 var(--orange), -2px -2px 0 var(--orange), 2px 0px 0 var(--orange), 0px 2px 0 var(--orange), -2px 0px 0 var(--orange), 0px -2px 0 var(--orange);
		}
		&_lastname {
			font-size: 5rem;
			font-weight: 800;
			@media (max-width: 700px) {
				font-size: 1.7rem;
			}
		}
	}
	.detail-top--country {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		flex-direction: column;
		width: 100%;
		margin-right: 5%;
		img {
			width: 7rem;
			box-shadow: var(--shadow-light);
			@media (max-width: 800px) {
				width: 4rem;
			}
		}
		&_code {
			font-size: 2.5rem;
			font-weight: 300;
			color: var(--black30);
			letter-spacing: 0.2rem;
			@media (max-width: 800px) {
				display: none;
			}
		}
	}
	.detail-bottom {
		display: flex;
		position: relative;
		height: 100%;
		@media (max-width: 700px) {
			margin-top: 5%;
			flex-direction: column;
			width: 100%;
			align-items: flex-start;
			margin-left: 5%;
		}
	}
	.detail-bottom--stat {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		flex: 1;
		gap: 21% 0;
		justify-content: flex-start;
		align-items: flex-start;
		margin-left: 27%;
		margin-top: 5%;
		max-width: 50%;
		max-height: 75%;
		@media (max-width: 1300px) {
			gap: 15% 0;
			margin-left: 34%;
		}
		@media (max-width: 700px) {
			flex-wrap: nowrap;
			gap: 0;
			align-items: center;
			margin-left: 3%;
			margin-top: 0;
			max-height: 18rem;
		}
	}
	.detail-bottom--carrer {
		color: var(--orange-light);
		font-size: 0.7rem;
		font-weight: 600;
		margin-top: 5%;
		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
		&_title {
			padding-top: 1rem;
		}
		&_content {
			font-size: 0.6rem;
			line-height: 1.4;
		}
	}
`;

export default Details;
