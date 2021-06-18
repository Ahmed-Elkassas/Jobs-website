import React, { useState } from 'react';
import Maps from './components/Maps';
import Jobs from './components/Jobs';
import items from './components/JobsData';
import Categories from './components/Categories';
import JobSearch from './components/JobSearch';
import JobCount from './components/JobCount';
import CarouselSlider from './components/CarouselSlider/CarouselSlider';

import './App.css'; 

const fiterCategories = ['allJobs', ...new Set(items.map((item) => item.jobType))];

const App = () => {

  const [jobItem, setJobItem] = useState(items);
  const [categories, setCategories] = useState(fiterCategories);

  const filterItem = (jobType) => {

    if (jobType === "allJobs") {
      setJobItem(items);
      return;
    }
    const newItem = items.filter((item) => item.jobType === jobType)
    setJobItem(newItem);
  };

  return (
    <div className="App">
     <Maps />
        <div className="container">
          <JobSearch />
          <Categories categories={categories} filterItem={filterItem} />
        </div>
        <Jobs items={jobItem} />
        <JobCount />
        <CarouselSlider />
     </div>
  );
}

export default App;
