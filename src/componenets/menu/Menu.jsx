import { useState } from 'react';
import Heders from './Headers';
import Serch from './Search';
import Conv from './Conv';

const Menu = () => {
  const [text, setbol] = useState('');

  return (
    <>
      <Heders />
      <Serch setjext={setbol} />
      <Conv text={text} />
    </>
  );
};

export default Menu;
