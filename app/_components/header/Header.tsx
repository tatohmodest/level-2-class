import { BarChart, ShoppingBasket } from "lucide-react"
import Link from "next/link"

function Header() {

    const navigation = [
        {
            name:"Home",
            url:"/"
        }, 
        {
            name:"Products", 
            url:"/products"
        },
        {
            name:"Find us",
            url:"/find-us"
        }
        , 
         {
            name:"Pages",
            url:"/pages"
        }
    ]
        return (

        <>
    <header className="flex sticky top-0 bg-white left-0 w-full justify-between items-center px-[40px] p-[20px] shadow-xl">
        <div className="flex gap-[10px] justify-center items-center">
      <BarChart />
      <span>  CRESCENDO</span>
        </div>
        
        <ul className="flex justify-center items-center gap-[20px] ">
            {
            navigation.map((value, key)=> (
                <Link href={value.url}>
                <li key={value.name}>
                   {value.name}
                </li>
                </Link>
            )) 
            }
        </ul>



        <div className="flex justify-center items-center gap-[15px]">
            <ShoppingBasket />
            <button className="bg-blue-500 text-white p-[10px] border-none rounded-[3px] ">
                Buy Template
            </button>

            </div>
        </header>
        </>
    )
}


export default Header ;