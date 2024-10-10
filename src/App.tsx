import "./css/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { JobContext } from "./contexts/JobContext";
import { useReducer, useEffect } from "react";
import { JobReducer, ActionType } from "./reducers/JobReducer";
import { getJobs } from "./service/jobService";
import { OccupationProvider } from "./contexts/OccupationContext";
import OccupationsFetcher from "./components/OccupationsFetcher";

function App() {
  const [state, dispatch] = useReducer(JobReducer, {
    jobs: [],
    filteredJobs: [],
  });

  useEffect(() => {
    const getData = async () => {
      const data = await getJobs();
      dispatch({
        type: ActionType.LOADED,
        payload: JSON.stringify(data),
      });
    };
    getData();
  }, []);

  return (
    <>
      <OccupationProvider>
        <OccupationsFetcher />
        <JobContext.Provider value={{ ...state, dispatch }}>
          <RouterProvider router={router}></RouterProvider>
        </JobContext.Provider>
      </OccupationProvider>
    </>
  );
}

export default App;
