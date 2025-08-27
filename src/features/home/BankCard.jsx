
import { Link } from "react-router-dom";
import ROUTE_PATHS from "../../routes/routePaths";

const BankCard = ({ bankLoanData }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
      {bankLoanData.map((item, index) => (
        <Link
          to={ROUTE_PATHS.BANKPRODUCT}
          key={index}
          className="w-full flex flex-col items-center text-center gap-2 rounded-lg bg-white  transition-all ease-in-out duration-500"
        >
          <div className="bg-[#f2f7ff] rounded-[8px] w-full h-[100px] py-4 flex justify-center items-center">
            <img
              src={item.bankCardImg}
              alt={item.bankLoanTitle}
              className="h-16 w-full object-contain"
            />
          </div>
          <div className="text-sm font-normal py-2">{item.bankLoanTitle}</div>
        </Link>
      ))}
    </div>
  );
};

export default BankCard;
