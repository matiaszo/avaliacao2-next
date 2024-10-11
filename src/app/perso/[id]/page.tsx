import Image from "next/image";

interface IPerso {
    params: {
        id: string
    }
}

interface IData {
    id: string
    name: string;
    affiliation: string;
    ki: string;
    race: string;
    image: string;
}

interface IDataSI {
    items: IData[]
}

const Perso = async ({params: {id}}: IPerso) => {
    const res = await fetch(`https://dragonball-api.com/api/characters/${id}`)
    const data: IData = await res.json()

    console.log("Response")
    console.log(res)
    console.log("Dados")
    console.log(data)

    return(
        <div className="flex flex-col text-xl font-bold justify-center mt-44 sm:w-[30%] md:w-[80%] bg:w-[60%] lg:w-[55%] rounded-md items-center bg-gradient-to-br from-orange-500 to-red-600">
                    <p className="font-extrabold text-5xl">{data.name}</p>
                    <hr className="w-full mt-2"/>
                    <Image src={data.image} alt="imagem do personagem" className=" ease-in-out duration-500 hover:scale-110 object-scale-down" width={300} height={300} priority/>
                    <p>{data.ki}</p>
                    <p>{data.race}</p>
                    <p>{data.affiliation}</p>
        </div>
    )
}

export async function GenerateStaticParams(){

    const res = await fetch('https://dragonball-api.com/api/characters/')
    const data : IDataSI = await res.json()

    return data.items.map(item => item.id)
}

export default Perso;