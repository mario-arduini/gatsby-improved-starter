import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

const Header = () => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `);

  return(
    <header>
      <div>
        <h1>
          <Link to="/">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </div>
    </header>
  );
}

export default Header;
