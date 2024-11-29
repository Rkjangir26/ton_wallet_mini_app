import React from "react";
import { useTonAddress } from "@tonconnect/ui-react";

const Address = () => {
  const userFriendlyAddress = useTonAddress(true);
  const rawAddress = useTonAddress(false);

  if (!userFriendlyAddress) return <p>No address connected</p>;

  return (
    <div>
      <p>User-Friendly Address: {userFriendlyAddress}</p>
      <p>Raw Address: {rawAddress}</p>
    </div>
  );
};

export default Address;
