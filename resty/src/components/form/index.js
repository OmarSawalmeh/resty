import React, { useState } from 'react'
import axios from 'axios';
import './form.scss'

function Form(props) {
  //const [data, setData] = useState();
  const [method, setMethod] = useState('GET')
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  const handleSubmit = (e) => {
    e.preventDefault()
    // const formData = {
    //   method: method,
    //   url: url,
    //   data: 'tt',
    // }
    // props.handleApiCall(formData)
  }

  const changeUrl = (e) => {
    setUrl(e.target.value)
  }

  const changeMethod = (method) => {
    setMethod(method)
  }

  const browseUrl = async(e)=>{
    if(method==="GET"){
      const data = await axios.get(url);
      console.log(data);
      props.handleApiCall(data);
    }
    else if(method==='POST'){
      const data = await axios.post(url)
      props.handleApiCall(data);
    }
    else if (method === 'DELETE') {
      const data = await axios.delete(url)
      props.handleApiCall(data);
    }
    else if (method === 'PUT') {
      const data = await axios.put(url)
      props.handleApiCall(data);
    }
    
  }

  

  return (
    <>
      <div data-testid='method' className='Req'>
        Request Method : {method}
      </div>
      <div className='Url'>URL : {url}</div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' onChange={changeUrl} />
          <button type='submit' onClick={browseUrl}>
            GO!
          </button>
        </label>
        <label className='methods'>
          <button id='get' onClick={() => changeMethod('GET')}>
            GET
          </button>
          <button
            data-testid='postButton'
            id='post'
            onClick={() => changeMethod('POST')}
          >
            POST
          </button>
          <button id='put' onClick={() => changeMethod('PUT')}>
            PUT
          </button>
          <button id='delete' onClick={() => changeMethod('DELETE')}>
            DELETE
          </button>
        </label>
      </form>
    </>
  )
}

export default Form
