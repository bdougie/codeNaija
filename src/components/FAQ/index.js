import React from "react";
import './index.css'

const bannerStyle = (bgColor) => ({
  backgroundColor: `${bgColor}`
})

export class FaqBanner extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      openAccordions: []
    }

    this.toggleOpenAccordion = this.toggleOpenAccordion.bind(this)
  }

  toggleOpenAccordion(accordionIndex) {
    let newOpenAccordions = [...this.state.openAccordions]

    this.state.openAccordions.includes(accordionIndex) ?
      newOpenAccordions = this.state.openAccordions.filter(item => item !== accordionIndex) :
      newOpenAccordions.push(accordionIndex)

    this.setState({ openAccordions: newOpenAccordions })
  }

  sanitizeString(string) {
      return !string || string.includes('</script>') || string.includes('onload=') || string.includes('onerror=')
          ? ''
          : string
  }

  render() {
    const { bgColor__limio_color, downArrowImg, headline, subline, faqItems } = this.props

    return (
      <div className="FaqBanner" style={bannerStyle(bgColor__limio_color)}>
        <div className="FaqWrapper">
          <h1>{headline}</h1>
          <h2>{subline}</h2>
          <div className="AccordionContainer">
            {
              faqItems.map((item, i) => {
                const active = this.state.openAccordions.includes(i)
                return (
                  <div className="FaqItem" key={i}>
                    <button onClick={() => this.toggleOpenAccordion(i)} className="AccordionItem">
                      <p className="Question">{item.question}</p>
                      <img
                        className={`Arrow ${active ? 'active' : ''}`}
                        src={downArrowImg}
                        alt="down"
                      />
                    </button>
                    <div className={`Panel ${active ? 'active' : ''}`}>
                      <div className="Answer" dangerouslySetInnerHTML={{__html: this.sanitizeString(item.answer__limio_richtext)}} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }

  static defaultProps = {
    bgColor__limio_color: '#ECECEC',
    downArrowImg: "https://image.flaticon.com/icons/svg/118/118738.svg",
    headline: 'Any questions?',
    subline: 'We’ve got answers.',
    faqItems: [
      {
        question: 'How can I contact Customer Services?',
        answer__limio_richtext: 'Go to our help centre'
      },
      {
        question: 'Can I cancel my subscription?',
        answer__limio_richtext: 'Yes, of course!'
      },
      {
        question: 'I cannot subscribe – my email address is already recognised',
        answer__limio_richtext: 'Go to login'
      }
    ]
  };

}

export default FaqBanner
