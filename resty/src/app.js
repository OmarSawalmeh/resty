import React, { useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';

function App () {

  const [data, setData] = useState({});
  const apiData = (data) => {
    setData(data)
  }
 

    return (
      <>
        <Header />
        <Form handleApiCall={apiData} />
        <Results data={data} />
        <History history={data}/>
        <Footer />
      </>
    )
}

export default App;