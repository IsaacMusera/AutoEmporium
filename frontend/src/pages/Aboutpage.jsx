// <<<<<<< HEAD
// import React from 'react';
// import ReactDom from 'react-dom';

// const AboutPage = () => {
//   return (
//     <div
//       style={{
//         backgroundImage: `url(https://t3.ftcdn.net/jpg/06/62/22/08/360_F_662220833_OSKqMuAJlNIhU5nxb0OoiztbaYe9fbBx.jpg')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: '24px',
//         color: 'white',
//       }}
//     >
//       <h1>Welcome to AutoEmporium!</h1>
//       <p>
//         At AutoEmporium, we believe that finding your dream car should be an exciting and enjoyable experience. As a leading automotive dealership, we specialize in offering a wide range of high-quality vehicles, exceptional customer service, and a commitment to excellence that sets us apart from the competition.
//       </p>
//       <h2>Our Story</h2>
//       <p>
//         Founded in 2024, AutoEmporium started with a simple vision: to provide an unparalleled car-buying experience for our customers. Our founders, Isaac Musera and Winnie Jepchumba, had a passion for cars and a dedication to customer satisfaction that laid the foundation for our dealership. Over the years, we have grown and evolved, continually expanding our inventory and services to meet the diverse needs of our customers.
//       </p>
//       <h2>Our Mission</h2>
//       <p>
//         Our mission at AutoEmporium is to connect you with the perfect vehicle that fits your lifestyle, budget, and preferences. We strive to make the car-buying process seamless and stress-free by offering:
//       </p>
//       <ul>
//         <li>Extensive Inventory: Whether you're looking for a brand-new car, a certified pre-owned vehicle, or a budget-friendly used car, we have a wide selection to choose from. Our inventory includes top brands and the latest models, ensuring you find the car that meets your exact requirements.</li>
//         <li>Transparent Pricing: We believe in honesty and transparency. Our pricing is straightforward, with no hidden fees or surprises. We provide detailed information about each vehicle, including its history, features, and pricing, so you can make an informed decision.</li>
//         <li>Exceptional Customer Service: Our team of knowledgeable and friendly sales professionals is here to assist you every step of the way. From the moment you walk into our dealership to the moment you drive away in your new car, we are dedicated to providing a personalized and hassle-free experience.</li>
//         <li>Financing Options: We understand that financing is a crucial part of the car-buying process. Our finance experts work with a variety of lenders to offer competitive rates and flexible terms. We are committed to helping you secure the best financing solution for your needs.</li>
//         <li>After-Sales Support: Our relationship with our customers doesn't end once you drive off the lot. We offer comprehensive after-sales services, including maintenance, repairs, and parts, to keep your vehicle running smoothly for years to come. Our state-of-the-art service center is staffed with certified technicians who are experts in their field.</li>
//       </ul>
//       <h2>Our Values</h2>
//       <p>
//         At AutoEmporium, we are guided by core values that shape everything we do:
//       </p>
//       <ul>
//         <li>Integrity: We conduct our business with the highest ethical standards, ensuring honesty and fairness in all our interactions.</li>
//         <li>Customer Focus: Our customers are at the heart of our business. We listen to their needs and work tirelessly to exceed their expectations.</li>
//         <li>Quality: We are committed to providing top-quality vehicles and services. Every car in our inventory is thoroughly inspected and maintained to the highest standards.</li>
//         <li>Community: We believe in giving back to the community that has supported us. We actively participate in local events and initiatives, striving to make a positive impact.</li>
//       </ul>
//       <h2>Visit Us Today</h2>
//       <p>
//         Experience the AutoEmporium difference by visiting our dealership today. Whether you're ready to buy, looking to explore your options, or need expert advice, we are here to help. Come see why so many satisfied customers have chosen AutoEmporium as their trusted automotive partner.
//       </p>
//       <h2>Contact Us</h2>
//       <p>
//         Have questions or need more information? Feel free to reach out to us:
//       </p>
//       <ul>
//         <li>Address: [986968]</li>
//         <li>Phone: [0746633167]</li>
//         <li>Email: ['isaacmusera05@gmail.com']</li>
//         <li>Follow us on social media to stay updated on the latest news, promotions, and events!</li>
//       </ul>
//     </div>
//   );
// };

