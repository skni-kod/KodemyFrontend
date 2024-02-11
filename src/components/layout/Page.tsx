import React from 'react';

export default function Page({ children }: { children: React.ReactNode }) {
	return <div className="w-full max-w-lg p-4 m-auto">{children}</div>;
}
