import React from 'react';
import Container from '@/components/layout/Container';

export default function Error({ info, container = false }: { info?: string; container?: boolean }) {
	const error = <div className="w-full text-center">Błąd wczytywania{info ? `: ${info}` : ''}</div>;

	return container ? <Container>{error}</Container> : error;
}
