import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Blacktocats = ({ data }) => (
  <Layout>
    <Head pageTitle={data.blacktocatsJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.blacktocatsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Blacktocats.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Blacktocats;

export const query = graphql`
  query BlacktocatsQuery {
    blacktocatsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

