
import { Link } from "react-router-dom";
import ROUTE_PATHS from "../../routes/routePaths";

const BankProductCard = ({ bankProductData }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {bankProductData.map((item, index) => (
                <Link
                    to={ROUTE_PATHS.BANKPRODUCTDETAILS}
                    key={index}
                    className="inline-flex flex-col items-center text-center gap-2 p-4 rounded-lg bg-white shadow hover:shadow-2xl hover:bg-blue-100 transition-all ease-in-out duration-500"
                >
                    <div>
                        <img
                            src={item.bankLogo}
                            alt={item.bankName}
                            className="h-20 w-full object-cover"
                        />
                    </div>
                    <div className="text-sm font-semibold">{item.bankName}</div>
                    <p className="flex gap-2 items-start text-sm">Salaried Starting {item.salPercent} interest </p>
                    <p className="flex gap-2 items-start text-sm">For Businessman {item.busPercent} interest </p>
                </Link>
            ))}
        </div>
    );
};

export default BankProductCard;
