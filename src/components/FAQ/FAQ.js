import React from "react";
import FaqBanner from "./index.js";
// example usage https://bit.dev/limio/landing/faq-banner/~code


export default function FAQ({items}) {
  const headline = "Frequently Asked Questions"
  const subline = "Curious about attenfing a CodeNaija Hackathon? Browse some of the most common questions we receive below!"
  return (
    <FaqBanner headline={headline} subline={subline} faqItems={items}/>
  );
}
