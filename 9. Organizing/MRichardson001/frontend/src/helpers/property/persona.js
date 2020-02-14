import get from 'lodash/get';

function hexToRgbA(hex, opacity = 1) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + `,${opacity})`;
    }
    throw new Error('Bad Hex');
}

export const personaColorStyle = (property, type = "primary") => {
    const primary = get(property, 'data.primary_color') || get(property, 'primary_color');
    const secondary = get(property, 'data.secondary_color') || get(property, 'secondary_color');
    if (!primary && !secondary) {
        return {}
    }
    return {
        color: type === 'primary' ? primary || secondary : secondary || primary,
    }
};

export const personaBackgroundColorStyle = (property) => {
    const primary = get(property, 'data.primary_color') || get(property, 'primary_color', '#383838');
    if (!primary) {
        return {}
    }
    return {
        backgroundColor: primary,
    }
};

export const getPersonaColor = (property, type = "primary") => {
    const primary = get(property, 'data.primary_color') || get(property, 'primary_color');
    const secondary = get(property, 'data.secondary_color') || get(property, 'secondary_color');
    if (!primary && !secondary) {
        return '#383838';
    }
    return type === 'primary' ? primary || secondary : secondary || primary;
};

export const getFadedPersonaColor = (property, type = "primary", opacity = 0.5) => {
    const primary = get(property, 'data.primary_color') || get(property, 'primary_color');
    const secondary = get(property, 'data.secondary_color') || get(property, 'secondary_color');
    if (!primary && !secondary) {
        return hexToRgbA('#383838', opacity);
    }
    return type === 'primary' ? hexToRgbA(primary, opacity) || hexToRgbA(secondary, opacity) : hexToRgbA(secondary, opacity) || hexToRgbA(primary, opacity);
}
