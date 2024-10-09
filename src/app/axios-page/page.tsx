"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

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
    
        api.get(`/characters/?race=${race}&name=${name}`).then((res) => {
            const data = res.data


            if(name === "" && race === ""){
                setCharacter(data.items)

            }else if(race === "" && name.length > 0){
                setCharacter(data)
            }else if (name === "" && race.length > 0){
                setCharacter(data)
            }
            else{
                setCharacter(data)
            }

            setErro(false)
        }).catch((error) => {
            if(error.response.status === 404){
                setMessage("Pagina ou personagem nao encontrados")
            }
            if(error.response.staus === 500){
                setMessage("erro 500")
            }
            setErro(true)
        })
        
        return () => {
            
        }
    },[race,name])
    

    return(
        <>
            <div className="flex flex-col items-center justify-center mt-1 gap-1">
                <div className="flex">
                    <input type="text" value={name} placeholder="Digite o nome" onChange={(event)=>{setName(event.target.value)}}/>
                    <input type="text" value={race} placeholder="Digite a raça" onChange={(event)=>{setRace(event.target.value)}}/>
                    {erro && <h5 className="text-white">{message}</h5>} 
                 </div>
                <Suspense fallback={<div>Carregando dados...</div>}>
                    <div className="flex flex-wrap justify-center">
                            {character.map((item, index) => {
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
            </div>
        </>
    )
}


export default axiosPage;