import { render, screen } from '@testing-library/react';

import StatItem from '../StatItem';

test('StatItem component should be rendered', () => {
	render(<StatItem />);
	const statItemElement = screen.getByTestId('statItem');
	expect(statItemElement).toBeInTheDocument();
});
