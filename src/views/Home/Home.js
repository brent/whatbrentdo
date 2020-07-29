import React, { useState } from 'react';
import styles from './home.module.css';

import { Header } from '../../components/Header';

const HomeContentBlock = ({ type, children }) => {
  let typeClass;

  switch (type) {
    case 'light':
      typeClass = styles.homeContentBlockLight;
      break;
    case 'dark':
      typeClass = styles.homeContentBlockDark;
      break;
    default:
      return null;
  }

  return (
    <div className={ `${styles.homeContentBlock} ${typeClass}` }>
      <div className={ styles.homeContentBlockInner }>
        { children }
      </div>
    </div>
  );
};

const CaseStudyBlock = ({ name, imgSrc, date, blurb, url }) => {
  return (
    <a className={ styles.caseStudyBlock } href={ url }>
      <img className={ styles.caseStudy__thumb } src={ imgSrc} alt={ name }/>
      <h5 className={ styles.caseStudy__name }>{ name }, <span className={ styles.caseStudy__projectDate }>{ date }</span></h5>
      <p className={ styles.caseStudy__blurb }>{ blurb }</p>
      <p className={ styles.caseStudy__readMore}>more →</p>
    </a>
  );
};

const renderCaseStudies = () => {
  const caseStudyContents = [
    {
      name: 'LegalShield questionnaire builder',
      imgSrc: 'img/legalshield_thumb.png',
      date: '2017',
      blurb: 'Working closely with a Legalshield scrum team, I designed a tool that would give internal users the ability to quickly create and manage web-based legal questionnaire forms via a drag and drop web interface.',
      url: '/case-studies/legalshield',
    },
    {
      name: 'Koko chatbot',
      imgSrc: 'img/kokobot_thumb.png',
      date: '2017',
      blurb: 'In partnership with Koko’s team, I helped design their native iOS chat bot experience.',
      url: '/case-studies/kokobot',
    },
    {
      name: 'NBA Today',
      imgSrc: 'img/nbatoday_thumb.png',
      date: '2016',
      blurb: 'A small Javascript application I built to display the day\'s NBA matchup in a more visual fashion.',
      url: '/case-studies/nbatoday',
    },
    {
      name: 'Crowdtap top of funnel redesign',
      imgSrc: 'img/crowdtap_thumb.png',
      date: '2015',
      blurb: 'During a busy year Crowdtap decided to redesign just about everything except its logo. My contribution in the redesign was focused closer to the top of the funnel.',
      url: '/case-studies/crowdtap',
    },
    {
      name: 'SocialStars MVP',
      imgSrc: 'img/socialstars_thumb.png',
      date: '2015',
      blurb: 'Crowdtap introduced a second product to its offering, targeting a very different kind of user. I was part of the team responsible for bringing the first version to life.',
      url: '/case-studies/socialstars',
    },
    {
      name: 'Sherpa Concierge',
      imgSrc: 'img/sherpaconcierge_thumb.png',
      date: '2015',
      blurb: 'In partnership with designer-friend Dan Berkowitz, I helped a job placement focused startup bring their MVP product to life.',
      url: '/case-studies/sherpa',
    },
    {
      name: 'BuddyMedia Analytics v3',
      imgSrc: 'img/buddymedia_thumb.png',
      date: '2011 - 2012',
      blurb: 'While working at BuddyMedia I had the opportunity to design for most of their Fortune 500 serving social media marketing tools. I personally redesigned the Analytics product.',
      url: '/case-studies/buddymedia',
    },
    {
      name: 'Hey, you\'re awesome',
      imgSrc: 'img/heyyoureawesome_thumb.png',
      date: '2011',
      blurb: 'A simple app I built that allowed users to send a personalized, greeting card-like page with an accompanying heyyoureaweso.me vanity url.',
      url: '/case-studies/heyyoureawesome',
    },
    {
      name: 'What up, bro?',
      imgSrc: 'img/whatupbro_thumb.png',
      date: '2011',
      blurb: 'A web page that greets you with a fresh, bro\'d out nickname every time you visit.',
      url: '/case-studies/whatupbro',
    },
  ];

  return caseStudyContents.map((caseStudy) => (
      <CaseStudyBlock 
        name={ caseStudy.name }
        imgSrc={ caseStudy.imgSrc }
        date={ caseStudy.date }
        blurb={ caseStudy.blurb }
        url={ caseStudy.url }
      />
    )
  );
}

const ProfessionalAbout = ({ level, onMoreTap }) => {
  const defaultContent = (
    <>
      <p>I'm currently a Senior User Experience Designer working on text-based shopping experiences in Walmart's New Product Innovation group.</p>
    </>
  );

  const levelOneContent = (
    <>
      { defaultContent }
      <p>Previously I was at Jetblack, the first company out of Walmart’s Store No. 8 incubator which offered a similar text-based shopping product. There, I was focused on the company’s mobile app, as well has a handful of internal tools and initiatives.
      </p>
    </>
  );

  const levelTwoContent = (
    <>
      { levelOneContent }
      <p>I have over a decade of design experience, mostly at start ups and small companies as a contractor, full timer, and in between. I’ve been delivering UX and UI artifacts for products at scale for a decade. I’m also comfortable writing code (VIM for life).
      </p>
      <p>Since you’ve come this far, you may be interested in some case studies I put together in the past. I’ve been slow to add more recent ones but if you want to talk about what I’ve been up to, say “hi” and send me an email.
      </p>
      { renderCaseStudies() }
    </>
  );

  let displayContent = defaultContent;

  switch (level) {
    case 1:
      displayContent = levelOneContent;
      break;
    case 2:
      displayContent = levelTwoContent;
      break;
    default:
      displayContent = defaultContent;
  }

  return (
    <>
      { displayContent }
      { level < 2
          ?  <button
              className={ styles.moreTrigger }
              onClick={ onMoreTap }>
                more ↓
              </button>
          : null
      }
    </>
  )
};

export const Home = () => {
  const [moreLevel, setMoreLevel] = useState(0);

  const onMoreTap = (e) => {
    setMoreLevel(moreLevel + 1)
  }

  return (
    <div className={ styles.homeWrapper }>
      <Header
        className={ styles.homeHeader }
        title='whatbrentdo'
        src='img/logo.png'
      />

      <div className={ styles.homeContentBlockWrapper }>
        <HomeContentBlock type='light'>
          <h2 className={ styles.greeting }>Hey, I’m Brent.</h2>
          <h3 className={ styles.sectionExplainer }>I design and build digital products professionally.</h3>
          <ProfessionalAbout
            level={ moreLevel }
            onMoreTap={ onMoreTap }
          />
        </HomeContentBlock>

        <HomeContentBlock type='dark'>
          <h3 className={ styles.sectionExplainer }>In my free time I'm usually  writing, doing something with javascript, or playing video games.</h3>
          <ul>
            <li>
              <p>I review games at <a href='http://byte-sized-reviews.whatbrentsay.com'>byte sized reviews</a></p>
            </li>
            <li>
              <p>I keep other words at <a href='http://whatbrentsay.com'>whatbrentsay</a></p>
            </li>
          </ul>
        </HomeContentBlock>
      </div>
    </div>
  );
};
