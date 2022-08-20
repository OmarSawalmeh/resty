import React, { useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import './form.scss'
import reducer, {
  success,
  body,
  reqParams,
  history,
  getHistory,
} from '../../reducer'
const initialState = {
  data: [],
  body: {},
  reqParams: {},
}

function Form(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isLoading, setIsLoading] = useState(false)

  const [method, setMethod] = useState('')
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
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
  }, [method])

  const browseUrl = async (e) => {
    if (method === 'GET') {
      setTimeout(() => {
        setIsLoading(true)
      })
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)

      setTimeout(async () => {
        const result = await axios.get(url)
        const data = {
          header: result.headers,
          status: result.status,
          count: result.data.length,
          response: result.data,
        }
        setIsLoading(false)
        dispatch(success(data))
        props.handleApiCall(data)
      }, 1000)
    } else if (method === 'POST') {
      setTimeout(() => {
        setIsLoading(true)
      })
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
      setTimeout(async () => {
        const result = await axios.post(url)
        const data = {
          header: result.headers,
          status: result.status,
          count: result.data.length,
          response: result.data,
        }
        setIsLoading(false)
        dispatch(body(data))
        props.handleApiCall(data)
      }, 1000)
    } else if (method === 'DELETE') {
      setTimeout(() => {
        setIsLoading(true)
      })
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
      setTimeout(async () => {
        const result = await axios.delete(url)
        const data = {
          header: result.headers,
          status: result.status,
          count: result.data.length,
          response: result.data,
        }
        props.handleApiCall(data)
      }, 1000)
    } else if (method === 'PUT') {
      setTimeout(() => {
        setIsLoading(true)
      })
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
      setTimeout(async () => {
        const result = await axios.put(url)
        const data = {
          header: result.headers,
          status: result.status,
          count: result.data.length,
          response: result.data,
        }
        props.handleApiCall(data)
      }, 1000)
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
        {isLoading ? <div class='loader'>Loading...</div> : <div></div>}
        {method === 'POST' || method === 'PUT' ? (
          <>
            <h3>To Add or Update the json data:</h3>
            <textarea
              id='bodyText'
              rows={1111}
              cols={1000}
              onInput={textHandler}
            ></textarea>
          </>
        ) : null}
      </form>
    </>
  )
}

export default Form
