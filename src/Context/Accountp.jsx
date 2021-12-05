import { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';

export const AcountContext = createContext(null);
const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [Active, setActive] = useState([]);
  const [newmssflage, setnewmssflage] = useState(false);

  const socket = useRef();

  useEffect(() => {
    console.log(Active);
  }, [Active]);
  useEffect(() => {
    socket.current = io('ws://localhost:9000');
  }, []);

  return (
    <AcountContext.Provider
      value={{
        account,
        setAccount,
        socket,
        setActive,
        Active,
        newmssflage,
        setnewmssflage,
      }}
    >
      {children}
    </AcountContext.Provider>
  );
};
export default AccountProvider;
