"use client"
import Image from "next/image";

import { useEffect } from "react";
import { useState } from "react";
import { Suspense } from "react";

interface IData{
  name: string;
  affiliation: string;
  ki: string;
  race: string;
  image: string;
}

export default function Home() {

  const [characters, setCharacters]= useState<IData[]>([])

  useEffect(() => {
    const load = async () =>{
      const res = await fetch("https://dragonball-api.com/api/characters");
      const data = await res.json();

      setCharacters(data.items)

    }
    load()
  }, [])

  return (
    <>
    <Suspense fallback={<div>Carregando dados...</div>}>
      <div className="flex flex-wrap justify-center mt-5">
        {characters.map((item,index)=>{
          return(
            <div className="flex flex-col justify-center items-center text-center border-2">
                <div key={index}>
                    <p>{item.name}</p>
                    <p>{item.affiliation}</p>
                    <Image src={item.image} alt="imagem do personagem" className="min-h-80 min-w-80 max-h-80 max-w-80 object-scale-down" width={200} height={200} priority/>
                    <p>{item.ki}</p>
                    <p>{item.race}</p>
                </div>
            </div>
          )
        })}
      </div>
      </Suspense>
    </>
  );
}
