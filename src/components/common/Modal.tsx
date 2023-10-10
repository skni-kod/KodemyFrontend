import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = { className?: string; children: React.ReactNode };

const Modal = ({ className, children }: ModalProps) => {
	const mRoot = document.getElementById('mroot');
	const mNode = document.createElement('div');

	useEffect(() => {
		mRoot?.appendChild(mNode);
		return () => {
			mRoot?.removeChild(mNode);
		};
	}, [mNode, mRoot]);

	return ReactDOM.createPortal(
		<div
			className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full h-full z-40 ${className}`}
		>
			{children}
		</div>,
		mNode,
	);
};

export default Modal;
