import { useNavigate } from "react-router-dom";

export default function BoardPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/items");
  };

  return (
    <div className="flex flex-col items-center mt-10 gap-6">
      <h1 className="text-center text-2xl font-bold mt-10">
        자유게시판 오셨군요? 빈 페이지입니다.
      </h1>
      <button
        onClick={handleClick}
        className=" w-[150px] h-[42px]
        bg-primary-700 
        text-white 
        text-lg
        font-regular
        rounded-lg
        hover:bg-primary-900"
      >
        중고마켓 구경가기
      </button>
    </div>
  );
}
