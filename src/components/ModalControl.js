import React from "react";
import { useTonConnectModal } from "@tonconnect/ui-react";

const ModalControl = () => {
  const { state, open, close } = useTonConnectModal();

  return (
    <div>
      <p>Modal Status: {state?.status}</p>
      <button onClick={open}>Open Modal</button>
      <button onClick={close}>Close Modal</button>
    </div>
  );
};

export default ModalControl;
