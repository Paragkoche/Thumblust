import Script from "next/script";

const Floating = () => {
  return (
    <>
      <Script type="text/javascript">{`juicy_adzone = '1093354';`}</Script>
      <Script
        type="text/javascript"
        src="https://poweredby.jads.co/js/jfc.js"
        charSet="utf-8"
      ></Script>
    </>
  );
};

export default Floating;
