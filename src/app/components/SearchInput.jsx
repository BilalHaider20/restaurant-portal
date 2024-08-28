import searchImage from '../../../public/images/listing/search.png';
import Image from 'next/image';

const SearchInput = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-[379px] h-[52px] pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[18px] font-medium"
        placeholder="Search restaurant"
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6">
        <Image src={searchImage} alt=''/>
      </span>
    </div>
  );
};

export default SearchInput;
