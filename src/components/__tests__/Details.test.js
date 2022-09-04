import { render, screen } from '@testing-library/react';

import Details from '../Details';

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
describe('render Details', () => {
	test('Details component should be rendered', () => {
		render(<Details player={player} />);
		const DetailsElement = screen.getByTestId('detail');
		expect(DetailsElement).toBeInTheDocument();
		expect(DetailsElement).toHaveTextContent('Djokovic');
	});
	test('Closebtn should be rendered', () => {
		render(<Details player={player} />);
		const closeBtn = screen.getByTestId('closeBtn');
		expect(closeBtn).toBeInTheDocument();
	});
	test('overlay should be rendered', () => {
		render(<Details player={player} />);
		const overlay = screen.getByTestId('overlay');
		expect(overlay).toBeInTheDocument();
	});
});
