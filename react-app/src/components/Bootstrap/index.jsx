import Accordion from './Accordion';
import Dropdown from './Dropdown';
import { accordionData, carouselData } from '../../datas/bootstrap';
import { useState } from 'react';
import Carousel from './Carousel';

const Bootstrap = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  return (
    <>
      <Accordion data={accordionData} />
      <button onClick={() => setIsShowDropdown((prev) => !prev)}>
        드랍다운
      </button>
      <div>{isShowDropdown && <Dropdown />}</div>
      <Carousel data={carouselData} />
    </>
  );
};

export default Bootstrap;
