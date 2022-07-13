import { useEffect, useState } from "react";

function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(","); //console.log(bcg);
  //   const hex = rgbTohex(...rgb); //hex value also provided with hexColor
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue); // need to learn
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
}

export default SingleColor;
