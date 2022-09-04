import { render } from '@testing-library/react';

import App from './App';

describe('render App', () => {
	test('renders App', () => {
		const div = document.createElement('div');
		render(<App />, div);
	});

	test('render searchBar', () => {
		const component = render(<App />);
		const searchBar = component.getByRole('textbox');
		expect(searchBar).toBeTruthy();
	});

	test('render Card list', () => {
		const component = render(<App />);
		const card = component.findByTestId('cardsList');
		expect(card).toBeTruthy();
	});
});
