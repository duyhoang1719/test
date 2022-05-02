import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex justify-between px-[20px] w-[100%] bg-[#000] text-white">
        <div className="w-[173px] h-[31px] mt-[30px]">
          <img
            src="https://www.nzme.co.nz/content/dist/352bc16e9f030f66e227.png"
            alt=""
          />
        </div>
        <ul className="flex text-white animate-[2s ease-in] mt-[30px]">
          <li className="relative group px-[12px] pt-[15px] h-[70px] text-[14px] font-medium hover:cursor-pointer">
            Advertise
            <span className="absolute hidden bottom-0 left-0 animate-[0.5 ease-linear] bg-[#00a9e0] w-[100%] h-[10px] group-hover:block"></span>
            <ul className="absolute hidden top-[100%] left-0 flex-col bg-black text-[14px] text-left group-hover:block">
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Rates, Specifications & Deadlines
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Resources
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Register
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                NZME Digital Performance Marketing
              </li>
            </ul>
          </li>

          <li className="relative group px-[12px] pt-[15px] h-[70px] text-[14px] font-medium hover:cursor-pointer">
            NZME Brands
            <span className="absolute hidden bottom-0 left-0 animate-[0.5 ease-linear] bg-[#00a9e0] w-[100%] h-[10px] group-hover:block"></span>
            <ul className="absolute hidden top-[100%] left-0 flex-col bg-black text-[14px] text-left group-hover:block">
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                NZME Publishing
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                NZME Audio
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                NZME Digital
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                NZME Events
              </li>
            </ul>
          </li>

          <li className="relative group px-[12px] pt-[15px] h-[70px] text-[14px] font-medium hover:cursor-pointer">
            About NZME
            <span className="absolute hidden bottom-0 left-0 animate-[0.5 ease-linear] bg-[#00a9e0] w-[100%] h-[10px] group-hover:block"></span>
            <ul className="absolute hidden top-[100%] left-0 flex-col bg-black text-[14px] text-left group-hover:block">
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Corporate Governance
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Board Members
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Executive Team
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Our Sustainability Commitment
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Terms & Conditions
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Careers
              </li>
            </ul>
          </li>

          <li className="relative group px-[12px] pt-[15px] h-[70px] text-[14px] font-medium hover:cursor-pointer">
            Investor Relations
            <span className="absolute hidden bottom-0 left-0 animate-[0.5 ease-linear] bg-[#00a9e0] w-[100%] h-[10px] group-hover:block"></span>
            <ul className="absolute hidden top-[100%] left-0 flex-col bg-black text-[14px] text-left group-hover:block">
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                NZX/ASX Announcements
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Financial Reports
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Share Price
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Dividends
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Major Shareholders
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Webcasts
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Analyst Coverage
              </li>
              <li className="px-[20px] py-[8px] hover:bg-[#00a9e0] cursor-pointer min-w-[300px]">
                Contact
              </li>
            </ul>
          </li>

          <li className="relative group px-[12px] pt-[15px] h-[70px] text-[14px] font-medium hover:cursor-pointer">
            News
            <span className="absolute hidden bottom-0 left-0 animate-[0.5 ease-linear] bg-[#00a9e0] w-[100%] h-[10px] group-hover:block"></span>
          </li>

          <li className="relative group px-[12px] pt-[15px] h-[70px] text-[14px] font-medium hover:cursor-pointer">
            Contact Us
            <span className="absolute hidden bottom-0 left-0 animate-[0.5 ease-linear] bg-[#00a9e0] w-[100%] h-[10px] group-hover:block"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
