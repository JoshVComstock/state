import React from 'react'
const Datos = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL;

  const mostrarpdf = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/report1-pdf`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
    return response;
  };

  return (

 <>
  <button onClick={mostrarpdf} >Pdf</button>
   
 </>
  )
}
export default Datos