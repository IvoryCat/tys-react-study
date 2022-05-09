const useState = (init) => {
  let state = init;

  const setState = (val) => {
    state = val;
    //렌더링 작업
  };

  return [state, setState];
};
