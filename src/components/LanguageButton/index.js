import "./style.css";

const LanguageButton = () => {
  const lang = {
    name: "UA",
    flagImg:
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/275/flag-ukraine_1f1fa-1f1e6.png",
  };

  return (
    <button
      className="LanguageButton"
      style={{ backgroundImage: `url(${lang.flagImg})` }}
      alt={lang.name}></button>
  );
};

export default LanguageButton;
