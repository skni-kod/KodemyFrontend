import React from 'react';

export default function Error({ info }: { info?: string }) {
	return <div className="w-full text-center">Błąd wczytywania{info ? `: ${info}` : ''}</div>;
}
