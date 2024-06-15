import React from 'react'
import { useState } from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import { Page4 } from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'
import Page8 from './pages/Page8'
import Page9 from './pages/Page9'
import Page10 from './pages/Page10'
import Page11 from './pages/Page11'
const All = () => {
    const [currentComponent , SetCurrentComponent] = useState(0)
  return (
    <div>
    <h1>Hii</h1>
    <div>
    <Page1 SetCurrentComponent={SetCurrentComponent}/>
        {/* {currentComponent === 0 &&(
            <Page1 SetCurrentComponent={SetCurrentComponent}/>
        )} */}
         {/* {currentComponent === 1 &&(
            <Page2 SetCurrentComponent={SetCurrentComponent}/>
        )}
         {currentComponent === 2 &&(
            <Page3 SetCurrentComponent={SetCurrentComponent}/>
        )}
         {currentComponent === 3 &&(
            <Page4 SetCurrentComponent={SetCurrentComponent}/>
        )}
         {currentComponent === 4 &&(
            <Page5 SetCurrentComponent={SetCurrentComponent}/>
        )}
         {currentComponent === 5 &&(
            <Page6 SetCurrentComponent={SetCurrentComponent}/>
        )}
        {currentComponent === 6 &&(
            <Page7 SetCurrentComponent={SetCurrentComponent}/>
        )}
         {currentComponent === 7 &&(
            <Page8 SetCurrentComponent={SetCurrentComponent}/>
        )}
         {currentComponent === 8 &&(
            <Page9 SetCurrentComponent={SetCurrentComponent}/>
        )}
         {currentComponent === 9 &&(
            <Page10 SetCurrentComponent={SetCurrentComponent}/>
        )}
         {currentComponent === 10 &&(
            <Page11 SetCurrentComponent={SetCurrentComponent}/>
        )} */}
    </div>
    </div>
  )
}

export default All