import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import Details from './components/Details';
import bg from './assets/home-bg.jpg';

const App = () => {
	const [players, setPlayers] = useState();
	const [selectedPlayer, setSelectedPlayer] = useState();
	const [filteredPlayers, setFilteredPlayers] = useState();
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);
	const [inputSearch, setInputSearch] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	//handle open players details
	const handleOpenCard = id => {
		setIsDetailsOpen(true);
		setSelectedPlayer(players?.find(player => player.id === id));
		setInputSearch('');
		searchPlayer('');
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
		const fetchData = async () => {
			setIsLoading(true);
			const res = await fetch('https://data.latelier.co/training/tennis_stats/headtohead.json');
			const { players } = await res.json();
			setPlayers(players);
			setIsLoading(false);
		};
		fetchData();
	}, []);

	//set filtered players data
	useEffect(() => {
		searchPlayer(inputSearch);
	}, [inputSearch]);

	return (
		<StyledApp data-testid="main">
			{isDetailsOpen ? (
				<Details handleCloseCard={handleCloseCard} player={selectedPlayer} />
			) : (
				<section>
					<SearchBar inputSearch={inputSearch} handleSearch={handleSearch} />
					<Cards
						players={inputSearch ? filteredPlayers : players}
						handleOpenCard={handleOpenCard}
						isLoading={isLoading}
					/>
				</section>
			)}
		</StyledApp>
	);
};

const StyledApp = styled.main`
	width: 100%;
	height: 100%;
	@media (max-width: 900px) {
		display: flex;
		justify-content: center;
		padding: 0;
		margin: auto;
	}
	section {
		display: flex;
		flex-direction: column;
		gap: 2.6rem 0;
		width: 28rem;
		height: 100%;
		padding-top: 1.5rem;
		padding-left: 10%;
		@media (max-width: 900px) {
			max-width: 35rem;
			align-items: center;
			margin: 2rem;
			padding-left: 0;
		}
	}
`;

export default App;
