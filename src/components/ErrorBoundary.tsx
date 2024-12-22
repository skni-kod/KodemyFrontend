import React from 'react';

import ComponentParentProps from '@/utils/types/node/componentParentProps';

interface ErrorBoundaryProps extends ComponentParentProps {
	fallback: React.ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		// Define a state variable to track whether is an error or not
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(): ErrorBoundaryState {
		// Update state so the next render will show the fallback UI
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		// You can use your own error logging service here
		console.error('Error caught in ErrorBoundary:', error, errorInfo);
	}
	render() {
		// Check if the error is thrown
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return this.props.fallback;
		}

		// Return children components in case of no error
		return this.props.children;
	}
}

export default ErrorBoundary;
