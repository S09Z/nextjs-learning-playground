/* eslint-disable react-hooks/rules-of-hooks */
// ** Third Party Imports
import axios from 'axios'
import { useState } from 'react'

const getData = ({ content }) => {
  const [x,b] = useState([])
  
  return (
    <div>
      <pre>{JSON.stringify(content)}</pre>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:3000/api/users')
  const data = res.data
  
  return {
    props: {
      content: data
    }
  }
}

export default getData