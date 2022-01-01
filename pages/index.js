import React, {useEffect, useState} from 'react';

function Home() {
    const [windowURL,setWindowURL]=useState("");
    const [longURL,setLongURL]=useState("");
    const [shortURL,setShortURL]=useState("")

    useEffect(() => {
        setWindowURL(window.location.origin);
    }, []);


    const shorten=async ()=>{
        setShortURL("Loading...")
        const shortCode=await fetch("/api/url/shorten",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                longUrl:longURL
            })
        }).then(data=>{
            if(data.status!==200){
                setShortURL("INVALID URL");
                return;
            }
            data.json().then((code)=>setShortURL(windowURL+"/"+code))
        });
    }



    return (
        <>
        <div className="w-screen h-full flex-col">
          <form onSubmit={(e)=>{
              e.preventDefault();
              shorten();
          }} className="md:w-2/3 mx-auto my-10">
            <div className="flex-col md:flex md:flex-row justify-center items-center md:border-b border-teal-500 py-2">
              <input
                  value={longURL}
                  onChange={(e)=>setLongURL(e.target.value)}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text" placeholder="Enter Long URL" aria-label="url"/>
                <div className="flex justify-center gap-x-6">
                <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit">
                  Short
                </button>
                <button
                    className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                    type="button">
                  Cancel
                </button>
                </div>
            </div>
          </form>

            <div className="w-full mt-52 flex justify-center items-center text-center"><a className="text-3xl md:text-4xl font-medium text-teal-600" rel="noreferrer" target="_blank" href={`${shortURL}`}>{shortURL}</a></div>
        </div>
        </>
    );
}

export default Home;