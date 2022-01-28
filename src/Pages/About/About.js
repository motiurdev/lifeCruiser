import React from 'react';
import travelImage from '../../images/travel-about.png'

const About = () => {
    return (
        <div className='py-5'>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-7">
                        <h3 className='py-2'>About Us</h3>
                        <p className='text-secondary'>Life Cruiser is a full-service Outbound Tour Operator in Bangladesh. The founder of Life Cruiser is a 100% tourism professional with knowledge of most of the destinations and services in the world for people to enjoy. Our specialized departments with expertise offer a variety of services. Each department works independently to provide the best services to our customers& clients and become the best travel agency in Bangladesh, focusing on creating friendship and a long-lasting relationship with our beloved clients. In the year 2013, we decided to create a tour company by the name Life Cruiser to specialize in the receptive tourism market and to achieve the title of the best tours and travel company in Bangladesh. In this regard, we have contracts and alliances with most of the hotels, tourist organizations & companies in most of the countries around the world that help us provide the best quality service to our clients. Therefore, we investigate every single detail of your trip, to ensure each sector has all the ingredients to satisfy our clients and help us become the best tour operator in Bangladesh. We can proudly talk of the following achievements:</p>
                    </div>
                    <div class="col-12 col-md-5">
                        <img src={travelImage} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;