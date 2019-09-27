import React from "react";
import PropTypes from "prop-types";
import Layout from "components/layout";
import Box from "components/box";
import PaddedBox from "components/paddedBox";
import Hero from "components/hero";
import LastActionHero from "components/lastActionHero";
import Description from "components/blurb";
import FAQ from "components/FAQ";
import Title from "components/title";
import Gallery from "components/gallery";
import Mooseheads from "components/mooseheads";
import {Button} from "components/button/button.css";
import {Paragraph as AP} from "components/blurb/blurb.css";
import IOExample from "components/io-example";
import {graphql} from "gatsby";
import styled from "styled-components";

const Index = ({data}) => (
  <Layout>
    <Hero>
      <div>
        <small style={{fontSize: 12, textTransform: "uppercase"}}>26th & 27th October 2019</small>
        <Title as="h1" size="large">
          CodeNaija <em style={{color: "#006EC6"}}>Hackathon</em>
        </Title>
        <p style={{fontSize: 12}}>... building technology for social good</p>
        <a href="https://forms.gle/D3y3VVxTiugGPekk9">
          <Button>Register Now</Button>
        </a>
      </div>
      <div>
        <img src={data.homeJson.main.childImageSharp.fluid.src} />
      </div>
    </Hero>
    <Box>
      <h2 style={{textAlign: "center"}}>Powered by</h2>
      <Mooseheads items={data.homeJson.powered} />
      <h2 style={{textAlign: "center"}}>Supported by</h2>
      <Mooseheads items={data.homeJson.supported} />
    </Box>
    <Box>
      <h2 style={{textAlign: "center"}}>About</h2>
      <Description>
        <AP>
          CodeNaija Hackathon 2019 is a Nigerian hackathon hosted by Andela and the Blacktocats, GitHub's Black Employee
          Resource Group. The goal of the hackathon is to highlight the existing community of Nigerian developers by
          showcasing their amazing talent and work.
          <br />
          <br />
          Participating engineers will be split into groups of 10 and will compete for the ultimate prize.
        </AP>
        <AP>
          There will also be plenty of time to interact with professional mentors and engineers, meet recruiters, and
          listen to great tech talks and tutorials from sponsors.
        </AP>
      </Description>
    </Box>
    <PaddedBox>
      <p>
        Join us at Andela EPIC Towers for +30 hours hours of hacking from Saturday 26th October from 9:30 AM - 9:00 PM
        and Sunday 27th October from 11:00 AM - 8:00 PM.
      </p>
    </PaddedBox>
    <Box>
      <Gallery items={data.homeJson.gallery} />
    </Box>
    <FAQ items={data.homeJson.faqItems}/>
    <LastActionHero>
      <div>
        <img src={data.homeJson.laptop.childImageSharp.fluid.src} />
      </div>
      <div>
        <small style={{fontSize: 12, textTransform: "uppercase"}}>26th & 27th October 2019</small>
        <h2 style={{fontSize: 35}}>
          CodeNaija <em style={{color: "#006EC6"}}>Hackathon</em>
        </h2>
        <p style={{fontSize: 12}}>... building technology for social good</p>
        <a href="https://forms.gle/D3y3VVxTiugGPekk9">
          <Button>Register Now</Button>
        </a>
      </div>
    </LastActionHero>
    <Box>
      <br/>
      <br/>
      <p style={{textAlign: "center"}}>© 2019 GitHub</p>
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
          fluid(maxHeight: 200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo {
        childImageSharp {
          fluid(maxHeight: 200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      main {
        childImageSharp {
          fluid(maxHeight: 250, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hero {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
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
      supported {
        image {
          childImageSharp {
            fluid(maxHeight: 100, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      powered {
        image {
          childImageSharp {
            fluid(maxHeight: 100, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      faqItems {
        question
        answer__limio_richtext
      }
    }
  }
`;
