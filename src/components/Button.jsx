import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/additem");
  };

  return (
    <button
      onClick={handleClick}
      className="
        w-[133px] h-[42px]
        bg-primary-700 
        text-white 
        text-lg
        font-regular
        rounded-lg
        hover:bg-primary-900
      "
    >
      상품 등록하기
    </button>
  );
}

export default Button;
