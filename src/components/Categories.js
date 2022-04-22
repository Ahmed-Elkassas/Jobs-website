import React, { useState } from "react";
import items from "./JobsData";

const Categories = ({ categories, filterItem }) => {
  const [selectedType, setSelectedType] = useState(0);

  return (
    <section>
      <p style={{ marginBottom: "10px" }}>
        we have <span style={{ color: " blue" }}>{items.length}</span> potential
        jobs for you.
      </p>
      <div className="btn-container">
        {categories.map((jobType, index) => {
          return (
            <button
              type="button"
              className={`filter-category ${
                index === selectedType && "active"
              }`}
              key={index}
              onClick={() => {
                filterItem(jobType);
                setSelectedType(index);
              }}
            >
              {jobType}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
