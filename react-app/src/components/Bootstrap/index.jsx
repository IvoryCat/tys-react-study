import Accordion from './Accordion';
import Dropdown from './Dropdown';
import { accordionData, carouselData } from '../../datas/bootstrap';
import { useState } from 'react';
import Carousel from './Carousel';
import ModalName from './ModalName';

const Bootstrap = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [isShowModalName, setIsShowModalName] = useState(false);
  const [name, setName] = useState('홍길동');

  // // 자식이 부모 변수를 컨트롤 하는 방법
  // const handleClose = () => {
  //   setIsShowModalName(false);
  // };

  return (
    <>
      <Accordion data={accordionData} />

      <button onClick={() => setIsShowDropdown((prev) => !prev)}>
        드랍다운
      </button>
      <div>{isShowDropdown && <Dropdown />}</div>

      <Carousel data={carouselData} />

      <h1>이름 : {name}</h1>
      <button onClick={() => setIsShowModalName(true)}>이름바꾸기</button>
      {isShowModalName && (
        <ModalName
          onClose={() => setIsShowModalName(false)}
          initName={name}
          onSubmit={(val) => setName(val)}
        />
      )}
    </>
  );
};

/* Modal에 입력된 값을 부모(index)에 반영하기
1. 부모 : [parameter를 받아서 name값을 변경하는 onSubmit 함수]를 props로 전달 
2. 모달 :
  1. input에 입력된 값을 useState 변수 text에 저장
  2. 확인버튼을 누르면 text 값을을 onSubmit 함수에 넣고 실행
  3. 모달 닫기 
*/

export default Bootstrap;
