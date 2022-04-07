import Image from 'next/image';

const Banner = ({ image }) => {
  return (
    <div>
      <Image src={image} width={1200} height={500} layout="responsive" />
    </div>
  );
};

export default Banner;
