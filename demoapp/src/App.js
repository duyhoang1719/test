import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="py-[10px] md:py-[10px] lg:py-[0] flex relative z-10 top-0 left-0 right-0 justify-between items-center px-[20px] w-[100%] bg-[#000] text-white">
        <div className="w-[173px] h-[31px] hover:cursor-pointer">
          <img
            src="https://www.nzme.co.nz/content/dist/352bc16e9f030f66e227.png"
            alt=""
          />
        </div>
        <ul className="hidden md:hidden lg:flex text-white animate-[2s ease-in] mt-[30px]">
          <li className="relative group px-[12px] pt-[15px] h-[70px] text-[14px] font-medium hover:cursor-pointer">
            Advertise
            <span className="absolute bottom-0 left-0  bg-[#00a9e0] w-[100%] h-[10px] group-hover:visible group-hover:opacity-100"></span>
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
            <span className="absolute bottom-0 left-0  bg-[#00a9e0] w-[100%] h-[10px] group-hover:visible group-hover:opacity-100"></span>
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
            <span className="absolute bottom-0 left-0  bg-[#00a9e0] w-[100%] h-[10px] group-hover:visible group-hover:opacity-100"></span>
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
            <span className="absolute bottom-0 left-0  bg-[#00a9e0] w-[100%] h-[10px] group-hover:visible group-hover:opacity-100"></span>
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
            <span className="absolute bottom-0 left-0  bg-[#00a9e0] w-[100%] h-[10px] group-hover:visible group-hover:opacity-100"></span>
          </li>

          <li className="relative group px-[12px] pt-[15px] h-[70px] text-[14px] font-medium hover:cursor-pointer">
            Contact Us
            <span className="absolute bottom-0 left-0  bg-[#00a9e0] w-[100%] h-[10px] group-hover:visible group-hover:opacity-100"></span>
          </li>
        </ul>

        <div className="lg:hidden">
          <label htmlFor="menu">
          <img className="w-[40px] hover:cursor-pointer" src="https://icon-library.com/images/menu-icon-white-png/menu-icon-white-png-27.jpg" alt="" />
          </label>
        </div>
      </div>
      <input hidden className="subnav" type="checkbox" id="menu" />
      <ul className="sublist lg:hidden absolute translate-y-[-150%] left-0 px-[20px] pt-[20px] text-white text-left bg-black w-[100%]">
            <li className="inline-block w-[100%] text-[14px] font-medium">
              <input hidden className="lable1" type="checkbox" id="list1" />
              <label className="block px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] hover:cursor-pointer hover:bg-[#00a9e0]" htmlFor="list1">Advertise</label>
              <ul className="list1 hidden top-[100%] left-0 flex-col bg-black text-[14px] text-left">
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Rates, Specifications & Deadlines
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Resources
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Register
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  NZME Digital Performance Marketing
                </li>
              </ul>
            </li>

            <li className="inline-block w-[100%] text-[14px] font-medium">
              <input hidden className="lable2" type="checkbox" id="list2" />
              <label className="block px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] hover:cursor-pointer hover:bg-[#00a9e0]" htmlFor="list2">NZME Brands</label>
              <ul className="list2 hidden top-[100%] left-0 flex-col bg-black text-[14px] text-left">
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  NZME Publishing
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  NZME Audio
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  NZME Digital
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  NZME Events
                </li>
              </ul>
            </li>

            <li className="inline-block w-[100%] text-[14px] font-medium">
              <input hidden className="lable3" type="checkbox" id="list3" />
              <label className="block px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] hover:cursor-pointer hover:bg-[#00a9e0]" htmlFor="list3">NZME Brands</label>
              <ul className="list3 hidden top-[100%] left-0 flex-col bg-black text-[14px] text-left group-hover:block">
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Corporate Governance
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Board Members
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Executive Team
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Our Sustainability Commitment
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Terms & Conditions
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Careers
                </li>
              </ul>
            </li>

            <li className="inline-block w-[100%] text-[14px] font-medium">
              <input hidden className="lable4" type="checkbox" id="list4" />
              <label className="block px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] hover:cursor-pointer hover:bg-[#00a9e0]" htmlFor="list4">NZME Brands</label>
              <ul className="hidden list4 w-[100%] h-[auto] flex-col bg-black text-[14px] text-left">
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  NZX/ASX Announcements
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Financial Reports
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Share Price
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Dividends
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Major Shareholders
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Webcasts
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Analyst Coverage
                </li>
                <li className="w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] text-[#777777] font-medium hover:cursor-pointer hover:text-white">
                  Contact
                </li>
              </ul>
            </li>

            <li className="inline-block w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] font-medium hover:cursor-pointer hover:bg-[#00a9e0]">
              News
            </li>

            <li className="inline-block w-[100%] px-[20px] py-[10px] border-t-[1px] border-[rgb(52,52,52)] text-[14px] font-medium hover:cursor-pointer hover:bg-[#00a9e0]">
              Contact Us
              <span className="absolute hidden bottom-0 left-0 transition-[1s ease-in] bg-[#00a9e0] w-[100%] h-[10px] group-hover:block"></span>
            </li>
          </ul>
    </div>
  );
}

export default App;
