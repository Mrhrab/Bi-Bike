import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation'
import Banner from '../Banner/Banner';
import QnA from '../QnA/QnA';
import AddReview from '../Review/AddReview/AddReview';
import DisplayReview from '../Review/DisplayReview/DisplayReview';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <QnA></QnA>
            <DisplayReview></DisplayReview>
            <AddReview></AddReview>
        </div>
    );
};

export default Home;