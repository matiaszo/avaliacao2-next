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
      <div className="flex flex-wrap justify-center mt-5 gap-3">
    <Suspense fallback={<div>Carregando dados...</div>}>
        {characters.map((item,index)=>{
          return(
            <div className="flex flex-col justify-center items-center border-2 rounded-md">
                <div className="flex flex-col" key={index}>
                    <Image src={item.image} alt="imagem do personagem" className="min-h-100 min-w-80 max-h-80 max-w-80 object-scale-down ease-in-out duration-500 hover:scale-125" width={200} height={200} priority/>
                    <div className="flex flex-col bg-zinc-700 text-white ">
                        <p className="flex ml-1 text-3xl font-semibold">Nome</p>
                        <p className="flex ml-1 text-yellow-500 font-bold">{item.name}</p>
                        <p className="flex ml-1 text-3xl font-semibold">Affiliation</p>
                        <p className="flex ml-1 text-yellow-500 font-bold">{item.affiliation}</p>
                        <p className="flex ml-1 text-3xl font-semibold">Base Ki</p>
                        <p className="flex ml-1 text-yellow-500 font-bold">{item.ki}</p>
                        <p className="flex ml-1 text-3xl font-semibold">Raça</p>
                        <p className="flex ml-1 text-yellow-500 font-bold">{item.race}</p>
                    </div>
                </div>
            </div>
          )
        })}
      </Suspense>
      </div>
    </>
  );
}
