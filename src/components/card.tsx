import Image from "next/image"



const Card = ({bgImg, image, name, affiliation, ki, race}: any) =>{
    return(
        <>
             <div className="flex flex-col min-w-80 max-w-80 justify-center items-center border-2 rounded-md">
                    <div className="flex h-96 w-full relative items-center justify-center">
                      <Image src={bgImg} alt="imagem do personagem" className="absolute h-full w-full" width={200} height={200} priority/>
                      <Image src={image} alt="imagem do personagem" className="w-auto h-[110%] object-scale-down ease-in-out duration-500 hover:scale-125 z-10" width={200} height={200} priority/>
                    </div>
                    <div className="flex flex-col w-full bg-zinc-700 text-white text-xl">
                        <p className="flex ml-3 mt-3 font-extrabold">{name}</p>
                        <p className="flex ml-3 text-yellow-500 font-bold">{race}</p>
                        <p className="flex ml-3 text-3xl font-semibold">Affiliation</p>
                        <p className="flex ml-3 text-yellow-500 font-bold">{affiliation}</p>
                        <p className="flex ml-3 text-3xl font-semibold">Base Ki</p>
                        <p className="flex ml-3 text-yellow-500 font-bold">{ki}</p>
                        <p className="flex ml-3 text-3xl font-semibold">Raça</p>
                        <p className="flex ml-3 text-yellow-500 font-bold">{race}</p>
                    </div>
            </div>
        </>
    )
}

export default Card;