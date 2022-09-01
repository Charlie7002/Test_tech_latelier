import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cards from '../components/Cards';
import SearchBar from '../components/SearchBar';
import bg from '../assets/home-bg.jpg';
import Details from './details';

const Home = () => {
	const [players, setPlayers] = useState();
	const [selectedPlayer, setSelectedPlayer] = useState();
	const [filteredPlayers, setFilteredPlayers] = useState();
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);
	const [inputSearch, setInputSearch] = useState('');

	//handle open players details
	const handleOpenCard = id => {
		setIsDetailsOpen(true);
		setSelectedPlayer(players?.find(player => player.id === id));
	};

	//handle close players details
	const handleCloseCard = () => {
		setIsDetailsOpen(false);
	};

	//handles input search
	const handleSearch = e => {
		setInputSearch(e.target.value);
	};

	//filters players data by input search first name or last name
	const searchPlayer = inputSearch => {
		const filteredPlayer = players?.filter(
			player =>
				player.firstname.toLowerCase().includes(inputSearch.toLowerCase()) ||
				player.lastname.toLowerCase().includes(inputSearch.toLowerCase()),
		);

		setFilteredPlayers(filteredPlayer);
	};

	//fetch players data from api
	useEffect(() => {
		fetch('https://data.latelier.co/training/tennis_stats/headtohead.json')
			.then(res => {
				return res.json();
			})
			.then(data => {
				setPlayers(data.players);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	//filters players data by input search
	useEffect(() => {
		searchPlayer(inputSearch);
	}, [inputSearch]);

	return (
		<StyledHome>
			{isDetailsOpen ? (
				<Details handleCloseCard={handleCloseCard} player={selectedPlayer} />
			) : (
				<section>
					<SearchBar inputSearch={inputSearch} handleSearch={handleSearch} />
					<Cards
						players={inputSearch ? filteredPlayers : players}
						handleOpenCard={handleOpenCard}
					/>
				</section>
			)}
		</StyledHome>
	);
};

const StyledHome = styled.main`
	background-image: url(${bg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 100%;
	width: 100%;
	padding: 6% 10% 0;
	position: relative;
	@media (max-width: 900px) {
		display: flex;
		justify-content: center;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2.6rem;
		width: 40%;
		height: 100%;
		@media (max-width: 900px) {
			width: 90%;
		}
	}
`;

export default Home;
