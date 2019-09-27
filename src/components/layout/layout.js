import React from "react";
import PropTypes from "prop-types";
import {StaticQuery, graphql} from "gatsby";
import Head from "components/head";
import Header from "components/header";
import GlobalStyle from "global.css.js";
import {Container} from "./layout.css.js";

const Layout = ({data, children}) => (
  <Container>
    <GlobalStyle />
    <Head />
    <Header image={data.homeJson.logo.childImageSharp.fluid.src} />
    {children}
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query PageQuery {
        homeJson {
          logo {
            childImageSharp {
              fluid(maxHeight: 200, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
