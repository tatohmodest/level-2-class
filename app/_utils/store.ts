import {create } from "zustand";
import { persist } from "zustand/middleware";


const useStore = create(persist((set)=> ({
    count:0, 
    increase: ()=>set((state)=> ({
        count:state.count + 1
    })),

    decrease: ()=> set((state) => ({
        count:state.count - 1
    }))
}), {
    name:"count-storage"
}


))

export default useStore;