import React from 'react';
import { useNavigate } from 'react-router';


const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#141A1F] text-[#DBE8F2] px-4">
            <div className="text-7xl font-bold mb-4">404</div>
            <div className="text-2xl mb-2 font-semibold">Page Not Found</div>
            <div className="mb-6 text-[#9EADBF] text-center max-w-md">
                Sorry, the page you are looking for does not exist or has been moved.
            </div>
            <button
                onClick={() => navigate('/')}
                className="px-6 py-2 rounded bg-[#2B3640] text-[#DBE8F2] hover:bg-[#9EADBF] hover:text-[#141A1F] font-semibold transition-colors"
            >
                Go to Home
            </button>
        </div>
    );
};

export default ErrorPage; 