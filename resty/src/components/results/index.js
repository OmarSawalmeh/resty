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

    <section>
      {/* <pre>{props.data ? prettyjson(props.data, false, 2) : null}</pre> */}
      {/* <JSONPretty id='json-pretty' data={props.data.data} /> */}
      
      <JSONPretty id='json-pretty' data={props.data} />
    </section>
  )
}

export default Results
