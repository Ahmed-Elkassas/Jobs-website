import React, { useState } from "react";
import items from "./JobsData";

const Categories = ({ categories, filterItem }) => {
  const [activeClass, setActiveClass] = useState("");

  const activeFn = () => {
    return setActiveClass("active");
  };

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
              className={`filter-category`}
              key={index}
              onClick={() => {
                filterItem(jobType);
                // activeFn();
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
