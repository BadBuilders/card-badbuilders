import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#1b1b1f] text-gray-900 dark:text-gray-100">
          <div className="text-center p-8 max-w-md">
            <h1 className="text-2xl font-bold mb-4">Oops, something went wrong.</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We've encountered an unexpected error. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-indigo-600 dark:bg-indigo-400 text-white dark:text-black font-medium px-6 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
