"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import bgImg from "@/images/bg-img.png"

import { api } from "@/constants/api";
import Card from "@/components/card";

interface IData{
    name: string;
    affiliation: string;
    ki: string;
    race: string;
    image: string;
  }


const axiosPage: React.FC = () => {

    const [character, setCharacter] = useState<IData[]>([])
    const [erro, setErro] = useState<boolean>(false)
    const [name, setName] = useState<string>("")

    const message = "Personagem não encontrado!"

    useEffect(() => {
    
        api.get(`/characters/?name=${name}`).then((res) => {
            const data = res.data

            if(name === ""){
                setCharacter(data.items)
            }else if(name.length > 0){
                setCharacter(data)
            }else{
                setCharacter(data)
            }

            if(res.data.length == 0){
                throw new Error("")
            }
            
            setErro(false)

        }).catch(() => {
            setErro(true)
        })
        
        return () => {
            
        }
    },[name])
    

    return(
        <>
         <div className="flex flex-col min-w-full justify-center items-center">
             <input type="text" className="w-50 mt-6 h-10 rounded-md text-xl text-center" value={name} placeholder="Nome do personagem" onChange={(event)=>{setName(event.target.value)}}/>
            <span className="text-white text-medium">{erro ? message: null}</span>
        <div className="flex flex-row flex-wrap justify-center items-center mt-10 gap-10 max-w-[85%]">
          <Suspense fallback={<div>Carregando dados...</div>}>
              {character.map((item,index)=>(
            <Card key={index} bgImg={bgImg} image={item.image} name={item.name} affiliation={item.affiliation} ki={item.ki} race={item.race}/>
              ))}
            </Suspense>
            </div>
            </div>
          </>
    )
}


export default axiosPage;