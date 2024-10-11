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

    const res = await fetch("https://dragonball-api.com/api/characters/?limit=30");
    const data : IData = await res.json();

    return(
        <>
            <div className="flex w-[80%] p-10 gap-16 flex-wrap justify-center items-center">
            <Suspense fallback={<div>Loading...</div>}>
                {data.items.map((item, index) => {
                    return(
                        <div key={index} className="w-[200px]">
                            <div className=" font-semibold justify-center bg-gradient-to-br from-orange-400 to-red-500 w-full p-[5px] text-center rounded-[30px] flex flex-col gap-[10px] object-scale-down ease-in-out duration-500 hover:scale-125 hover:shadow-b divide-y">
                                <p className="font-bold font-bg">{item.name}</p>
                                <p>{item.affiliation}</p>
                                <p>{item.ki}</p>
                                <p>{item.race}</p>
                                <div className="flex w-full justify-center items-center">
                                    <Link className="bg-green-500 w-[40%] mt-2 rounded-md ease-in-out duration-500 hover:scale-110 object-scale-down" href={`/perso/${item.id}`}>ABRIR</Link>
                                </div>
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