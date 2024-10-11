"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import bgImg from "@/images/bg-img.png"

import { api } from "@/constants/api";

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
             <input type="text" className="w-50 mt-10 h-10 rounded-md text-xl text-center" value={name} placeholder="Nome do personagem" onChange={(event)=>{setName(event.target.value)}}/>
             {erro && <h5 className="text-white">{message}</h5>} 
        <div className="flex flex-row flex-wrap justify-center items-center mt-10 gap-10 max-w-[85%]">
          <Suspense fallback={<div>Carregando dados...</div>}>
              {character.map((item,index)=>{
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
            </div>
          </>
    )
}


export default axiosPage;