'use client'
import { Products } from "@/app/_utils/products"
import { Star, StarHalf, StarIcon } from "lucide-react";
import Image from "next/image"
import { Fragment } from "react/jsx-runtime";
import {useState} from 'react';
import { useParams } from "next/navigation";
interface Props {
    params: {
        slug:string
    }
}
export default function ProductDetails () {
    const [amount , setAmount] = useState<number>(1)
    const {slug} = useParams()
    const obj = Products;
    const prod = obj.find((value, index)=> index == slug)
    
    function Count() {
       return (
        <>
        <div className="flex justify-start items-center mt-7 gap-4">
          <button className="p-2 px-5 border bg-white " type="button" onClick={()=>setAmount( amount >=2 ? amount - 1 : amount)}>-</button>
       
        <span className="p-2 px-5 border w-[60px] bg-white">{amount}</span>

        <button className="p-2 px-5 border bg-white " type="button" onClick={()=>setAmount(  amount <=4 ?  amount + 1 : amount )}>+</button>

      </div>
        </>
       )
    }

    function Stars ({num}:{num:number}) {
        console.log("in the star function: ",num)
        const whole = Math.floor(num)
    
        console.log("this is whole", whole, "type of is ", typeof(whole))
        const decimal = num % 1
        const arrayStar = Array(whole).fill(1)
        if (decimal > 0) {
            arrayStar.push(decimal)
        }

        return (
            <div>
                <ul className="flex justify-start items-center gap-2">
                {arrayStar.map((value, index)=>(
                    <li key={index}>{value == 1? <Star size={20} fill="yellow"color="yellow"/> : <StarHalf size={20} fill="yellow"color="yellow"/>}</li>
                ))}
                </ul>
            </div>
        )
    }

    function Buttons() {
        return (
            <>
            <div className="flex mt-8 justify-start items-center gap-6">
         
           <button className="bg-blue-800 w-[200px]  text-white p-1 text-[14px] rounded-full">
            Add to Cart
           </button>
           
           <button className="border w-[200px] p-1 text-[14px] rounded-full">
            Buy Now
           </button>
           </div>
           </>
        )
    }


    return (
        <Fragment>
        <div className="px-[67px] mt-10">
            <section className="grid grid-cols-2">
            
             <div className="rounded-xl mx-10">
                <Image className="w-full h-auto rounded-xl" src={prod?.imageUrl} width={500} height={700} alt="image" />
            </div>
       
            <div className="leading-7.5">
               <h2>{prod?.category}</h2>
               <h1 className="font-[400] text-3xl gap-3 flex justify-start items-center"><span>{prod?.name}</span><span className="border border-green-600 bg-green-300 text-green-600 p-[2px] rounded-full text-[14px] font-thin">inStock</span> </h1>
               <div className="flex gap-3">
                <Stars num={prod?.rating} /><span>{prod?.rating}</span>
              </div>
              <div className="flex gap-3">
                 <span className="text-gray-600 text-[20px]">{prod?.price}</span><span className='line-through text-gray-300 text-[20px]'>{prod?.price + 130}</span>
            </div>
            <p>
                {prod?.description}
            </p>

     
                 <Count/>
                 <Buttons/>
            </div>

            </section>
        </div>
        </Fragment>
    )
}