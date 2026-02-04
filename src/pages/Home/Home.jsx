import React from 'react';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import PopularRoutes from '../PopularRoutes/PopularRoutes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Choose></Choose>
            <PopularRoutes></PopularRoutes>
        </div>
    );
};

export default Home;