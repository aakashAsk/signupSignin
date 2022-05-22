import { useEffect } from "react";

export default function Home(){
  useEffect(() => {
   if(sessionStorage.getItem('token') != undefined){

   } 
  })
  return (
    <div className="card">
      <h2>Hii, you are login Successfully</h2>
    </div>
  );
}