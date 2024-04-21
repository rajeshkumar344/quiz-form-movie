import React from 'react'

const apiKey = "801450be"

export default function Movie() {
    const [search, setsearch] =React.useState("")
    const [myData, setMyData] =React.useState({})

    async function yourMovies(){
        if(!search){
            return
        }
        const url = await fetch(`http://www.omdbapi.com/?t=${search}&&apikey=${apiKey}`);
       const data =await url.json()
       console.log(data)
       setMyData(data)

       console.log("dattaaaa",myData)
    // setsearch("")
    }
  
  return (

    <div className='h-screen bg-slate-700 '>
        <div className='d-flex justify-center align-centre pt-2' >
        <input type='search'placeholder='search movies'className='bg-white-400 text-black rounded p-2 m-1'
        onChange={e =>setsearch(e.target.value)}></input>
        <button className='btn btn-success' onClick={yourMovies}>search</button>
        </div>
       <div className='mt-10 w-full flex justify-center align-center text-white font-bold'>
          <div className=''>
              <img className='' src={myData.poster} alt='#'/>
              
          </div>
          <div>
              <h1>Title : {myData.Title}</h1>
              <p>Director : {myData.Director}</p>
              <p>Genre : {myData.Genre}</p>
              <p>year : {myData.Year}</p>
              <p>country : {myData.Country}</p>
              <p>Actor : {myData.Actors}</p>
              <p>language : {myData.Language}</p>
              <p>Rating : {myData.Ratings}</p>
              
          </div>
       </div>
        
    </div>
  )
}
