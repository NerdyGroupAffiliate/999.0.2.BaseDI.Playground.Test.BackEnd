import React, { useState, useEffect } from "react";
import { get } from "lodash";
import PageSubNavView from "../../components/PageSubNavView";
import { canUseDOM } from '../../helpers/utils';
import styles from "./styles.module.css";
import GtmTimer from "../../helpers/gtm-timer";
import "./index.css";

function PageSubNav(props) {
  const [linkIdx, setLinkIdx] = useState(null);
  const [fixedNav, setFixedNav] = useState('regular');

  const items = get(props, "slice.items", []);
  const itemCount = items !== null && items !== undefined ? items.length : 0;
  const uid = get(props, "page.uid");

  const scrollToThisDiv = element => {
    if (document.querySelector(".af-class-" + element)) {
      document.querySelector(".af-class-" + element).scrollIntoView({
        behavior: "smooth"
      });
    } else {
      //The following code is for fail safe purposes.
      //In case the app fairy prefix is not added to the class.
      if (document.querySelector("." + element)) {
        document.querySelector("." + element).scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  };
  if (!!canUseDOM) {
    const width = document.documentElement.clientWidth;
    window.onscroll = () => {
      if (width >= 1440) {
        if (window.scrollY > 969) {
          setFixedNav('fixed-nav-xlarge');
        } else {
          setFixedNav('regular');
        }
      }
      if (width < 1440 && width > 991) {
        if (window.scrollY > 669) {
          setFixedNav('fixed-nav-large');
        } else {
          setFixedNav('regular');
        }
      }
      if (width <= 991 && width > 767) {
        if (window.scrollY > 689) {
          setFixedNav('fixed-nav-med');
        } else {
          setFixedNav('regular');
        }
      }
      if (width <= 767 && width > 479) {
        if (window.scrollY > 679) {
          setFixedNav('fixed-nav-sm');
        } else {
          setFixedNav('regular');
        }
      }
      if (width <= 479) {
        if (window.scrollY > 434) {
          setFixedNav('fixed-nav-xs');
        } else {
          setFixedNav('regular');
        }
      }
    }
  }

  useEffect(() => {
    if (!!items && !!items[linkIdx] && !!items[linkIdx].link_title && canUseDOM) {
      document
        .querySelector(
          `[href*='#${items[linkIdx].link_title
            .toLowerCase()
            .replace(/ /gi, "-")}']`
        )
        .scrollIntoView({
          behavior: "smooth",
          block: "end"
        });
    }
  }, [linkIdx]);

  if (uid === 'sustainability') {
    GtmTimer(
      { event: 'interactWithSustainabilityPage' }, 
      120000
    );
  }

  return (
    <div className={`${styles.navBarWrapper} ${fixedNav}`}>
      <span
        onClick={e => {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          return linkIdx > 0 ? setLinkIdx(linkIdx - 1) : null;
        }}
        className={styles.prev}
      >
        <img
          src="/images/right-arrow.svg"
          alt="left arrow"
          className={linkIdx > 0 ? '' : styles.disabled}
        />
      </span>
      <PageSubNavView>
        <link-wrapper className={styles.linkWrapper}>
          {itemCount > 0 &&
            items.map((item, index) => (
              <a
                key={`item-link-${index}`}
                href={`#${item.link_title.toLowerCase().replace(/ /gi, "-")}`}
                onClick={e => {
                  if (e) {
                    e.preventDefault();
                  }
                  scrollToThisDiv(get(item, "link_css_class"));
                }}
                className={[
                  index === itemCount - 1
                    ? "af-class-sustainble-sub-nav-link af-class-last-child"
                    : "af-class-sustainble-sub-nav-link",
                  styles.link
                ].join(" ")}
              >
                <div className={get(item, "link_css_class")}>
                  <span>
                    {get(item, "link_title")}
                  </span>
                </div>
              </a>
            ))}
        </link-wrapper>
      </PageSubNavView>
      <span
        className={styles.next}
        onClick={e => {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          return !linkIdx
            ? setLinkIdx(1)
            : linkIdx < itemCount -1
            ? setLinkIdx(linkIdx + 1)
            : null;
        }}
      >
        <img
          src="/images/right-arrow.svg"
          alt="right arrow"
          className={linkIdx >= itemCount - 1 ? styles.disabled : ''}
        />
      </span>
    </div>
  );
}
export default PageSubNav;
