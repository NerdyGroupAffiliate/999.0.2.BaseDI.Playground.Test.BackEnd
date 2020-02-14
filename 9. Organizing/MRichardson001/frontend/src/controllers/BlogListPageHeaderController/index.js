import React from "react";
import get from "lodash/get";
import Select from "react-select";
import { withRouter } from "react-router";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import CapitalizeFirsts from "../../helpers/capitalize-first-letter";
import BlogListPageHeaderView from "../../components/BlogListPageHeaderView";
import MagnifyingGlass from "../../assets/icons/MagnifyingGlass.svg";
import styles from "./styles.module.css";
import "./index.css";
import GetTagColors from "../../helpers/get-blog-post-tag-color";
import truncate from "lodash/truncate";

const moment = require("moment");

const BlogListPageHeader = props => {
  const image = BackgroundImageHandler(
    get(props, "featuredPost.post_main_image")
  );
  const title = get(props, "featuredPost.title");
  const summary = get(props, "featuredPost.summary[0].text");
  const author = CapitalizeFirsts(get(props, "featuredPost.author.slug"));
  const date = get(props, "featuredPost.published_date");
  const formattedDate = moment(date).format("MMM Do, YYYY");
  const postTagColors =
    GetTagColors(get(props, "featuredPost.blog_tags"), props.tags) || [];
  const searchBarInput = get(props, "filters.search");
  const featuredUid = get(props, "featuredPost.uid");
  const sortedTags = props.tags.sort((a, b) => a.label.localeCompare(b.label));

  const truncatedSummary = truncate(summary, {
    length: 180,
    separator: " "
  });

  const dropdownStyles = {
    placeholder: () => ({
      color: "black",
      transform: "translateY(-20%)"
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      boxShadow: state.menuIsOpen ? "none !important" : null,
      height: "25px",
      minWidth: "150px",
      width: "100%",
      border: "1px solid #4c698f",
      borderBottom: state.menuIsOpen ? "none" : null,
      borderColor: state.menuIsOpen ? "#4c698f" : null,
      borderRadius: state.menuIsOpen ? "6px 6px 0% 0%" : "6px",
      padding: "0px 15px"
    }),
    indicatorSeparator: () => ({
      display: "none"
    }),
    dropdownIndicator: () => ({
      color: "rgb(76, 105, 143)",
      transform: "translateY(-10%)"
    }),
    clearIndicator: provided => ({
      padding: "0px",
      transform: "translateY(-2px)"
    }),
    singleValue: provided => ({
      ...provided,
      transform: "translateY(-70%)"
    }),
    menu: (provided, state) => ({
      ...provided,
      border: "1px solid #4c698f",
      borderRadius: "0% 0% 6px 6px",
      width: "100%",
      marginTop: "0"
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#eaeaea" : "transparent",
      color: "black"
    })
  };

  return (
    <BlogListPageHeaderView>
      <bg-image
        {...image}
        topelement={() => (
          <div {...image} className={styles.mobileHeaderImage} />
        )}
      >
        <featured-blog-post-container
          className={styles.featuredPostContainer}
          onClick={() => props.history.push(`/blog/${featuredUid}`)}
        >
          <tag className={styles.tagsContainer}>
            {postTagColors.map((tag, index) => (
              <div
                key={index}
                className={["af-class-blog-card--tag", styles.blogTag].join(
                  " "
                )}
                style={{ backgroundColor: tag.tagColor || "#E5EDF8" }}
              >
                {CapitalizeFirsts(tag.tag)}
              </div>
            ))}
          </tag>
          <author>{author}</author>
          <published-date>{formattedDate}</published-date>
          <title>{title}</title>
          <summary>{truncatedSummary}</summary>
        </featured-blog-post-container>
        <search-field className={styles.searchBar}>
          <img
            src={MagnifyingGlass}
            className={styles.magnifyingGlass}
            alt="Magnifying Glass"
          />
          <input
            type="text"
            placeholder={searchBarInput || "Search"}
            className={styles.textInput}
            onChange={e => {
              props.setFilters({
                search: e.target.value.toLowerCase().trim()
              });
            }}
          />
        </search-field>
        <topic-dropdown className={styles.dropdown}>
          <Select
            isClearable
            styles={dropdownStyles}
            classNamePrefix="dropdown"
            placeholder="Topic"
            value={sortedTags.find(tag => tag.id === props.filters.tag)}
            options={sortedTags}
            onChange={e => props.setFilters({ tag: e ? e.id : "" })}
          />
        </topic-dropdown>
        <region-dropdown className={styles.dropdown}>
          <Select
            isClearable
            styles={dropdownStyles}
            classNamePrefix="dropdown"
            placeholder="Region"
            value={props.regions.find(reg => reg.id === props.filters.region)}
            options={props.regions}
            onChange={e => props.setFilters({ region: e ? e.id : "" })}
          />
        </region-dropdown>
      </bg-image>
    </BlogListPageHeaderView>
  );
};

export default withRouter(BlogListPageHeader);
