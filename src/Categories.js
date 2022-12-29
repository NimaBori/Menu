const Categories = ({ category, onChoice }) => {
  return (
    <button
      type="button"
      className="border-0 mx-2 text-capitalize btn btn-outline-success btn-lg"
      onClick={() => onChoice(category)}
    >
      {category}
    </button>
  );
};

export default Categories;
