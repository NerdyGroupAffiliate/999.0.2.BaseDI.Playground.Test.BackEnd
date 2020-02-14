import get from "lodash/get";
import React from "react";

import ContentVideoTestimonialView from "../../components/ContentVideoTestimonialView";
import ContentVideoTestimonialItemView from "../../components/ContentVideoTestimonialItemView";

import "./styles.css";

export default props => {
  const testimonials = get(props, "data.items", []);
  const oddTestimonials = testimonials && testimonials.filter(
    (testimonial, index) => !(index % 2)
  );
  const evenTestimonials = testimonials && testimonials.filter(
    (testimonial, index) => index % 2
  );

  return (
    <ContentVideoTestimonialView>
      <contentVideoTestimonialItemViewList0>
        {oddTestimonials && oddTestimonials.map((testimonial, index) => (
          <ContentVideoTestimonialItemView.Controller
            item={testimonial}
            odd
            key={`odd_Testimonial_${index}`}
          />
        ))}
      </contentVideoTestimonialItemViewList0>

      <contentVideoTestimonialItemViewList1>
        {evenTestimonials && evenTestimonials.map((testimonial, index) => (
          <ContentVideoTestimonialItemView.Controller
            item={testimonial}
            even
            key={`even_Testimonial_${index}`}
          />
        ))}
      </contentVideoTestimonialItemViewList1>
    </ContentVideoTestimonialView>
  );
};
