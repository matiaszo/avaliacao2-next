import { ROUTES } from "@/constants/routes";
import Link from "next/link";


export const Menu = ({firstRoute, secondROute, thirdRoute}: any) => {

    const style = {
        options: "bg-white rounded-[10px] h-[4vh]"
    }

    return(
        <>
            <h1 className="font-robFont flex text-medium justify-center items-center bg-orange-500 relative w-full h-[5vh] gap-x-6">
                <Link className={style.options} href={ROUTES.home}>{firstRoute}</Link>
                <Link className={style.options} href={ROUTES.axios}>{secondROute}</Link>
                <Link className={style.options} href={ROUTES.server}>{thirdRoute}</Link>
            </h1>
        </>
    )
}
