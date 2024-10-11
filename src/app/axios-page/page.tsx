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
    const [message, setMessage] = useState<string>("")

    const [race, setRace] = useState<string>("")
    const [name, setName] = useState<string>("")

    useEffect(() => {
    
        api.get(`/characters/?name=${name}`).then((res) => {
            const data = res.data

            setErro(false)
            if(name === ""){
                setCharacter(data.items)
            }else if(name.length > 0){
                setCharacter(data)
            }else{
                setCharacter(data)
            }
            // if(data.items.length < 1){
            //     setErro(true)
            // }


        }).catch((error) => {
            if(error.response.status === 200){
                setMessage("Personagem nao encontrado")
                console.log("eroororo")
            }
            if(error.response.staus === 500){
                setMessage("erro 500")
            }else{
                setMessage("Personagem nao encontrado")
            }
            
            setErro(true)
        })
        
        return () => {
            
        }
    },[race,name])
    

    return(
        <>
         <div className="flex flex-col min-w-full justify-center items-center">
             <input type="text" className="w-50 mt-6 h-10 rounded-md text-xl text-center" value={name} placeholder="Nome do personagem" onChange={(event)=>{setName(event.target.value)}}/>
             {erro && <h5 className="text-white">{message}</h5>} 
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