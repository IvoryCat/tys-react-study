import MyComponent from './MyComponent';

const Parent = () => {
  const name2 = 'node js';
  return (
    <>
      <MyComponent>---children---</MyComponent>
      <MyComponent name="React" name2={name2} />
    </>
  );
};
export default Parent;
