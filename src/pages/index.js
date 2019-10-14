import React from "react";
import PropTypes from "prop-types";
import Layout from "components/layout";
import Box from "components/box";
import About from "components/about";
import Grid from "components/gridBox";
import PaddedBox from "components/paddedBox";
import PurpleBox from "components/purpleBox";
import Hero from "components/hero";
import LastActionHero from "components/lastActionHero";
import Highlights from "components/highlights";
import Highlight from "components/highlights/highlight";
import Description from "components/blurb";
import FAQ from "components/FAQ";
import Footer from "components/footer";
import Title from "components/title";
import Gallery from "components/gallery";
import Mooseheads from "components/mooseheads";
import {Button} from "components/button/button.css";
import {Paragraph as AP} from "components/blurb/blurb.css";
import {P as AboutParagraph} from "components/paddedBox/paddedBox.css";
import { AboutHeader } from "components/about/about.css";
import { H1 as BannerH1} from "components/hero/hero.css";
import IOExample from "components/io-example";
import {graphql} from "gatsby";
import styled from "styled-components";

const Index = ({data}) => (
  <Layout>
    <Hero image={data.homeJson.hero.childImageSharp.fluid.src}>
      <div id="banner">
        <small>26th & 27th October 2019</small>
        <BannerH1 as="h1" size="large">
          CodeNaija <em style={{color: "#006EC6"}}>Hackathon 2019</em>
        </BannerH1>
        <p>... building technology for social good</p>
        <a href="https://forms.gle/D3y3VVxTiugGPekk9">
          <Button>Register Now</Button>
        </a>
      </div>
      <div>
        <img src={data.homeJson.main.childImageSharp.fluid.src} />
      </div>
    </Hero>
    <Box>
      <Grid>
        <div>
          <h2 style={{textAlign: "center"}} className="gridH2">Powered by</h2>
          <Mooseheads items={data.homeJson.powered} />
        </div>
        <div id="separator"></div>
        <div>
          <h2 style={{textAlign: "center"}} className="gridH2">Supported by</h2>
          <Mooseheads items={data.homeJson.supported} />
        </div>
      </Grid>
    </Box>
    <About>
      <AboutHeader> About </AboutHeader>
      <Description>
        <AP>
          CodeNaija Hackathon 2019 is a Nigerian 
          hackathon hosted by Andela and the Blacktocats, GitHub's Black Employee
          Resource Group. 
          <br />
          <br />
          Participating engineers will be split into groups of 5 and will compete for the ultimate prize.
        </AP>
        <AP>
          The goal of the hackathon is to highlight the existing community of Nigerian developers by showcasing their 
          amazing talent and work.
          <br/>
          <br/>
          There will also be plenty of time to interact with professional mentors and engineers, meet recruiters, and 
          listen to great tech talks and tutorials from sponsors.
        </AP>
      </Description>
    </About>
    <PaddedBox>
      <AboutParagraph>
          Join us at Andela EPIC Towers for +30 hours of hacking from 
          Saturday 26th October from 9:30 AM - 9:00 PM
          and Sunday 27th October from 11:00 AM - 8:00 PM.
      </AboutParagraph>
    </PaddedBox>
    <Box>
      <Gallery items={data.homeJson.gallery} />
    </Box>
    <PurpleBox>
      <Highlights>
          {data.homeJson.highlights.map(item => (
            <Highlight>
              <h2>{item.heading}</h2>
              <p>{item.subline}</p>
            </Highlight>
          ))}
      </Highlights>
    </PurpleBox>
    <FAQ items={data.homeJson.faqItems} />
    <LastActionHero>
      <div>
        <img src={data.homeJson.laptop.childImageSharp.fluid.src} />
      </div>
      <div>
        <small>26th & 27th October 2019</small>
        <h2>
          CodeNaija <em style={{color: "#006EC6"}}>Hackathon 2019</em>
        </h2>
        <p>... building technology for social good</p>
        <a href="https://forms.gle/D3y3VVxTiugGPekk9">
          <Button>Register Now</Button>
        </a>
      </div>
    </LastActionHero>
    <Footer>
      <p id="footer">© 2019 GitHub Blacktocats</p>
    </Footer>
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
      highlights {
        heading
        subline
      }
    }
  }
`;
