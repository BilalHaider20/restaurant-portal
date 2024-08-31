import { useState } from 'react';

const Switcher = () => {
  const [activeTab, setActiveTab] = useState('Branches');

  const tabs = ['Branches', 'Promotions', 'Members'];

  return (
    <div className="flex justify-center">
      <div className="relative flex border rounded-full bg-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded-full ${
              activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-transparent text-gray-600'
            } transition-transform duration-300`}
            style={{
                width: `${100 / tabs.length}%`, // Adjust width based on the number of tabs
                transform: `translateX(${tabs.indexOf(activeTab) * (100 / tabs.length)}%)`,
              }}
          >
            {tab}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default Switcher;

{/* <div className="relative bg-[#FFFFFF1A] py-2 px-4 rounded-full text-white w-fit flex  items-center">
<div className="flex gap-7 text-sm font-light ">
  <button
    onClick={() => handleClick('One-Way')}
  >
    {t('One-Way')}
  </button>
  <button
    onClick={() => handleClick('Round-Way')}
  >
    {t('Round-Way')}
  </button>
  <button
  //   className={`tripToggle ${active === 'Multi-City' ? 'text-blue-500' : 'text-gray-500'}`}
    onClick={() => handleClick('Multi-City')}
  >
    {t('Multi-City')}
  </button>
</div>
<div
  className= {`absolute z-10 bottom-0 ${dir === 'rtl' ? 'w-[85px]' : 'w-[93px]' }  h-full bg-[#FFFFFF33] rounded-full flex items-center justify-center pointer-events-none transition-left duration-300 ease-in-out`}
  style={ dir === 'rtl' ?  { right: `calc(${active === 'One-Way' ? '0.2rem' 
    : active === 'Round-Way' ? '83px' : '173px'} - 0.3rem)` } : 
    { left: `calc(${active === 'One-Way' ? '0.2rem' 
      : active === 'Round-Way' ? '100px' : '200px'} - 0.3rem)` } }
>
</div>
</div> */}