// ReactDom.render(<AboutPage />, document.getElementById('root'));
// =======
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <h1 style={{ color: "blue" }}>Welcome to AutoEmporium</h1>
      <p>
        At AutoEmporium, we believe that finding your dream car should be an
        exciting and enjoyable experience. As a leading automotive dealership,
        we specialize in offering a wide range of high-quality vehicles,
        exceptional customer service, and a commitment to excellence that sets
        us apart from the competition.
      </p>
      <h2>Our Story</h2>
      <p>
        Founded in 2024, AutoEmporium started with a simple vision: to provide
        an unparalleled car-buying experience for our customers. Our founders,
        Isaac Musera and Winnie Jepchumba, had a passion for cars and a
        dedication to customer satisfaction that laid the foundation for our
        dealership. Over the years, we have grown and evolved, continually
        expanding our inventory and services to meet the diverse needs of our
        customers.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission at AutoEmporium is to connect you with the perfect vehicle
        that fits your lifestyle, budget, and preferences. We strive to make the
        car-buying process seamless and stress-free by offering:
      </p>
      <ul>
        <li>
          Extensive Inventory: Whether you're looking for a brand-new car, a
          certified pre-owned vehicle, or a budget-friendly used car, we have a
          wide selection to choose from. Our inventory includes top brands and
          the latest models, ensuring you find the car that meets your exact
          requirements.
        </li>
        <li>
          Transparent Pricing: We believe in honesty and transparency. Our
          pricing is straightforward, with no hidden fees or surprises. We
          provide detailed information about each vehicle, including its
          history, features, and pricing, so you can make an informed decision.
        </li>
        <li>
          Exceptional Customer Service: Our team of knowledgeable and friendly
          sales professionals is here to assist you every step of the way. From
          the moment you walk into our dealership to the moment you drive away
          in your new car, we are dedicated to providing a personalized and
          hassle-free experience.
        </li>
        <li>
          Financing Options: We understand that financing is a crucial part of
          the car-buying process. Our finance experts work with a variety of
          lenders to offer competitive rates and flexible terms. We are
          committed to helping you secure the best financing solution for your
          needs.
        </li>
        <li>
          After-Sales Support: Our relationship with our customers doesn't end
          once you drive off the lot. We offer comprehensive after-sales
          services, including maintenance, repairs, and parts, to keep your
          vehicle running smoothly for years to come. Our state-of-the-art
          service center is staffed with certified technicians who are experts
          in their field.
        </li>
      </ul>
      <h2>Our Values</h2>
      <p>
        At AutoEmporium, we are guided by core values that shape everything we
        do:
      </p>
      <ul>
        <li>
          Integrity: We conduct our business with the highest ethical standards,
          ensuring honesty and fairness in all our interactions.
        </li>
        <li>
          Customer Focus: Our customers are at the heart of our business. We
          listen to their needs and work tirelessly to exceed their
          expectations.
        </li>
        <li>
          Quality: We are committed to providing top-quality vehicles and
          services. Every car in our inventory is thoroughly inspected and
          maintained to the highest standards.
        </li>
        <li>
          Community: We believe in giving back to the community that has
          supported us. We actively participate in local events and initiatives,
          striving to make a positive impact.
        </li>
      </ul>
      <h2>Visit Us Today</h2>
      <p>
        Experience the AutoEmporium difference by visiting our dealership today.
        Whether you're ready to buy, looking to explore your options, or need
        expert advice, we are here to help. Come see why so many satisfied
        customers have chosen AutoEmporium as their trusted automotive partner.
      </p>
      <h2>Contact Us</h2>
      <p>
        Have questions or need more information? Feel free to reach out to us:
      </p>
      <ul>
        <li>Address: [986968]</li>
        <li>Phone: [0746633167]</li>
        <li>Email: ['isaacmusera05@gmail.com']</li>
        <li>
          Follow us on social media to stay updated on the latest news,
          promotions, and events!
        </li>
      </ul>
    </div>
  );
}
export default AboutPage;

// >>>>>>> isaac
