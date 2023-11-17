import React from "react";
import css from "./GallerySection.module.css";
import { BsArrowDownRight } from "react-icons/bs";

const GallerySection = () => {
  return (
    <div>
      <div className={css.galleyContainer}>
        <div className={css.firstHalf}>
          {/* card 1 */}
          <div className={`${css.card} ${css.first}`}>
            <div className={css.imageTag}>01</div>
            <div>
              <p className={css.cardHeading}>Learn from best mentors</p>
              <div className={css.firstLinkBox}>
                <a href="/" className={css.firstCardLink}>
                  Start Learning
                </a>
                <BsArrowDownRight className={css.linkIcon} />
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className={`${css.card} ${css.second}`}>
            <div className={css.imageTag}>02</div>
            <div className={css.secondCardLinksContainer}>
              <div className={css.linkBox}>
                <a href="/" className={css.secondCardLink}>
                  Free Edit
                </a>
                <BsArrowDownRight className={css.linkIcon} />
              </div>
              <div className={css.linkBox}>
                <a href="/" className={css.secondCardLink}>
                  Interactive
                </a>
                <BsArrowDownRight className={css.linkIcon} />
              </div>
              <div className={css.linkBox}>
                <a href="/" className={css.secondCardLink}>
                  Easy Interface
                </a>
                <BsArrowDownRight className={css.linkIcon} />
              </div>
              <div className={css.linkBox}>
                <a href="/" className={css.secondCardLink}>
                  Compare to other
                </a>
                <BsArrowDownRight className={css.linkIcon} />
              </div>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className={`${css.card} ${css.third}`}>
          <div className={css.imageTag}>03</div>
          <div className={css.cardThreeHeadingContainer}>
            <h2 className={css.cardThreeHeading}>+ 20 k</h2>
            <p className={css.cardThreeSubHeading}>
              Glass Pattern generated this week in the first release.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
