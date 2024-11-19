import React from "react";
import Card from "./Card";

const OurService = () => {
  const services = [
    {
      image: "https://www.kdevs.com.ng/images/services/services1.png",
      title: "Manpower Supply",
      paragraph:
        "We provide the best trained developers to help your team in application development, consultation and training.",
    },
    {
      image: "https://www.kdevs.com.ng/images/services/services2.png",
      title: "Web Development",
      paragraph:
        "We do all kinds of web technology spanning from educational to financial software with responsiveness.",
    },
    {
      image: "https://www.kdevs.com.ng/images/services/services3.png",
      title: "Research and Development",
      paragraph:
        "We collaborate and carry out intensive research in computing, financial apps and data analysis.",
    },
    {
      image: "https://www.kdevs.com.ng/images/services/services4.png",
      title: "Mobile Development",
      paragraph:
        "We develop modernize mobile application that suit your business.",
    },
    {
      image: "https://www.kdevs.com.ng/images/services/services6.png",
      title: "Consulting",
      paragraph:
        "We also render business build up, application testing and training.",
    },
    {
      image: "https://www.kdevs.com.ng/images/services/services5.png",
      title: "Cloud Computing",
      paragraph:
        "We support and develop both mobile and web applications on cloud platforms.",
    },
  ];
  return (
    <section className="bg-[#4e4e4e] p-20">
      <div className="text-center text-white">
        <h1 className="text-4xl font-semibold text-center">Our Service</h1>
        <p className="py-7">
          We render amazing services. <br />
          Do need us? you can provide a slot ASAP.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card title={service.title} paragraph={service.paragraph} image={service.image} />
        ))}
      </div>
    </section>
  );
};

export default OurService;