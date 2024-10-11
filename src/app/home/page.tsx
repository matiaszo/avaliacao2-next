"use client"
import Image from "next/image";

import { useEffect } from "react";
import { useState } from "react";
import { Suspense } from "react";

import bgImg from "@/images/bg-img.png" 

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
  <div className="flex flex-wrap justify-center items-center mt-10 gap-10 max-w-[85%]">
    <Suspense fallback={<div>Carregando dados...</div>}>
        {characters.map((item,index)=>{
          return(
            <div className="flex flex-col min-w-80 max-w-80 justify-center items-center border-2 rounded-md" key={index}>
                    <div className="flex h-96 w-full relative items-center justify-center">
                      <Image src={bgImg} alt="imagem do personagem" className="absolute h-full w-full" width={200} height={200} priority/>
                      <Image src={item.image} alt="imagem do personagem" className="w-auto h-[110%] object-scale-down ease-in-out duration-500 hover:scale-125 z-10" width={200} height={200} priority/>
                    </div>
                    <div className="flex flex-col w-full bg-zinc-700 text-white text-xl">
                        <p className="flex ml-3 mt-3 font-extrabold">{item.name}</p>
                        <p className="flex ml-3 text-yellow-500 font-bold">{item.race}</p>
                        <p className="flex ml-3 text-3xl font-semibold">Affiliation</p>
                        <p className="flex ml-3 text-yellow-500 font-bold">{item.affiliation}</p>
                        <p className="flex ml-3 text-3xl font-semibold">Base Ki</p>
                        <p className="flex ml-3 text-yellow-500 font-bold">{item.ki}</p>
                        <p className="flex ml-3 text-3xl font-semibold">Raça</p>
                        <p className="flex ml-3 text-yellow-500 font-bold">{item.race}</p>
                    </div>
            </div>
          )
        })}
      </Suspense>
      </div>
    </>
  );
}
