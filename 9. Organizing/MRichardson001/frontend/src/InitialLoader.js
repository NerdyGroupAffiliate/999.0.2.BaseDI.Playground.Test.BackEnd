import React, { useState } from 'react';
import get from 'lodash/get';
import banner from './assets/images/header-jumbo.jpeg';
import './loader.css';

import styles from './controllers/HomePageController/styles.module.css';

const logo = 'images/Logo_White.svg';

function InitialLoader(props) {
    const [mounted, setMounted] = useState(false);
    if (!mounted) {
        setTimeout(() => setMounted(true), 700);
    }
    const title = get(props, 'loader.title', 'Love Where');
    const subtitle = get(props, 'loader.subtitle', 'You Live');
    return <div className="initial_loader__wrapper" style={{
        zIndex: !props.loaded ? 2000 : -10,
        opacity: !props.loaded ? 1 : 0
    }}>
        <div
            className={["initial_loader__show-force", "initial_loader__container", styles.taglineContainer].join(" ")}>
            <h1 className={["initial_loader__show", "initial_loader__title"].join(" ")}
                style={{ opacity: mounted ? 1 : 0 }}>{title}</h1>
            <h1 className={["initial_loader__show", "initial_loader__title", "initial_loader__subtitle"].join(" ")}
                style={{ opacity: mounted ? 1 : 0 }}>{subtitle}</h1>
            {/*<div className="lds-ellipsis">*/}
            {/*    <div />*/}
            {/*    <div />*/}
            {/*    <div />*/}
            {/*    <div />*/}
            {/*</div>*/}

        </div>
        <div className="initial_loader__logo-container">
            <img alt="logo" src={logo} className="initial_loader__logo" style={{ opacity: mounted ? 1 : 0 }} />
        </div>
        <img alt="banner" src={props.banner || banner}
             className="initial_loader__banner"
        />
    </div>

}

export default InitialLoader;
