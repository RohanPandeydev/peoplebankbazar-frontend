import React from "react";
import DownloadApp from "../features/home/DownloadApp";
import AdvertiseSlider from "../features/home/AdvertiseSlider";
import BankCard from "../features/home/BankCard";
import ImagePath from "../assets/images";
import Banner from "../features/home/Banner";

const bankLoanData = [
    {
        bankLoanTitle: "Credit Card",
        bankCardImg: ImagePath.credit,
    },
    {
        bankLoanTitle: "Personal Loan",
        bankCardImg: ImagePath.personalLoan,
    },
    {
        bankLoanTitle: "Business Loan",
        bankCardImg: ImagePath.business,
    },
    {
        bankLoanTitle: "Home Loan",
        bankCardImg: ImagePath.home,
    },
    {
        bankLoanTitle: "Education Loan",
        bankCardImg: ImagePath.educationLoan,
    },
    {
        bankLoanTitle: "Car Loan",
        bankCardImg: ImagePath.car,
    },
    {
        bankLoanTitle: "Gold Loan",
        bankCardImg: ImagePath.GoldLoan,
    },
    {
        bankLoanTitle: "Loan Against Property",
        bankCardImg: ImagePath.LoanAgainstProperty,
    },
    {
        bankLoanTitle: "Transfer Home Loan",
        bankCardImg: ImagePath.TransferHomeLoan,
    },
];

const bankInsuranceData = [
    {
        bankLoanTitle: "Health Insurance",
        bankCardImg: ImagePath.life,
    },
    {
        bankLoanTitle: "Term Life Insurance",
        bankCardImg: ImagePath.term,
    },
    {
        bankLoanTitle: "Car Insurance",
        bankCardImg: ImagePath.CarInsurance,
    },
    {
        bankLoanTitle: "Mutual Funds",
        bankCardImg: ImagePath.MutualFund,
    },
    {
        bankLoanTitle: "SIP",
        bankCardImg: ImagePath.business,
    },
    {
        bankLoanTitle: "Stocks/Shares",
        bankCardImg: ImagePath.stock,
    },
];


const Home = () => {
    return (
        <>
            {/* Hero Banner */}
            <section className="container mx-auto py-4 px-6">
                <Banner />
            </section>

            {/* Bank Products */}
            <section className="container mx-auto py-4 px-6">
                <BankCard bankLoanData={bankLoanData} />
            </section>

            {/* Investments & Insurance */}
            <section className="container mx-auto py-8 px-6">
                <h3 className="text-2xl text-blue-600 font-semibold uppercase mb-3">Also Buy</h3>
                <BankCard bankLoanData={bankInsuranceData} />
            </section>

            {/* Advertisement Slider */}
            <section className="bg-blue-100 py-4 px-6">
                <div className="container mx-auto">
                    <AdvertiseSlider />
                </div>
            </section>

            {/* Download App */}
            <DownloadApp />
        </>
    );
};

export default Home;


