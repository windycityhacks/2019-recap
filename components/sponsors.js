import React from 'react'
import styled from '@emotion/styled'
import { Box } from 'rebass'
import { Container } from './blocks'
import { useColorMode } from 'theme-ui'
import theme from './theme'

const Base = styled(Box)`
  display: grid;
  grid-row-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(
      ${props => (props.section === 'additionalSupport' ? 128 : 192)}px,
      1fr
    )
  );
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.space[4]}px;
  a {
    width: 100%;
  }
  img {
    max-width: 75%;
    max-height: ${props => (props.section === 'sponsors' ? 5 : 3)}rem;
    ${props =>
      props.colorMode === 'dark' && `filter: invert() hue-rotate(180deg);`}
  }
`

const data = {
  "sponsors": [
    {
      "name": "8th Light",
      "link": "https://8thlight.com",
      "image": "8th-light.svg"
    },
    {
      "name": "Origami Risk",
      "link": "https://www.origamirisk.com/",
      "image": "origami-risk.png"
    },
    {
      "name": "GitHub",
      "link": "https://github.com/",
      "image": "github.png"
    },
    {
      "name": "ActiveCampaign",
      "link": "https://activecampaign.com",
      "image": "activecampaign.svg"
    },
    {
      "name": "ServerCentral",
      "link": "https://www.servercentral.com/",
      "image": "servercentral.png"
    },
    {
      "name": "Make School",
      "link": "https://www.makeschool.com/",
      "image": "make-school.png"
    },
    {
      "name": "Agalmic Ventures",
      "link": "https://www.agalmicventures.com/",
      "image": "agalmic.svg"
    },
    {
      "name": "Hearken",
      "link": "https://wearehearken.com",
      "image": "hearken.png"
    },
    {
      "name": "Otus",
      "link": "https://otus.com",
      "image": "otus.png"
    },
    {
      "name": "Repl.it",
      "link": "https://repl.it",
      "image": "replit.png"
    },
    {
      "name": "Rockstar Coders",
      "link": "https://rockstarcoders.com",
      "image": "rockstar-coders.png"
    },
    {
      "name": "NowPow",
      "link": "https://nowpow.com",
      "image": "nowpow.svg"
    },
    {
      "name": "Showpad",
      "link": "https://www.showpad.com/",
      "image": "showpad.svg"
    },
    {
      "name": "Slack",
      "link": "https://slack.com",
      "image": "slack.svg"
    },
    {
      "name": "Hack Club Bank",
      "link": "https://hackclub.com/bank/",
      "image": "hackclub-bank.svg"
    }
  ],
  "additionalSupport": [
    {
      "name": "Sketch",
      "link": "https://sketchapp.com/",
      "image": "sketch.svg"
    },
    {
      "name": "Meeting Tomorrow",
      "link": "https://meetingtomorrow.com",
      "image": "meetingtomorrow.png"
    },
    {
      "name": "Jellyvision",
      "link": "https://jellyvision.com",
      "image": "jellyvision.svg"
    },
    {
      "name": "Quarter Zero",
      "link": "https://www.quarterzero.com",
      "image": "quarter-zero.png"
    },
    {
      "name": "Tile",
      "link": "https://tile.com/",
      "image": "tile.svg"
    },
    {
      "name": "YouInkIt",
      "link": "https://youinkit.com",
      "image": "youinkit.png"
    },
    {
      "name": "tastytrade",
      "link": "https://www.tastytrade.com/",
      "image": "tastytrade.png"
    }
  ]
}

const Sponsors = props => {
  const [colorMode] = useColorMode()
  return (
    <Base colorMode={colorMode} {...props}>
      {data[props.section || 'sponsors'].map(sponsor => (
        <a href={`${sponsor.link}`}>
          <img
            alt={sponsor.name}
            src={`//windyhacks.com/sponsors/${sponsor.image}`}
            key={sponsor.image}
          />
        </a>
      ))}
    </Base>
  )
}

export default Sponsors
