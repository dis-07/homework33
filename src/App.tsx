import { useState } from 'react';

import Title from './components/Title';

function App() {
  const [isOpened, setOpened] = useState<boolean>(false);

  const handleClick = () => {
    setOpened((prevValue) => !prevValue);
  };

  return (
    <>
      {isOpened && (
        <>
          {' '}
          <Title
            children='Products'
            type='bold'
          />{' '}
          <Title
            children='Employees'
            type='normal'
          />{' '}
        </>
      )}
      <button onClick={handleClick}>{isOpened ? 'Close' : 'Open'} title</button>
    </>
  );
}

export default App;
