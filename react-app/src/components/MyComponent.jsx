const MyComponent = ({ name, children, name2 }) => {
  // const { name, children, name2 } = props;
  return (
    <>
      {children}
      <br />
      안녕하세요, 제 이름은 {name}입니다. <br />
      name2는 {name2}입니다. <br />
    </>
  );
};

export default MyComponent;
