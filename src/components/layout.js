import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Header from "./header";
import "./reset.css";

const Layout = ({ children }) => (
  <>
    <Link to='#content' css={skiplinkStyle} >Skip to Main Content</Link>
    <Header />
    <div>
      <main id='content'>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </>
);

const skiplinkStyle = {
  clip: 'rect(1px,1px,1px,1px)',
  height: '1px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '1px',
  position: 'absolute',
  '&:focus': {
    clip: 'auto',
    height: 'auto',
    overflow: 'auto',
    width: 'auto',
    zIndex: 4,
    color: '#000',
    background: '#fff',
    padding: '3px 6px',
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
