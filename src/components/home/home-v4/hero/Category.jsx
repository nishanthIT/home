import { Link } from "react-router-dom";

const Category = () => {
  const categories = [
    { icon: "flaticon-home-1", text: "Houses" },
    { icon: "flaticon-corporation", text: "Apartments" },
    { icon: "flaticon-network", text: "Office" },
    { icon: "flaticon-garden", text: "Villa" },
  ];

  return (
    <div className="home4-icon-style mt30 d-none d-sm-flex animate-up-4">
      {categories.map((category, index) => (
        <Link
          key={index}
          to=""
          className="d-flex align-items-center dark-color ff-heading me-4"
        >
          <i className={`icon mr10 ${category.icon}`} /> {category.text}
        </Link>
      ))}
    </div>
  );
};

export default Category;
