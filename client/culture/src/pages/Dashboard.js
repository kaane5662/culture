import { useState } from "react"
import CultureHeader from "../components/CultureHeader"

export default function Dashboard(){
    
    const [Headers, setHeaders] = useState([{},{},{},{},{}])

    return(
        <main className=" h-screen font-space ">
            {/* content */}
            <div className="   py-24 gap-12 flex flex-col">
                <span className="bg-red-500 w-[100%] h-[400px]">
                    

                </span>
                <div className="grid grid-cols-3 gap-12 p-12">
                    {Headers.map((header, index)=>{
                        return(
                            <CultureHeader key={index}></CultureHeader>
                        )
                    })}
                </div>
                
            </div>
        </main>
    )
}