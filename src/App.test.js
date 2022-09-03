import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => {
	cleanup();
});

describe('App render', () => {
	test('renders App without crash', () => {
		const div = document.createElement('div');
		render(<App />, div);
	});
	test('renders input search typing', () => {
		render(<App />);
		const inputElement = screen.getByRole('textbox');
		expect(inputElement).toBeInTheDocument();
	});
	test('renders cards', async () => {
		render(<App />);
		const articlesElement = await screen.findAllByRole('article');
		expect(articlesElement).not.toHaveLength(0);
	});

	// test('search player', async () => {
	// 	render(<App />);

	// 	const searchInput = screen.getByRole('textbox');
	// 	await userEvent.type(searchInput, 'novak');

	// 	const card = await screen.findByText('djokovic', { exact: false });

	// 	await expect(card).toBeInTheDocument();
	// });
});
