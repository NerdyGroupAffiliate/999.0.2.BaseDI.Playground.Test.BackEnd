import React from 'react';
import { get } from 'lodash';
import './index.css';
import ListBlocksWithTextBlurbView from '../../components/ListBlocksWithTextBlurbView';
import LogoWrapperView from '../../components/LogoWrapperView';

import styles from './styles.module.css';

export default (props) => {
    const title = get(props, 'data.primary.title');
    const subTitle = get(props, 'data.primary.subtitle');
    const textBlurb = get(props, 'data.primary.text_blurb');
    const logoListImage = get(props, 'data.items', []);

    return (
        <ListBlocksWithTextBlurbView>
            <content className={!subTitle ? styles.contentEmpty : ''}>
                <details-wrapper
                    className={styles.detailsContainer}
                    topelement={() =>
                        textBlurb ? (
                            <div className={['paragraph', styles.blurb].join(' ')}>
                                {textBlurb}
                            </div>
                        ) : null
                    }
                >
                    <title className={styles.title}>{title}</title>
                    {subTitle ? <subtitle className={styles.subtitle}><span>{subTitle}</span></subtitle> : null}
                    {textBlurb ? <text-blurb>{textBlurb}</text-blurb> : null}
                </details-wrapper>
            </content>
            <logoWrapperViewList0>
                {logoListImage.map((item, key) => (
                    <LogoWrapperView.Controller key={key} data={item} />
                ))}
            </logoWrapperViewList0>
        </ListBlocksWithTextBlurbView>
    );
};
