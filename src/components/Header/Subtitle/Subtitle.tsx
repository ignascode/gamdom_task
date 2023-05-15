import React from 'react';
import * as S from './Subtitle.styled';
import { SubtitleProps } from './Subtitle.typed';

const Subtitle: React.FC<SubtitleProps> = (p) => (
	<S.Subtitle>{p.children}</S.Subtitle>
);

export default Subtitle;
