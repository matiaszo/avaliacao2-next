import Image from "next/image";

interface IPerso {
    params: {
        name: string
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

const Perso = async ({params: {name}}: IPerso) => {
    const res = await fetch(`https://dragonball-api.com/api/characters/?name=${name}`)
    const data: IData = await res.json()

    console.log("Response")
    console.log(res)
    console.log("Dados")
    console.log(data)

    return(
        <div>
            <p>something</p>
                    <p>{data.id}</p>
                    <p>{data.affiliation}</p>
                    <Image src={data.image} alt="imagem do personagem" className="min-h-80 min-w-80 max-h-80 max-w-80 object-scale-down" width={200} height={200} priority/>
                    <p>{data.ki}</p>
                    <p>{data.race}</p>
        </div>
    )
}

export async function GenerateStaticParams(){

    const res = await fetch('https://dragonball-api.com/api/characters/')
    const data : IDataSI = await res.json()

    return data.items.map(item => item.name)
}

export default Perso;