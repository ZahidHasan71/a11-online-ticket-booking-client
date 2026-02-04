import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div>
            <Link to="/" className="text-xl flex items-center gap-2">
                <span className="text-2xl">🚌</span>
                TicketBari
            </Link>
        </div>
    );
};

export default Logo;