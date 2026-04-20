'use client'
import React, { useState } from 'react'
import { notify } from '@/app/lib/notification'
function Create() {
    const [instock, setInstock] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [status, setStatus] = useState("")
    
   const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()
       const formData = new FormData(e.currentTarget);
       const data = Object.fromEntries(formData.entries())
       const newObject = {
        name:data.name as string,
        price: Number(data.price),
        category:data.category as string,
        inStock:instock,
        image:data.image as string,
        rating:Number(data.rating),
        description:data.description as string,
        brand:data.brand as string,
        currencty:data.currency as string
       }
      console.log(newObject)
       setIsSending(true)
      
       try {
           const response = await fetch("http://localhost:3000/api/products", {
                method:'POST',
                body:JSON.stringify(newObject),
                headers:{'Content-Type':'application/json'}

           })
           const new_data = await response.json()
           console.log(new_data)
          if(!new_data.success) {
            setIsSending(false)
            setStatus("failed")
            setTimeout(()=>setStatus(""),5000)
            throw new Error ("Error Creating Product")
            
           }
           console.log("status", new_data.success)
           console.log("created", new_data.data)
           setStatus("success")
           setIsSending(false)
           setTimeout(()=>setStatus(""),5000)
       }
       catch(error ) {
            console.error ("Error uploading data", error)
       }

   }

  return (
    <div className='w-full '>
      <form onSubmit={handleSubmit} className="w-[670px] p-5 border border-gray-200 shadow-md m-auto">
        <h1 className='font-bold text-2xl'>Create new products </h1>
        <div className='flex flex-col justify-center items-start p-2'>
            {/**Createing the form inputs  */}
            <input className='outline-none border border-gray-300 p-3 w-full' type="url" name="image" placeholder='enter image url e.g https://img..' />

            <input className='outline-none border border-gray-300 p-3 w-full' type="text" name="name" placeholder='Enter Product name e.g Dell Latitude' />

            <input className='outline-none border my-4 border-gray-300 p-3 w-full' type="number" name="price" placeholder='Enter Product price e.g 1000' />
            <textarea className='outline-none border my-4 border-gray-300 p-3 w-full'  name="description" placeholder='describe product e.g Lenovo is a ..' > </textarea>
            <input className='outline-none border border-gray-300 p-3 w-full' type="number" name="rating" max={5} min={0} />

            <input className='outline-none border border-gray-300 p-3 w-full' type="text" name="brand" placeholder='Enter Brand name e.g Dell' />

            <select name="category"  className='outline-none my-4 bg-blue-300 border border-gray-300 p-3 w-full'>
                 <option value="vegetables">Vegetables</option>
                 <option value="fruits">Fruits</option>
                 <option value="electronics">Electronics</option>
                 <option value="snacks">Snacks</option>
            </select> 
               <select name="currency"  className='outline-none my-4 bg-blue-300 border border-gray-300 p-3 w-full'>
                 <option value="USD">USD</option>
                 <option value="XAF">XAF</option>
                 <option value="EUR">EUR</option>
            </select> 
            <label htmlFor="stock">in stock</label>
            <button type='button' onClick={()=>setInstock(!instock)} className={`${instock?'bg-green-400':'bg-red-500 '} p-2 w-[150px] text-center text-white`}> {
                instock ? "In Stock" : "Not in Stock"
             } 

             </button>
            <button className='outline-none mt-4 transition-all duration-500 ease-in-out hover:bg-black hover:text-white bg-amber-100 border border-gray-300 p-3 w-full'>
               {
                isSending ? "Creating...":"Submit"
               }
              </button>
              <p className={`${status=="failed"?'text-red-600':'text-green-500'} ${status=="" ? 'hidden':'block'}`}>{status == "failed"?"faild to create product":"Product Created"}</p>
        </div>
      </form>
    </div>
  )
}

export default Create
