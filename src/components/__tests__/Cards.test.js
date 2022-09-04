import { render, screen } from '@testing-library/react';

import Cards from '../Cards';

const player = {
	id: 52,
	firstname: 'Novak',
	lastname: 'Djokovic',
	shortname: 'N.DJO',
	sex: 'M',
	country: {
		picture: 'https://data.latelier.co/training/tennis_stats/resources/Serbie.png',
		code: 'SRB',
	},
	picture: 'https://data.latelier.co/training/tennis_stats/resources/Djokovic.png',
	data: {
		rank: 2,
		points: 2542,
		weight: 80000,
		height: 188,
		age: 31,
		last: [1, 1, 1, 1, 1],
	},
};

describe('render Cards', () => {
	test('Cards component should be rendered', () => {
		render(<Cards />);
		const cardsListElement = screen.getByTestId('cardsList');
		expect(cardsListElement).toBeInTheDocument();
	});

	test('render width player', async () => {
		render(<Cards players={[player]} />);
		const articlesElement = await screen.findAllByRole('article');
		expect(articlesElement).toHaveLength(1);
	});

	test('render without player', async () => {
		const component = render(<Cards players={[]} />);
		const noPlayer = await component.findByText('Aucun joueur', { exact: false });
		expect(noPlayer).toBeInTheDocument();
	});
});
