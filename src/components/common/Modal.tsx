import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

type ModalProps = { className?: string; children: React.ReactNode; onClose: () => void };

const Modal = ({ className, children, onClose }: ModalProps) => {
	const mRoot = document.getElementById('m-root');
	const mNode = document.createElement('div');

	useEffect(() => {
		mRoot?.appendChild(mNode);
		return () => {
			mRoot?.removeChild(mNode);
		};
	}, [mNode, mRoot]);

	return ReactDOM.createPortal(
		<div className="fixed inset-0 z-40 flex h-full w-full items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
			<div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-bg p-5 ${className}`}>
				<div className="flex w-full justify-end">
					<button className="aspect-square font-semibold text-primary" onClick={onClose}>
						<AiOutlineClose height={100} width={100} />
					</button>
				</div>
				<div className="w-full px-6 pb-6 pt-0.5">{children}</div>
			</div>
		</div>,
		mNode,
	);
};

export default Modal;
