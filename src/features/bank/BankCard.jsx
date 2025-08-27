/* eslint-disable react/prop-types */
const BankCard = ({ name, image, highlights, link }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full gap-10">
      <img
        src={image}
        alt={name}
        className="w-auto h-auto object-contain"
      />

      <div className="flex flex-col items-start gap-3 w-full md:w-6/12 pl-10">
        <h1 className="text-2xl lg:text-4xl font-bold">{name}</h1>

        <ul className="mt-4 lg:pl-10 list-disc list-inside">
          {highlights.map((point, index) => (
            <li
              key={index}
              className="text-sm md:text-md text-gray-700 font-light mb-2"
            >
              {point}
            </li>
          ))}
        </ul>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#007AFF] py-2 px-4 text-sm md:text-lg rounded-md cursor-pointer text-white md:ml-10"
        >
          Visit Official Page
        </a>
      </div>
    </div>
  );
};

export default BankCard;
