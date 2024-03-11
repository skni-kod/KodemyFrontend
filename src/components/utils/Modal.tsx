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
		<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full h-full z-40">
			<div
				className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-bg rounded-md ${className}`}
			>
				<div className="w-full flex justify-end">
					<button
						className="font-semibold text-primary hover:overlay2primary aspect-square"
						onClick={onClose}
					>
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
