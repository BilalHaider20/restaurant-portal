import { RestaurantDropDown } from "./RestaurantDropDown";
import { reservations } from "../data/ReservationData";



const TotalReservations = () => {
  const DropdownOptions = ["Last Week", "Last Month", "Last Year"];

  return (
    <div className="bg-white rounded-lg py-3 shadow-md w-[472px] px-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-heading-clr font-semibold text-2xl tracking-tighter">
          Total Reservations
        </h3>
        <RestaurantDropDown DropdownOptions={DropdownOptions} />
      </div>
      <ul>
        {reservations.map((reservation, index) => (
          <li
            key={index}
            className="flex items-center justify-between py-1 "
          >
            
            {/*left */}
            
            <div className="flex items-center space-x-2 ">
              <span className="text-xl">{reservation.icon}</span>
              <div className="flex-col w-[390px]">
                {/* <div className="w-[348px]"> */}
                    {/* Progress bar */}

                  <div className="bg-gray-200 rounded-full h-2.5 w-[340px]">
                    <div
                      className="bg-orange-500 h-2.5 rounded-full"
                      style={{ width: `${reservation.progress}%` }}
                    ></div>
                  </div>

                  
                   <div className="flex justify-between align-center py-1">
                  <p className="font-medium text-light-text text-sm ">
                    {reservation.category}
                  </p>
                  {reservation.bookings > 0 ? <p className="text-xs text-green-500 text-nowrap">
                      +{reservation.bookings} Bookings
                    </p> :
                    <span className="text-sm text-gray-500">{reservation.amount}</span>
                  }
                    </div>     
                  
                {/* </div> */}
              </div>
            </div>
            {/* {
                reservation.bookings === 0 && (
                    <span className="text-sm text-gray-500">{reservation.amount}</span>
                )
            } */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TotalReservations;
