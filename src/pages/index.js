import React from "react";
import PropTypes from "prop-types";
import Layout from "components/layout";
import Box from "components/box";
import Title from "components/title";
import Gallery from "components/gallery";
import IOExample from "components/io-example";
import {graphql} from "gatsby";
import styled from "styled-components";

// moves this to a Component
export const Button = styled.button`
  -webkit-appearance: none;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  color: #757575;
  border: 1px solid #ddd;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 4rem 0 2rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: 0.2s background-color ease;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  & + & {
    margin-left: 1rem;
  }
`;

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
        <p>Nigeria is the 4th fast growing developer community in the world and largest in Africa.</p>
        <p>
          CodeNaija is a Nigerian hackathon hosted by the <a href="https://andela.com/">Andela</a> and the <a href="https://twitter.com/blacktocats">Blacktocats</a>, GitHub's Black Employee Resource Group. Our goal
          for the hackathon is to highlight the existing community of Nigerian developers by showcasing their amazing
          talent and work.
        </p>
        <p>
          Each hackathon team will focus on improving reach to the greater Nigerian developer community while leveraging
          open source technologies to do so.
        </p>
        <p>
          Join us October 5th, 2019
        </p>
      </Title>
      <a href="https://forms.gle/D3y3VVxTiugGPekk9">
        <Button>Apply to hack at CodeNaija</Button>
      </a>
    </Box>
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
