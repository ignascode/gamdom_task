import React from 'react';
import { HeaderProps } from './Header.types';
import Title from './Title/Title';
import Subtitle from './Subtitle/Subtitle';
import * as S from './Header.styled';

const Header: React.FC<HeaderProps> = (p) => {
	return (
		<S.Container>
			<Title>{p.title}</Title>
			{p.subtitle && <Subtitle>{p.subtitle}</Subtitle>}
		</S.Container>
	);
};

export default Header;
