import { ROUTES } from "@/constants/routes";
import Link from "next/link";


export const Menu = ({firstRoute, secondROute, thirdRoute}: any) => {

    const style = {
        options: "flex bg-white items-center font-semibold justify-center rounded-[10px] text-xsmall md:text-small lg:text-medium leading-[1] h-[4vh] p-2"
    }

    return(
        <>
            <h1 className="font-robFont flex justify-center items-center bg-gradient-to-br from-orange-500 to-red-600 relative w-full h-[5vh] gap-x-6">
                <Link className={style.options} href={ROUTES.home}>{firstRoute}</Link>
                <Link className={style.options} href={ROUTES.axios}>{secondROute}</Link>
                <Link className={style.options} href={ROUTES.server}>{thirdRoute}</Link>
            </h1>
        </>
    )
}
