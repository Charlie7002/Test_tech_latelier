import { render, screen } from '@testing-library/react';

import Cards from '../Cards';

test('Cards component should be rendered', () => {
	render(<Cards />);
	const cardsListElement = screen.getByTestId('cardsList');
	expect(cardsListElement).toBeInTheDocument();
});
