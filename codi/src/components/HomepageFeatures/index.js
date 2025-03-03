import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Get Started',
    Svg:'img/codi-get-started.png',
    description: (
      <>
        Introduction to the CODI model with guidance for community-based 
        organizations (CBOs) and health information exchanges (HIEs).
      </>
    ),
  },
  {
    title: 'CODI Resources',
    Svg:'img/codi-resources.png',
    description: (
      <>
        Resources and tools to plan and implement the CODI model.
      </>
    ),
  },
  {
    title: 'Communities Using CODI',
    Svg:'img/codi-community.png',
    description: (
      <>
        Success stories and outputs from previous CODI implementations.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  let referenced_page = 'docs/get-started'
  if (title.includes('Resources')){
    referenced_page = 'docs/codi-resources-by-phase'
  } else if (title.includes('Communities')) {
    referenced_page = 'docs/communities-using-codi'
  }
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" >
        <a href={referenced_page}>
          <img src={Svg} alt="CODI Logo" className={styles.featureSvg}/>
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
