import React from 'react';
import Banner from '../../../ui/banner/Banner';
import Footer from '../../../ui/footer/Footer';
import HomeBlog from '../components/homeBlog/HomeBlog';
import HomeContact from '../components/homeContact/HomeContact';
import HomeHero from '../components/homeHero/HomeHero';
import HomeTeams from '../components/homeTeams/HomeTeams';
import HomeTestimonials from '../components/homeTestimonials/HomeTestimonials';
import HomeTransporting from '../components/homeTransporting/HomeTransporting';
import HomeWhat from '../components/homeWhat/HomeWhat';
import HomeWhyChoose from '../components/homeWhyChoose/HomeWhyChoose';
import HomeWhyUs from '../components/homeWhyUs/HomeWhyUs';

export default function Home() {
  return (
    <div>
      <Banner />
      <HomeHero />
      <HomeWhat />
      <HomeWhyUs />
      <HomeTransporting />
      <HomeTestimonials />
      <HomeWhyChoose />
      <HomeTeams />
      <HomeContact />
      <HomeBlog />
      <Footer />
    </div>
  );
}
