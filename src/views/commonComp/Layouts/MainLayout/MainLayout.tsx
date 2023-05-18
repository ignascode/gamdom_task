import React from 'react';
import { MainLayoutProps } from './MainLayout.types';
import * as S from './MainLayout.styled';

const MainLayout: React.FC<MainLayoutProps> = (p) => (
	<S.Container>{p.children}</S.Container>
);

export default MainLayout;
