import "./AboutUsStyles.css";
import TripData from "./TripData";
function AboutUs() {
  return (
    <div className="about-container">
      <h1>Our services</h1>
      <p>
        Discover Tailored Adventures: Voyagio crafts unforgettable travel
        experiences, personalized to your dream destinations.
      </p>
      <h1>Our Mission</h1>
      <p>
        At Voyagio, our mission is to connect wanderlust with wonder by curating
        transformative travel experiences that enrich lives and ignite a passion
        for exploration.
      </p>
      <h1>Our Vision</h1>
      <p>
        Our vision at Voyagio is to become the compass for wanderers, guiding
        them towards extraordinary destinations and fostering a global community
        of responsible and curious travelers.
      </p>
      <h1 className="center-heading">Why Choose Us ?</h1>
      <div className="tripcard">
        <TripData
          image="https://plus.unsplash.com/premium_photo-1680677525156-9be8c358da33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          heading="Happy Customers"
          text="
       
Customer satisfaction is at the heart of our travel philosophy. We are dedicated to ensuring that every journey you embark upon through our platform not only meets but exceeds your expectations."
        />
        <TripData
          image="https://images.unsplash.com/photo-1483450388369-9ed95738483c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          heading="Best Prices"
          text="Discover the best prices for your dream destinations with us. Our relentless dedication to securing competitive rates means you can explore the world without breaking the bank."
        />
        <TripData
          image="https://images.unsplash.com/photo-1523225918988-00624e6d8fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80"
          heading="Well Planned Trips"
          text="
          Our meticulously planned trips are designed to be your passport to stress-free and memorable adventures. From curated itineraries to seamless logistics, we take care of every detail, allowing you to savor each moment."
        />
      </div>
    </div>
  );
}
export default AboutUs;
