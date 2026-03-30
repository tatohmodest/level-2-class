
import { getProducts } from "../_utils/get-product"


async function Test() {
    const products = await getProducts()
    // const submit = async() => {
    //    const response =  await fetch("/api/products", {
    //         method:'POST',
    //         body:JSON.stringify(Products)
    //     })

        
    // }
   
    console.log("Product is",products)

  return (
    <div>
    

      {/* <button onClick={submit} className='bg-black text-white text-2xl'>
        Seed Data
      </button> */}
     
     <ul>
        {
            products.map((product) => (
                <li key={product._id}>
                {product?.name}
                </li>
            ))
        }
     </ul>
    </div>
  )
}

export default Test
