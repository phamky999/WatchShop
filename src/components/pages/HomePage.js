import React from 'react';
import Slider from './homepage/Slider';
import './HomePage.css';
import AboutFeature from './homepage/AboutFeature';
import HomeProducts from './homepage/HomeProducts';
import HomeBanner from './homepage/HomeBanner';
import HomeTestimonial from './homepage/HomeTestimonial';
import SingleProduct from './homepage/SingleProduct';
import { HomeAbout,HomeNewLetter,HomeBlogs,HomeService } from './homepage/HomeAllOther';


export default function HomePage() {
    return (
        <React.Fragment>
            <Slider />
            <AboutFeature />
            <HomeProducts />
            <HomeBanner />
            <HomeTestimonial />
            <SingleProduct />
            <HomeAbout />
            <HomeNewLetter />
            <HomeBlogs />
            <HomeService />
        </React.Fragment>
    )
}
