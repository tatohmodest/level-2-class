
export const getProduct = async ()  => {
          try {
            const response = await fetch ("http://localhost:3000/api/products")
            const allProducts = await response.json()
            console.log("Api response ", allProducts)
            return {products:allProducts.data}
          }
          catch (error){
           console.log("Error", error)
          }
    }
 