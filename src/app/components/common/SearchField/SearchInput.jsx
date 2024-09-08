
import { LuSearch } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';

const SearchInput = ({ placeholder, width = '100%', height = '52px', onQueryChange = null }) => {
const {t} = useTranslation();
  return (
    <div className={`relative flex items-center w-full md:w-[${width}] md:max-w-80`} style={{ height }}>
      <span className="absolute left-3 text-gray-500 w-5 h-5 flex items-center justify-center">
        <LuSearch size={20} color='#808080' />
      </span>
      <input
        onChange={onQueryChange}
        type="text"
        className={`pl-10 pr-4 text-xs md:text-sm lg:text-base py-3 w-full md:w-[${width}] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder={t(`SearchInput.${placeholder}`)}
      />
    </div>
  );
};

export default SearchInput;
