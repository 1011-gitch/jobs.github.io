import React, { useEffect, useState } from "react";
import { vacancies as jobs } from "../data";
import Vacancy from "../component/vacancy";
const Home = () => {
  const [vacancies, setvacancies] = useState([]);
  useEffect(() => {
    setvacancies(jobs);
    console.log(jobs);
  }, [vacancies]);
  return (
    <div>
      <div className="App container">
        <h1 className="has-text-weight-bold is-size-3">
          Find your dream job today
        </h1>
        <h3>Apply for any vaccancies below</h3>
        <div className="mt-6">
          <h2 className="has-text-weight-bold is-size-4">Create a vaccancy</h2>
        </div>
        {vacancies.map((vacancy) => {
          return <Vacancy vacancy={vacancy}></Vacancy>;
        })}
      </div>
    </div>
  );
};
export default Home;
