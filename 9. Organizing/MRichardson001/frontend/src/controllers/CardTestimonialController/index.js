import React from "react";
import get from "lodash/get";
import CardTestimonialView from "../../components/CardTestimonialView";
import styles from './styles.module.css';
import "./index.css";

export default props => {
  const { slice } = props;
  const title = get(slice, "primary.title");
  const testimonial_image_1 = get(
    slice, "primary.testimonial_image_1.url"
  );
  const testimonial_image_2 = get(
    slice, "primary.testimonial_image_2.url"
  );
  const testimonial_image_3 = get(
    slice, "primary.testimonial_image_3.url"
  );
  const testimonial_image_alt_1 = get(
    slice, "primary.testimonial_image_1.alt"
  );
  const testimonial_image_alt_2 = get(
    slice, "primary.testimonial_image_2.alt"
  );
  const testimonial_image_alt_3 = get(
    slice, "primary.testimonial_image_3.alt"
  );

  const testimonial_name_1 = get(slice, "primary.testimonial_name_1");
  const testimonial_name_2 = get(slice, "primary.testimonial_name_2");
  const testimonial_name_3 = get(slice, "primary.testimonial_name_3");
  const testimonial_text_1 = get(slice, "primary.testimonial_text_1");
  const testimonial_text_2 = get(slice, "primary.testimonial_text_2");
  const testimonial_text_3 = get(slice, "primary.testimonial_text_3");
  const testimonial_position_1 = get(
    slice, "primary.testimonial_position_1"
  );
  const testimonial_position_2 = get(
    slice, "primary.testimonial_position_2"
  );
  const testimonial_position_3 = get(
    slice, "primary.testimonial_position_3"
  );

  return (
    <CardTestimonialView>
      <title>{title}</title>

      <testimonial-text-1 className={styles.text}>{testimonial_text_1}</testimonial-text-1>
      <testimonial-image-1 src={testimonial_image_1} alt={testimonial_image_alt_1 || ""} />
      <testimonial-name-1>{testimonial_name_1}</testimonial-name-1>
      <testimonial-position-1>{testimonial_position_1}</testimonial-position-1>

      <testimonial-text-2 className={styles.text}>{testimonial_text_2}</testimonial-text-2>
      <testimonial-image-2 src={testimonial_image_2} alt={testimonial_image_alt_2 || ""} />
      <testimonial-name-2>{testimonial_name_2}</testimonial-name-2>
      <testimonial-position-2>{testimonial_position_2}</testimonial-position-2>

      <testimonial-text-3 className={styles.text}>{testimonial_text_3}</testimonial-text-3>
      <testimonial-image-3 src={testimonial_image_3} alt={testimonial_image_alt_3 || ""} />
      <testimonial-name-3>{testimonial_name_3}</testimonial-name-3>
      <testimonial-position-3>{testimonial_position_3}</testimonial-position-3>
    </CardTestimonialView>
  );
};
