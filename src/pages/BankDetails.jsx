import ImagePath from "../assets/images";
import BankCard from "../features/bank/BankCard";

const BankDetails = () => {
  const bankData = {
    name: "ICICI Bank Personal Loan",
    image: ImagePath.IciciBank,
    highlights: [
      "ICICI Bank Personal Loan – Quick Funds When You Need Them",
      "Get Instant Personal Loan from ICICI Bank – No Collateral Required",
      "Flexible ICICI Personal Loans with Fast Approval",
      "ICICI Bank – Your Partner for Easy Personal Financing",
      "Turn Goals into Reality with ICICI Bank Personal Loans",
    ],
    link: "https://www.icicibank.com/Personal-Banking/loans/personal-loan/index.page",
  };

  return (
    <div className="container mx-auto py-4 lg:py-16 px-6">
      <BankCard {...bankData} />
    </div>
  );
};

export default BankDetails;
