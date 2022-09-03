import styled from 'styled-components';

const StatItem = ({ title, stat }) => {
	return (
		<StyledStatItem data-testid="statItem">
			<span className="title">{title}</span>
			<span className="stat">{stat}</span>
		</StyledStatItem>
	);
};

const StyledStatItem = styled.div`
	display: flex;
	min-width: 4rem;
	flex-direction: column;
	align-items: flex-start;
	height: 2.5rem;
	max-width: 7rem;
	justify-content: space-around;
`;

export default StatItem;
