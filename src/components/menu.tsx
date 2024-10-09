import { ROUTES } from "@/constants/routes";
import Link from "next/link";


export const Menu = () => {

    const style = {
        options: "bg-white rounded-[10px] h-[4vh]"
    }

    return(
        <>
            <h1 className="font-robFont flex text-medium justify-center items-center bg-yellow-300 relative w-full h-[5vh] gap-x-6">
                <Link className={style.options} href={ROUTES.home}>Fetch</Link>
                <Link className={style.options} href={ROUTES.axios}>Axios</Link>
                <Link className={style.options} href={ROUTES.server}>Server side</Link>


            </h1>
        </>
    )
}
