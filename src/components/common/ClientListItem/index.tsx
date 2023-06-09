import { IClientListItemProps } from "models/IClient";
import React from "react";
import Badge from "../Badge";

const ClientListItem: React.FC<IClientListItemProps> = ({
  name,
  email,
  phone,
  status,
}) => {
  return (
    <div className="grid grid-cols-[repeat(18,_minmax(0,_1fr))] px-4 border-b-[1px] border-neutral-200 border-solid items-center">
      <div className="w-4 aspect-square border-[2.5px] border-black-38 border-solid rounded-cards cursor-pointer col-span-1" />
      <p className="text-black-87 tracking-wider font-inter font-bold text-xs col-span-5 flex items-center">
        {name}
      </p>
      <Badge text={status} className={`col-span-3 w-20 ${status.toLocaleLowerCase() === 'cliente' ? 'text-bright-blue bg-ice-blue' : 'text-brownish-gray-two bg-white-three'}`} />
      <p className="text-black-87 tracking-wider font-inter font-bold text-xs col-span-4 flex items-center">
        {phone}
      </p>
      <p className="text-black-87 tracking-wider font-inter font-bold text-xs col-span-4 flex items-center">
        {email}
      </p>
    </div>
  );
};

export default ClientListItem;
