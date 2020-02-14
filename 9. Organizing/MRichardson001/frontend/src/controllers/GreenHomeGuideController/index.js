import React from "react";
import get from "lodash/get";
import Select from "react-select";
import GreenHomeGuideView from "../../components/GreenHomeGuideView";
import TextWritter from "../../helpers/text-writter";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import styles from './styles.module.css';
import "./index.css";
import { canUseDOM } from "../../helpers/utils";

export default props => {
    const title = get(props, "slice.primary.title");
    const main_body_text = !!get(props, "slice.primary.main_body_text")
        ? TextWritter(get(props, "slice.primary.main_body_text", [null])[0])
        : null;
    const sub_body_text = !!get(props, "slice.primary.sub_body_text")
        ? TextWritter(get(props, "slice.primary.sub_body_text", [null])[0])
        : null;

    const image1 = get(props, "slice.primary.image_1.url");
    const image1AltText = get(props, "slice.primary.image_alt_text_1");

    const image2 = get(props, "slice.primary.image_2.url");
    const image2AltText = get(props, "slice.primary.image_alt_text_2");

    const image3 = BackgroundImageHandler(get(props, "slice.primary.image_3"));
    const image3AltText = get(props, "slice.primary.image_alt_text_3");

    const regions = get(props, "appdata.regions", []);

    const regionNames = [];
    regions.map(region =>
        region.data.region_guide.url ?
            regionNames.push({
                value: region.uid,
                label: region.data.name,
                url: region.data.region_guide.url
            })
            : null
    );

    const dropdownStyles = {
        placeholder: () => ({
            color: 'black',
            paddingLeft: '5px',
            fontFamily: '"Monotype madera", sans-serif'
        }),
        control: (provided, state) => ({
            ...provided,
            backgroundColor: 'transparent',
            height: '50px',
            minWidth: '150px',
            width: '100%',
            border: '1px solid #d2d2d2',
            borderColor: state.menuIsOpen ? '#4c698f' : null,
            borderRadius: state.menuIsOpen ? '6px 6px 0% 0%' : '3px',
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        indicatorsContainer: () => ({
            color: 'rgb(76, 105, 143)',
            width: '15%',
            height: '100%',
            backgroundColor: '#ecd925',
            borderRadius: '0 3px 0 0'
        }),
        dropdownIndicator: () => ({
            color: 'black',
            height: '50%',
            textAlign: 'center',
            transform: 'translateY(15px)',
        }),
        singleValue: (provided) => ({
            ...provided,
            transform: 'translateY(-50%)',
        }),
        menu: (provided, state) => ({
            ...provided,
            // boxShadow: 'none',
            border: '1px solid #d2d2d2',
            borderTop: 'none',
            borderRadius: '0 0 3px 3px',
            width: '100%',
            marginTop: '0',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#2895f7' : 'transparent',
            color: state.isFocused ? 'white' : 'black',
            fontFamily: '"Monotype madera", sans-serif',
            borderBottom: '1px dotted #d2d2d2',
            paddingTop: '15px',
            paddingBottom: '15px'
        })
    }
    const handleChange = (e) => {
        if (canUseDOM) {
            window.open(e.url);
            window.dataLayer.push({event: 'downloadGreenHomeGuide', greenHomeGuideRegion: e.label });
        }
    }
    return (
        <GreenHomeGuideView>
            <title>{title}</title>
            <main-body-text>{main_body_text}</main-body-text>
            <sub-body-text>{sub_body_text}</sub-body-text>
            <image-1 src={image1} srcSet={null} alt={image1AltText} />
            <image-2 src={image2} srcSet={null} alt={image2AltText} />
            <image-3 {...image3} alt={image3AltText} className={styles.bigImage}/>
            <region-dropdown className={styles.dropdown}>
                <Select
                    styles={dropdownStyles}
                    classNamePrefix="dropdown"
                    placeholder="Select Region"
                    options={(regionNames)}
                    onChange={(e) => handleChange(e)}
                />
            </region-dropdown>
        </GreenHomeGuideView>
    );
};
