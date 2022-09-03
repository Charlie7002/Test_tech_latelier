import { render, screen } from '@testing-library/react';

import Card from '../Card';

test('Card component should be rendered', () => {
	render(<Card />);
	const cardItemElement = screen.getByTestId('cardItem');
	expect(cardItemElement).toBeInTheDocument();
});
