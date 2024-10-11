"use client"
import Image from "next/image";

import { useEffect } from "react";
import { useState } from "react";
import { Suspense } from "react";
import Card from "@/components/card"

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
    <Suspense fallback="Loading...">
      <div className="flex flex-wrap justify-center items-center mt-10 gap-10 max-w-[85%]">
          {characters.map((item, index)=>(
            <Card key={index} bgImg={bgImg} image={item.image} name={item.name} affiliation={item.affiliation} ki={item.ki} race={item.race}/>
          ))}
        </div>
      </Suspense>
    </>
  );
}
