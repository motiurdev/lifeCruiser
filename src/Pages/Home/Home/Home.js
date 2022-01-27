import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Gallary from '../Gallary/Gallary';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Blogs></Blogs>
            <Gallary></Gallary>
            <Footer></Footer>
        </div>
    );
};

export default Home;