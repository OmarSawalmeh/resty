import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './form.scss'

function Form(props) {
  //const [data, setData] = useState();
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [body, setBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  const changeUrl = (e) => {
    setUrl(e.target.value)
  }

  const changeMethod = (method) => {
    setMethod(method)
  }



  // USE EFFECT TO SET METHOD FOR EACTH RENDER OR CLICKS IN ANY ROUTE... 
  //.....
  useEffect(() => {
    setMethod(method)
  }, [method]);


  const browseUrl = async(e)=>{
    if(method==="GET"){
      const result = await axios.get(url)
      const data = {
        header: result.headers,
        status: result.status,
        count: result.data.length,
        response: result.data,
      }
      props.handleApiCall(data);
    }
    else if(method==='POST'){
      const result = await axios.post(url);
      const data = {
        header: result.headers,
        status: result.status,
        count: result.data.length,
        response: result.data,
      }
      props.handleApiCall(data);
    }
    else if (method === 'DELETE') {
      const result = await axios.delete(url);
      const data = {
        header: result.headers,
        status: result.status,
        count: result.data.length,
        response: result.data,
      }
      props.handleApiCall(data);
    }
    else if (method === 'PUT') {
      const result = await axios.put(url);
      const data = {
        header: result.headers,
        status: result.status,
        count: result.data.length,
        response: result.data,
      }
      props.handleApiCall(data);
    }
    
  }

   const textHandler = () => {
     const content = document.getElementById('body').value
     setBody(content)
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
      
      {method === 'POST' || method === 'PUT' ? (
        <>
        <h3>To Add or Update the json data:</h3>
        <textarea id='bodyText' rows={1111} cols={1000} onInput={textHandler}></textarea>
        </>
      ) : null}
    </>
  )
}

export default Form
