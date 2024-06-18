import React, { useEffect } from "react";
import AOS from "aos";

const Overview = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <section style={{ backgroundImage : "url('./img/overview-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
            data-aos="fade-up" // Specify the animation type
            data-aos-duration="1000" // Specify the animation duration
          >
            <h2 className="text-5xl font-bold mb-10">Our Research and Solution</h2>

            <img
              src="./img/ov.png"
              alt="overview"
              style={{
                width: "200px",
                height: "200px",
                margin: "0 auto",
                marginBottom: "0.5rem",
              }}
              data-aos="zoom-in" // Example animation for the image
              data-aos-duration="1000" // Duration for the image animation
            />
            <p className="text-xl text-gray-400 mb-0">
              Our research focuses on transforming lost and found item recovery
              through the integration of Semantic Bidirectional Encoder
              Representations from Transformers (SBERT) and Siamese Networks. By
              combining the strengths of text and image analysis, we can deliver
              a singular similarity score, significantly enhancing retrieval
              accuracy and user experience.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-gray-250"></div>
      </div>
    </section>
  );
};

export default Overview;
