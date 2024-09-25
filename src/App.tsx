import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { JobContext } from "./contexts/JobContext";
import { useEffect, useReducer } from "react";
import { ActionType, JobReducer } from "./reducers/jobReducer";
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



  return <>
  <JobContext.Provider value={{ jobs, dispatch}}>
    <RouterProvider router={router}></RouterProvider>
  </JobContext.Provider>
  </>;
}

export default App;
