import { Fragment } from 'react';
import Section from '../components/about-us/section';
import Banner from '../components/multiusable/banner';
import { getData } from '../helpers/helper';

const AboutUs = ({ data }) => {
  return (
    <Fragment>
      <Banner image={'/images/banner-about.jpg'} />
      {data.map((x) => {
        return (
          <Section
            key={x.img}
            img={x.img}
            title={x.title}
            para={x.para}
            isRight={x.isRight}
          />
        );
      })}
    </Fragment>
  );
};

export const getServerSideProps = async () => {
  const data = await getData();

  return {
    props: {
      data,
    },
  };
};

export default AboutUs;
