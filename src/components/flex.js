import React from 'react'
import Container from 'react-bootstrap/esm/Container'

function Flex() {
  return (
    
      
       <Container>
        {/* display */}
        <p className="text-bg-secondary m-5 p-d d-block">Display</p>
         {/* flex */}
         <div className="d-flex justify-content-center ">
               <p className="m-2 p-3 text-bg-secondary ">Flex</p>
               <p className="m-2 p-3 text-bg-secondary">Flex</p>
               <p className="m-2 p-3 text-bg-secondary">Flex</p>
         </div>
         <div className="d-flex flex-column align-items-center ">
               <p className="m-2 p-3 text-bg-secondary w-50">Flex</p>
               <p className="m-2 p-3 text-bg-secondary w-50">Flex</p>
               <p className="m-2 p-3 text-bg-secondary w-50">Flex</p>
         </div>
        {/* hide and show */}
       
       {/* stack */}
           <div className="vstack align-items-center">
           <p className="m-2 p-3 text-bg-primary w-30">Vstack</p>  
           <p className="m-2 p-3 text-bg-primary w-30">Vstack</p>  
           <p className="m-2 p-3 text-bg-primary w-33">Vstack</p>  
           </div>

           <div className="hstack justify-content-center">
           <p className="m-2 p-3 text-bg-primary w-50">Hstack</p>  
           <p className="m-2 p-3 text-bg-primary w-50">Hstack</p>  
           <p className="m-2 p-3 text-bg-primary w-30">Hstack</p>  
           </div>
       {/* shadow */}
       <p className="shadow bg-light mt-5 border border-primary">Shadow</p>
       </Container>

  )
}

export default Flex