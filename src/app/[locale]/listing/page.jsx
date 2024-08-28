import React from "react";
import WelcomeStats from "../../components/WelcomeStats"
const Listing = () => {
  return (
   <div>
      <WelcomeStats 
      userName="Sir Bilal"
      totalSales={300}
      totalSavings={200}
      expenses={320}
      salesChange="5.67%"
      savingsChange="3.45%"
      expensesChange="11.67%"
    />
   </div>
  );
};

export default Listing;
