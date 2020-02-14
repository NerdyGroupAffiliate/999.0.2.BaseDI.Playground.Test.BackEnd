import React from "react";
import get from "lodash/get";
import { withRouter } from "react-router";
import BlogPostContentView from "../../components/BlogPostContentView";
import styles from "./styles.module.css";
import TextWritter from "../../helpers/text-writter";
import PrismicDom from "prismic-dom";
import Helmet from "react-helmet-async";
import { canUseDOM } from "../../helpers/utils";

export default withRouter(props => {
    const authorImage = get(props, "authorQuery.author.data.image.url", "");
    const imageAlt =
        get(props, "authorQuery.author.data.image.alt") || "Author of Article";
    const authorBioItems = get(props, "authorQuery.author.data.bio", [])
    let biography;
    if (authorBioItems && authorBioItems.length) {
        biography = authorBioItems.map(ct =>
            TextWritter(ct));
    }
    const authorName = get(props, "authorQuery.author.data.name");
    const body = get(props, 'page.data.body', []);
    body.forEach(item => {
        item.spans && item.spans.forEach(it => {
            if (it.data && it.data.link_type && it.data.link_type === "Web"){
                const isInternal = it.data.url.includes("www.amli.com/");
                if (!isInternal) {
                    it.data.target = "_blank"
                }
            }
        })
    });
    const newbody = PrismicDom.RichText.asHtml(body);
    if (!!canUseDOM && window && window.instgrm) {
        window.instgrm.Embeds.process();
    }
    return (
        <React.Fragment>
            <Helmet>
                <script async defer src="https://platform.instagram.com/en_US/embeds.js"></script>
            </Helmet>
            <BlogPostContentView>
                <blog-body>
                    <div className={styles.blogContainer} dangerouslySetInnerHTML={{ __html: newbody }} />
                </blog-body>
                {
                    authorName
                    ?   <author-bio-wrapper className={!authorImage ? styles.noImage : ''}>
                                { authorImage ? <author-image src={authorImage} alt={imageAlt} /> : null}
                                <author-bio>
                                    {
                                        authorBioItems.length
                                        ?   biography
                                        :   "This author does not have a biography."
                                    }
                                </author-bio>
                                <view-authors-posts-link
                                    className={styles.authorWrapperLinkFont}
                                    href={`/blog?search=${authorName}`}
                                    onClick={e => {
                                        if (e && e.preventDefault) {
                                            e.preventDefault();
                                        }
                                        props.history.push('/blog', { doNotRedirect: true, search: authorName });
                                    }}
                                    >
                                    <img src="/images/right-arrow-yellow.svg" alt="" className={styles.authorWrapperImage}/>
                                    {`View All Posts by ${authorName}`}
                                </view-authors-posts-link>
                            </author-bio-wrapper>
                        : null
                    }
            </BlogPostContentView>
        </React.Fragment>
    );
});
