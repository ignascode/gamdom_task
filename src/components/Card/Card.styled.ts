import styled from 'styled-components';

export const Card = styled('div')`
	flex-basis: calc(20% - 16px); /* 33% minus the margin */
	margin-right: 16px;
	margin-bottom: 16px;
	border-radius: 25px;
	box-sizing: border-box;
	border: 1px solid #e0e0e0;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
	overflow: hidden;

	&:hover {
		cursor: pointer;
		box-shadow: 0px 2px 4px rgba(0, 0, 1, 0.5);
	}
`;

export const Img = styled('img')`
	height: 350px;
	width: 100%;
	object-fit: fill; /* preserve the aspect ratio and quality of the image */
	display: block;
`;

export const Info = styled('div')`
	padding: 16px;
	display: flex;
	flex-direction: column;
`;

export const Title = styled('span')`
	font-weight: 600;
	margin-bottom: 8px;
`;

export const Type = styled('span')`
	font-size: 14px;
	text-transform: capitalize;
`;

export const TitleAndYear = styled('div')`
	display: flex;
	justify-content: space-between;
`;

export const Year = styled('span')`
	font-size: 14px;
`;
