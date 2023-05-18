import React from 'react';
import * as S from './Loader.styled';

const Loader: React.FC<{ loading: boolean }> = (p) => (
	<S.Loader $loading={p.loading} />
);

export default Loader;
