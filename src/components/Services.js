import React from "react";
import serviceData from "../productsdata";
import Slide from "react-reveal/Slide";

function Services() {
  return (
    <section className="services section-center">
      <Slide right>
        <h2>Product and Service</h2>
      </Slide>
      <div className="products">
        {serviceData.map((product, index) => {
          const { title, content, img } = product;
          return (
            <Slide left cascade>
              <article className="product" key={index}>
                <img src={img} alt={title} className="service-img" />
                <h3>{title}</h3>
                <p>{content}</p>
                <button className="btn">read more</button>
              </article>
            </Slide>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
