import React from "react";
import get from "lodash/get";
import ListAmenitiesSimpleView from "../../components/ListAmenitiesSimpleView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import { personaColorStyle } from "../../helpers/property/persona";
import './index.css';

export default props => {
    const { slice } = props;

    const title = get(slice, "primary.title");
    const subtitle = get(slice, "primary.subtitle");
    const items = get(slice, "items", []);
    const image = BackgroundImageHandler(get(slice, "primary.image"));

    const property = get(props, 'property') || get(props, 'page.data');
    return (
        <ListAmenitiesSimpleView>
            <wrapper {...image}>
                <subtitle style={personaColorStyle(property, 'secondary')}>{ subtitle ? subtitle : property.name}</subtitle>
                <title style={personaColorStyle(property)}>{title}</title>
                <list>
                    {items.map((item, index) => (
                        <li
                            key={`amenity_${index}`}
                            className="af-class-phase-1-amenity-list-item"
                        >
                            {item.amenity}
                        </li>
                    ))}
                </list>
            </wrapper>
        </ListAmenitiesSimpleView>
    );
};
