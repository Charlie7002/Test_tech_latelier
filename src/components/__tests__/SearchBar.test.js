import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../SearchBar';

describe('render SearchBar', () => {
	test('SearchBar component should be rendered', () => {
		render(<SearchBar />);
		const searchInput = screen.getByPlaceholderText('Rechercher un joueur');
		expect(searchInput).toBeInTheDocument();
	});

	test('Search input should change', async () => {
		render(<SearchBar />);
		const searchInput = screen.getByPlaceholderText('Rechercher un joueur');
		const testValue = 'novak';
		userEvent.type(searchInput, testValue);
		expect(searchInput).toHaveValue(testValue);
	});
});
