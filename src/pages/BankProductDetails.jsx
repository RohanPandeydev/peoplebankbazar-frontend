import ImagePath from "../assets/images"
import BankProductBanner from "../features/bank/BankProductBanner"
import BankProductCard from "../features/bank/BankProductCard"
import HeroSlider from "../components/common/HeroSlider"


const bankProductData = [
  {
    bankName: "ICICI Bank",
    bankLogo: ImagePath.IciciBank,
    salPercent: "11%",
    busPercent: "12%",
  },
  {
    bankName: "HDFC Bank",
    bankLogo: ImagePath.HdfcBank,
    salPercent: "11.2%",
    busPercent: "12.5%",
  },
  {
    bankName: "IDFC Bank",
    bankLogo: ImagePath.Idfc,
    salPercent: "11.2%",
    busPercent: "13.5%",
  },
  {
    bankName: "IDFC Bank",
    bankLogo: ImagePath.Idfc,
    salPercent: "11.2%",
    busPercent: "13.5%",
  },
  {
    bankName: "Axis Bank",
    bankLogo: ImagePath.Axis,
    salPercent: "12.2%",
    busPercent: "15.5%",
  },
  {
    bankName: "Kotak Bank",
    bankLogo: ImagePath.Kotak,
    salPercent: "10.3%",
    busPercent: "11.6%",
  },
  {
    bankName: "Bank of Baroda",
    bankLogo: ImagePath.Bob,
    salPercent: "10%",
    busPercent: "11%",
  },
  {
    bankName: "State Bank Of India",
    bankLogo: ImagePath.Sbi,
    salPercent: "9.8%",
    busPercent: "11.3%",
  },
]

const BankProductDetails = () => {
  return (
    <>

      <div className='container mx-auto py-6 lg:py-16 px-6'>
        <HeroSlider />
      </div>


      <div className='container mx-auto py-6 lg:py-4 px-6'>
        <BankProductBanner/>
      </div>

      <div className='container mx-auto py-6 lg:py-16 px-6'>
        <BankProductCard bankProductData={bankProductData} />
      </div>
    </>
  )
}

export default BankProductDetails