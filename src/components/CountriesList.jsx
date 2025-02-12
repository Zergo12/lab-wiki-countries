import axios from 'axios'
import { Divider} from "antd"
import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'




function CountriesList() {

    const [countries, setCountries] = useState([])

    async function fetchData () {
        const {data} = await axios.get(`https://restcountries.com/v2/all`
        )
        setCountries(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
  
  return (
    <section >
			<Divider orientation="center">Countries</Divider>
			
      {countries.length === 0 ? <span>No hay nada</span> : countries.map((country) => {
       return <CountryCard key={country.name} {...country}/>
      })}
			
		</section>
  )
}

     
export default CountriesList