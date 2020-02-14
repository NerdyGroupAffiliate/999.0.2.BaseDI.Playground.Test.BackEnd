import React from "react";
import get from "lodash/get";
import ContentFullWidthTestimonialView from "../../components/ContentFullWidthTestimonialView";
import './index.css';
import styles from './styles.module.css'

export default props => {
  const { slice } = props;
  const highlighed_words = get(slice, "primary.highlighed_words");
  const written_by = get(slice, "primary.written_by");
  const text_blurb = get(slice, "primary.text_blurb");
  const text_b = text_blurb && text_blurb.replace(highlighed_words, `<span className='af-class-blue-highlight'>${highlighed_words}</span>`);
  const testimonial = `“${text_b}”`;

  return (
    <ContentFullWidthTestimonialView>
      <text-blurb className={styles.testimonial}>
        {testimonial ? <div dangerouslySetInnerHTML={{__html: testimonial}} /> : "" }
      </text-blurb>
      <written-by> {`—${written_by}`} </written-by>
    </ContentFullWidthTestimonialView>
  );
};
