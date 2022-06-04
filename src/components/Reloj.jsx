import { useEffect, useState } from "react";

const Reloj = () => {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <>
      <h1>{hora.toLocaleTimeString()}</h1>
    </>
  );
};
export default Reloj;
