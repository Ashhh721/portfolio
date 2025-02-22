
import { FaNodeJs, FaReact } from "react-icons/fa"

import { SiExpress, SiMongodb,  } from "react-icons/si"


 export const Technologies = () => {
  return ( 
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technology</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div >

                <SiMongodb className="text-7xl text-cyan-500"/>
            </div>

            <div className="p-4">
                <SiExpress className="text-7xl"/>

            </div>
            <div className="p-4">
                <FaReact className="text-7xl text-cyan-500"/>
            </div>
            <div className="p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </div>
            

        </div>


    </div>
  
  )
}
