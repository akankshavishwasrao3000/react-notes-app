import React , {useState} from 'react'

const App = () => {
  
  const [first, setfirst] = useState('')
  const [Details, setDetails] = useState('')

  const [task, settask] = useState([])

  const submitHandler =(e)=>{
    e.preventDefault()
    
    const copyTask=[...task];
    
    copyTask.push({first,Details})
    
    settask(copyTask)

    setfirst('')
    setDetails('')
  }

  const  deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1)
    settask(copyTask)

  }

  return (
    <div className='h-full bg-black text-white'>
      <form  onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex justify-between items-start p-10'>

       <div className='flex gap-4 w-1/2 items-start flex-col'>

        <h1 className='text-3xl font-bold'>Add Notes</h1>


         <input className='px-5 w-full py-2 outline-none border-2 rounded' 
         type="text" 
         placeholder='Enter Notes Handing'
         value={first}
         onChange={(e)=>{
            setfirst(e.target.value);
         }} />


        <textarea className='px-5 w-full h-32 flex items-start flex-row outline-none py-2 border-2 rounded' 
        placeholder='Write Details' 
        value={Details}
        onChange={(e)=>{
           setDetails(e.target.value)   
        }}
        />


        <button className='bg-white active:bg-gray-300 text-black w-full px-5  py-2 border-2 rounded'>Add Notes</button>


       </div>

        <img className='rotate-y-180  h-52' src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="" />

      </form> 

      <div className=' lg:w-1/2 lg:border-l-2 bg-gray-900 p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black pt-9 pb-4 px-8 bg-cover bg-[url("https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")]'>
              <div>
              <h3 className='leading-tight text-xl break-all  font-bold'>{elem.first}</h3>
              <p className='mt-2 leading-tight break-all font-semibold text-xs  text-gray-500'>{elem.Details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full max-w-full box-border cursor-pointer active:bg-black bg-red-400 py-1 text-xs text-white rounded-2xl font-bold'>Delete</button>
            </div>
        })}
          
          
        </div>

        </div>    
    </div>
  )
}

export default App