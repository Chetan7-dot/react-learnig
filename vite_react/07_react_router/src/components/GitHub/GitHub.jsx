import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Chetan7-dot')
    //     .then(response  => response.json( ))
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>GitHub followes: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={100} />
    </div>

  )
}

export default GitHub

export const githubInfoLoader   = async () => {
    const response = await fetch('https://api.github.com/users/Chetan7-dot')
    return response.json()
}