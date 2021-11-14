import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation'
import Banner from '../Banner/Banner';
import AddReview from '../Review/AddReview/AddReview';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>

            <AddReview></AddReview>
        </div>
    );
};

export default Home;