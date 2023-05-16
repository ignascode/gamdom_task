import React from 'react';
import * as S from './Card.styled';
import { observer } from 'mobx-react-lite';
import { CardProps } from './Card.typed';

const Card: React.FC<CardProps> = observer((p) => {
	return (
		<S.Card onClick={p.onClick}>
			<S.Img src={p.Poster} />
			<S.Info>
				<S.TitleAndYear>
					<S.Title>{p.Title}</S.Title>
					<S.Year>{p.Year}</S.Year>
				</S.TitleAndYear>

				<S.Type>{p.Type}</S.Type>
			</S.Info>
		</S.Card>
	);
});

export default Card;
