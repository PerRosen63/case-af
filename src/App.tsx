import "./App.css";
import { RouterProvider } from "react-router-dom";
import { JobContext } from "./contexts/JobContext";
import { router } from "./Router";
import { useReducer, useEffect } from "react";
import { JobReducer, ActionType } from "./reducers/JobReducer";
import { getJobs } from "./service/jobService";

function App() {
   const [jobs, dispatch] = useReducer(JobReducer, []);

   useEffect(() => {
    const getData = async () => {
      const data = await getJobs();
      dispatch({
        type: ActionType.LOADED,
        payload: JSON.stringify(data),
      });
    };
    if (jobs.length > 0 ) return; 
    getData();
  }); 
/*
  function myFunction(e: string) {
    console.log(e);
  }
*/
  return (
    <>
       <JobContext.Provider value={{ jobs, dispatch }}>
      <RouterProvider router={router}>
      
      {/*<Content onButtonClick={myFunction} /> {}*/}
      </RouterProvider> 
      </JobContext.Provider> 
    </>
  );
}

export default App;
