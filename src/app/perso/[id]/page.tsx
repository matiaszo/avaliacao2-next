import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

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
        <div className="flex flex-col text-xl font-bold justify-center mt-10 sm:w-[40%] md:w-[60%] lg:w-[30%] rounded-md items-center bg-gradient-to-br from-orange-500 to-red-600">
                    <p className="font-extrabold text-5xl">{data.name}</p>
                    <hr className="w-full mt-2"/>
                    <Image src={data.image} alt="imagem do personagem" className=" ease-in-out duration-500 hover:scale-125 object-scale-down h-96 w-96" width={300} height={300} priority/>
                    <div className="flex ">
                    <p className="text-zinc-200">Ki:</p>
                    <p>{data.ki}</p>
                    </div>
                    <div className="flex">
                    <p className="text-zinc-200">Raça:</p>
                    <p>{data.race}</p>
                    </div>
                    <div className="flex ">
                    <p className="text-zinc-200">Affiliation:</p>
                    <p>{data.affiliation}</p>
                    </div>
                    <div className="flex w-full justify-center items-center mb-4">
                        <Link className="bg-blue-300 w-[40%] mt-2 rounded-md text-center ease-in-out duration-500 hover:scale-110 object-scale-down" href={ROUTES.server}>Voltar</Link>
                    </div>
        </div>
    )
}

export async function GenerateStaticParams(){

    const res = await fetch('https://dragonball-api.com/api/characters/')
    const data : IDataSI = await res.json()

    return data.items.map(item => item.id)
}

export default Perso;