import React, { useState, useEffect } from 'react'
import './history.css'
import JSONPretty from 'react-json-pretty'

export default function History(props) {
  const [show, setShow] = useState(false)
  const [history, setHistory] = useState([])

  const handleDeleteAll = () => {
    setHistory([])
    setShow(false);
  }
  useEffect(() => {
    console.log(props.history)
    setHistory([...history, props])
    return () => {
      setHistory([])
    }
  }, [props.history])

  return (
    <section className='history-sec'>
      <div>
        <button className='btn' onClick={() => setShow(!show)}>
          Show History {show && <JSONPretty id='json' data={history} />}
        </button>
        <br />
        {show && (
          <button className='delete-all-history' onClick={handleDeleteAll}>
            Delete All
          </button>
        )}
      </div>
    </section>
  )
}
