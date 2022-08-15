import React from 'react'
import './result.scss'
import JSONPretty from 'react-json-pretty'

function Results(props) {
  return (
    // <section>
    //   <div>
    //     <h1>Header</h1>
    //     <pre>
    //       {props.data ? JSON.stringify(props.data.headers, undefined, 2) : null}
    //     </pre>
    //     <h1>Data</h1>
    //     <pre>
    //       {props.data ? JSON.stringify(props.data.data, undefined, 2) : null}
    //     </pre>
    //   </div>
    // </section>

    <form>
      <JSONPretty id='json' data={props.data} />
    </form>
  )
}

export default Results
