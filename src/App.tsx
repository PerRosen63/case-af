// import { RouterProvider } from "react-router-dom";
// import { useEffect, useReducer } from "react";
// import { JobContext } from "./contexts/JobContext";
// import { ActionType, JobReducer } from "./reducers/jobReducer";
// import { getJobs } from "./service/jobService";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Content from "./components/Content";
import { RouterProvider } from "react-router-dom";
// import "./App.css";
import { router } from "./Router";

function App() {
  /* const [jobs, dispatch] = useReducer(JobReducer, []);

  useEffect(() => {
    const getData = async () => {
      const data = await getJobs();
      dispatch({
        type: ActionType.LOADED,
        payload: JSON.stringify(data),
      });
    };
    if (jobs.length > 0) return; 
    
    getData();
  }, [jobs]); */

  /* function myFunction(e: any) {
    console.log(e);
  } */

  return (
    <>
      {/* <JobContext.Provider value={{ jobs, dispatch }}> */}
      <RouterProvider router={router}></RouterProvider>
      {/* <Header />
      <Content onButtonClick={myFunction} /> {}
      <Footer /> */}
      {/* </JobContext.Provider> */}
    </>
  );
}

export default App;
