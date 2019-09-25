import React from "react";
import PropTypes from "prop-types";
import Layout from "components/layout";
import Box from "components/box";
import Title from "components/title";
import Gallery from "components/gallery";
import Mooseheads from "components/mooseheads";
import {Button} from "components/button/button.css";
import IOExample from "components/io-example";
import {graphql} from "gatsby";
import styled from "styled-components";

const Index = ({data}) => (
  <Layout>
    <Box>
      <p>26th & 27th October 2019</p>
      <Title as="h1" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <p>... building technology for social good</p>
      <a href="https://forms.gle/D3y3VVxTiugGPekk9">
        <Button>Register Now</Button>
      </a>
    </Box>
    <Box>
      <Mooseheads items={data.homeJson.mooseheads} />
    </Box>
    <Box>
      <h2>About</h2>
      <p>
        CodeNaija Hackathon 2019 is a Nigerian hackathon hosted by Andela and the Blacktocats, GitHub's Black Employee
        Resource Group. The goal of the hackathon is to highlight the existing community of Nigerian developers by
        showcasing their amazing talent and work. Participating engineers will be split into groups of 10 and will
        compete for the ultimate prize.
      </p>
      <p>
        There will also be plenty of time to interact with professional mentors and engineers, meet recruiters, and
        listen to great tech talks and tutorials from sponsors.
      </p>
    </Box>
    <Box>
      <p>
        Join us at Andela EPIC Towers for +30 hours hours of hacking from Saturday 26th October from 9:30 AM - 9:00 PM
        and Sunday 27th October from 11:00 AM - 8:00 PM.
      </p>
    </Box>
    <Box>
      <Gallery items={data.homeJson.gallery} />
    </Box>
    <Box>
      <img src={data.homeJson.laptop.childImageSharp.fluid.src} />
      <div>
        <p>26th & 27th October 2019</p>
        <Title as="h1">{data.homeJson.content.childMarkdownRemark.rawMarkdownBody}</Title>
        <p>... building technology for social good</p>
        <a href="https://forms.gle/D3y3VVxTiugGPekk9">
          <Button>Register Now</Button>
        </a>
      </div>
    </Box>
    <Box>
      <Title as="p">© 2019 GitHub</Title>
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      laptop {
        childImageSharp {
          fluid(maxHeight: 90, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
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
      mooseheads {
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
