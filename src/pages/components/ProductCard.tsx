import heartIcon from "../../assets/ic_heart.svg";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  favoriteCount?: number;
}

interface ProductCardProps {
  item: Product;
}

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-60 object-cover"
      />

      <div className="flex flex-col gap-1 p-4">
        <h2 className="text-lg font-semibold text-gray-900 truncate">
          {item.name}
        </h2>
        <p className="text-gray-700 font-medium">
          {item.price.toLocaleString()}원
        </p>

        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <img src={heartIcon} alt="좋아요" className="w-4 h-4" />
          <span>{item.favoriteCount ?? 0}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
