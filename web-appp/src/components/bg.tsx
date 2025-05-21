import { PropsWithChildren } from "react";

const BG = (props: PropsWithChildren) => {
  return (
    <div className="bg-[url('/pluse.svg')] w-screen h-fit ">
      {props.children}
    </div>
  );
};

export default BG;
