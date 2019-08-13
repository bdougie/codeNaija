import React from "react";
import PropTypes from "prop-types";
import Layout from "components/layout";
import Box from "components/box";
import Title from "components/title";
import Gallery from "components/gallery";
import IOExample from "components/io-example";
import Modal from "containers/modal";
import {graphql} from "gatsby";

const Index = ({data}) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Gallery items={data.homeJson.gallery} />
    <Box>
      <Title as="p" size="medium">
      This is where the WHY we are doing this will go

      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
      </Title>
    </Box>
    <button>Call to Action - styling coming soon</button>
    <div style={{height: "50vh"}} />
    <Box>
      <Title as="p" size="smal">
      © 2019 GitHub Blacktocats
      </Title>
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
