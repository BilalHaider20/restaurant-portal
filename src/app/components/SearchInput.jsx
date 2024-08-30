import Image from 'next/image';
import searchImage from '../../../public/images/listing/search.png';
import { useTranslations } from 'next-intl';

const SearchInput = ({ width = '379px', height = '52px' }) => {
  const t = useTranslations('SearchInput')

  return (
    <div className={`relative md:w-[${width}]`}>
      <input
        type="text"
        className={`w-full md:w-[${width}] h-[${height}] pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[18px] font-medium`}
        placeholder={t('searchPlaceholder')}
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6">
        <Image src={searchImage} alt="Search icon" />
      </span>
    </div>
  );
};

export default SearchInput;