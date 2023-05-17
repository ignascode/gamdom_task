import React from 'react';
import * as S from './Title.styled';
import { TitleProps } from './Title.types';

const Title: React.FC<TitleProps> = (p) => <S.Title>{p.children}</S.Title>;

export default Title;
