import Link from "next/link";
import { Suspense } from "react";

type IData = {
    items : {
        id: string
        name: string;
        affiliation: string;
        ki: string;
        race: string;
        image: string;
    }[]
}


const serverPage: React.FC = async () => {

    const res = await fetch("https://dragonball-api.com/api/characters");
    const data : IData = await res.json();

    return(
        <>
            <div className="flex flex-col">
            <Suspense fallback={<div>Loading...</div>}>
                {data.items.map((item, index) => {
                    return(
                        <div key={index} className="w-[200px]">

                            <div className="bg-white w-full p-[5px] text-center rounded-t-[30px] flex flex-col gap-[10px]">
                                <p>{item.affiliation}</p>
                                <p>{item.ki}</p>
                                <p>{item.name}</p>
                                <p>{item.race}</p>
                                <Link href={`/perso/${item.id}`}>ABRIR</Link>
                            </div>
                        </div>
                    )
                })}
            </Suspense>
            </div>
        </>
    )
}

export default serverPage