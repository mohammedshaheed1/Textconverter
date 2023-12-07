import React,{useState} from 'react'

export default function About() {
   
    const [mode, setMode]= useState({
        color:"black",
        backgroundColor:"white"
});

const [btnmode, setBtnmode]= useState({
    color:"white",
    backgroundColor:"black"
});
   const handlemode=()=>{
      if(mode.color==="black"){
        setMode({
            color:"white",
             backgroundColor:"black"
        })
        
      }else{
        setMode({
            color:"black",
             backgroundColor:"white"
        })
        
      }
   }
  

  return ( 
    
    <div className='container' style={mode}>
        <div style={mode}>
      <div className="accordion accordion-flush" id="accordionFlushExample"style={mode}>
  <div className="accordion-item"style={mode}>
    <h2 className="accordion-header"style={mode}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={mode}>
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"style={mode}>
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> classNamenameNamenamename. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item"style={mode}>
    <h2 className="accordion-header"style={mode}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"style={mode}>
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"style={mode}>
      <div className="accordion-body"style={mode}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> classNamenameNamenamename. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"style={mode}>
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> classNamenameNamenamename. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    </div>
    <button type="button" className="btn btn-primary my-3 mx-5" onClick={handlemode} >Primary</button>
    </div>
    
  )
}
