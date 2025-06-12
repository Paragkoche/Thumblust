import Script from "next/script";

const Floating = () => {
  return (
    <>
      <script type="text/javascript">{`juicy_adzone = '1093354';`}</script>
      <Script
        type="text/javascript"
        src="https://poweredby.jads.co/js/jfc.js"
        charSet="utf-8"
      ></Script>
    </>
  );
};

export default Floating;
