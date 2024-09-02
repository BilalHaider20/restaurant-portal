import { RestaurantDropDown } from "./RestaurantDropDown";
import { reservations } from "../../utils/DashboardData/ReservationData";
import { useTranslations } from "next-intl";


const TotalReservations = () => {
  const t = useTranslations('dashboard');
  const tt = useTranslations('dashboard.IntervalDropDown');
  const DropdownOptions = [`${tt("Last Week")}`, `${tt("Last Month")}`,`${tt("Last Year")}`];
  return (
    <div className="bg-white rounded-lg py-3 shadow-md min-w-[300px] sm:min-w-[472px] px-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-heading-clr font-semibold text-xl sm:text-2xl tracking-tighter">
          {t('totalreservations')}
        </h3>
        <RestaurantDropDown DropdownOptions={DropdownOptions} />
      </div>
      <ul>
        {reservations.map((reservation, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row items-center justify-between py-1 space-y-2 sm:space-y-0"
          >

            {/* Left Side */}
            <div className="flex items-center space-x-2 w-full">
              <span className="text-2xl">{reservation.icon}</span>
              <div className="flex-col w-full py-1">

                {/* Progress bar */}
                <div className="bg-gray-200 rounded-full h-2.5 w-[90%]">
                  <div
                    className="bg-orange-500 h-2.5 rounded-full"
                    style={{ width: `${reservation.progress}%` }}
                  ></div>
                </div>

                <div className="flex justify-between align-center mt-1">
                  <p className="font-medium text-light-text text-sm">
                    {reservation.category}
                  </p>
                  {reservation.bookings > 0 ? (
                    <p className="text-xs text-green-500 text-nowrap">
                      +{reservation.bookings} {t('booking')}
                    </p>
                  ) : (
                    <span className="text-sm text-gray-500">{reservation.amount}</span>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default TotalReservations;
