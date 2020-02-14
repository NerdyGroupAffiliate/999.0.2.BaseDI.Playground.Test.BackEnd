import React, { createRef } from "react";
import get from "lodash/get";
import Slider from "react-slick";
import SliderGalleryView from "../../components/SliderGalleryView";

import styles from './styles.module.css'
import "./index.css";
import { personaColorStyle } from "../../helpers/property/persona";

const settings = {
    // showThumbs: false,
    // showArrows: false,
    // showIndicators: false,
    // infiniteLoop: true,
    // showStatus: false,
    // centerSlidePercentage: 80,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    centerPadding: "200px",
    centerMode: true,
    // className: "carousel-slider",
    adaptiveHeight: true,
    slidesToScroll: 1,
    adaptiveWidth: true,
    initialSlide: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "60px"
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerPadding: "20px"
            }
        }
    ]
};

export default class SliderGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSlide: 0,
            centerMode: true
        };

        this.slider = createRef();
        this.toggleCenterMode = this.toggleCenterMode.bind(this);
    }

    componentDidMount = () => {
        this.toggleCenterMode();
        window.addEventListener("resize", this.toggleCenterMode);
    };

    toggleCenterMode() {
        document.body.clientWidth < 768
            ? this.setState({ centerMode: false })
            : this.setState({ centerMode: true });
    }

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.toggleCenterMode);
    };

    render() {
        const title = get(this.props, "data.primary.title");
        const subtitle = get(this.props, "data.primary.subtitle");
        const property = get(this.props, 'property') || get(this.props, 'page.data');
        const { items } = this.props.data;
        if (!items || !items.length) {
            return null;
        }
        return (
            <SliderGalleryView>
                <subtitle style={personaColorStyle(property, 'secondary')}>{subtitle}</subtitle>
                <title style={personaColorStyle(property)}>{title}</title>
                <prev-arrow onClick={() => this.slider.slickPrev()}>
                    <left-wrapper className={styles.arrow} />
                </prev-arrow>
                <next-arrow onClick={() => this.slider.slickNext()}>
                    <right-wrapper className={styles.arrow} />
                </next-arrow>
                <slider className="custom-slider">
                    <Slider
                        // selectedItem={this.state.selectedSlide}
                        // onChange={(e) => {this.setState({selectedSlide: e})}}
                        //   centerMode={this.state.centerMode}
                        {...settings}
                        ref={slider => (this.slider = slider)}
                    >
                        {items &&
                        items.map((item, i) => (
                            <div key={i} className="slide-img-wrap">
                                <img
                                    className=""
                                    src={item.image.url}
                                    alt={item.image_alt_text || item.image_caption}
                                />
                                {
                                    item.image_caption
                                        ? <p>{item.image_caption}</p>
                                        : null
                                }
                            </div>
                        ))}
                    </Slider>
                </slider>
            </SliderGalleryView>
        );
    }
}
