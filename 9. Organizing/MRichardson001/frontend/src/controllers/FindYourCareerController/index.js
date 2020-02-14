import get from 'lodash/get';
import React from 'react';

import ContentVideoTestimonialView from '../../components/ContentVideoTestimonialView';
import FindYourCareerView from '../../views/FindYourCareerView';

import './styles.css';

export default (props) => {
  const testimonials = get(props, 'data.primary.testimonials', []);
  const oddTestimonials = testimonials.filter(
    (testimonial, index) => !(index % 2),
  );
  const evenTestimonials = testimonials.filter(
    (testimonial, index) => index % 2,
  );

  return (
    <FindYourCareerView>
      <contentVideoTestimonialViewList1>
        {oddTestimonials.map((testimonial) => (
          <ContentVideoTestimonialView.Controller
            title={testimonial.title}
            textBlurb={testimonial.textBlurb}
            linkText={testimonial.linkText}
            linkUrl={testimonial.linkUrl}
            videoUrl={testimonial.videoUrl}
          />
        ))}
      </contentVideoTestimonialViewList1>

      <contentVideoTestimonialViewList2>
        {evenTestimonials.map((testimonial) => (
          <ContentVideoTestimonialView.Controller
            title={testimonial.title}
            textBlurb={testimonial.textBlurb}
            linkText={testimonial.linkText}
            linkUrl={testimonial.linkUrl}
            videoUrl={testimonial.videoUrl}
          />
        ))}
      </contentVideoTestimonialViewList2>
    </FindYourCareerView>
  );
};
