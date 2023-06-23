import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  content: 'home',
});

export { setGlobalState, useGlobalState };
