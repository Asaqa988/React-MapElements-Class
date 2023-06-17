import React from "react";

function MyProduct() {
  const CourseNameList = [
    {
      name: "React.js",
      price: 199.99,
    },
    {
      name: "Flutter",
      price: 149.99,
    },
    {
      name: "QA Testing",
      price: 99.99,
    },
    {
      name: "Python Programming",
      price: 179.99,
    },
    {
      name: "JavaScript Basics",
      price: 79.99,
    },
    {
      name: "node JS",
      price: 200,
    },
    {
      name: "digital marketing",
      price: 99,
    },
  ];

  const CourseMap = CourseNameList.map((course) => course.name);
  const CoursePriceMap = CourseNameList.map((course) => course.price);

  return (
    <div>
      {CourseMap.map((courseName, index) => (
        <div className="Product-Id" key={index}>
          <b> {courseName} </b>
          <p>
            {CoursePriceMap.map((price, newIndex) => (
              <div key={newIndex}>
                <p> {price}</p>
              </div>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MyProduct;
