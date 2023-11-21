import { useDarkMode } from "./context/DarkModeContext"
export default function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className="relative dark:bg-veryDarkBlue min-[1152px]:h-screen">
      <div className="absolute w-full h-[250px] bg-[#f5f7ff] dark:bg-veryDarkBlue2 z-10"></div>
      <div className="p-2.4 z-20 relative flex flex-col gap-3.2 max-w-6xl mx-auto">
        <div className="flex flex-col min-[1152px]:flex-row min-[1152px]:justify-between gap-1.6">
          <div className="flex flex-col">
            <h1 className="text-2.4 min-[1152px]:text-3 text-veryDarkBlue3 dark:text-white font-bold">
              Social Media Dashboard
            </h1>
            <p className="font-bold text-darkGrayishBlue dark:text-desaturatedBlue">
              Total Followers: 23,004
            </p>
          </div>
          <hr className="text-darkGrayishBlue min-[1152px]:hidden" />
          <div className="flex justify-between min-[1152px]:gap-1.2 items-center">
            <p className="font-bold text-darkGrayishBlue dark:text-desaturatedBlue">
              Dark Mode
            </p>
            <div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 min-[1152px]:grid-cols-4 gap-1.6 min-[1152px]:gap-2.4">
          <div className="flex flex-col gap-1.6 items-center py-2.4 bg-lightGrayishBlue dark:bg-darkDesaturatedBlue hover:bg-toggleLight/50 dark:hover:bg-desaturatedBlue/20 transition-colors duration-300 border-t-[6px] border-facebook rounded-md shadow-sm cursor-pointer">
            <div className="flex gap-0.8 items-center ">
              <img src="icon-facebook.svg" alt="facebook icon" />
              <p className="text-darkGrayishBlue dark:text-desaturatedBlue text-1.4 font-bold">
                @nathanf
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-veryDarkBlue3 dark:text-white font-bold text-5.2">
                1987
              </p>
              <p className="text-1.2 dark:text-desaturatedBlue uppercase tracking-[5px]">
                Followers
              </p>
            </div>
            <div className="flex items-center gap-0.4">
              <img src="icon-up.svg" alt="up icon" />
              <p className="text-1.4 text-limeGreen font-bold">12 Today</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.6 items-center py-2.4 bg-lightGrayishBlue dark:bg-darkDesaturatedBlue hover:bg-toggleLight/50 dark:hover:bg-desaturatedBlue/20 transition-colors duration-300 border-t-[6px] border-twitter rounded-md shadow-sm cursor-pointer">
            <div className="flex gap-0.8 items-center ">
              <img src="icon-twitter.svg" alt="twitter icon" />
              <p className="text-darkGrayishBlue dark:text-desaturatedBlue text-1.4 font-bold">
                @nathanf
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-veryDarkBlue3 dark:text-white font-bold text-5.2">
                1044
              </p>
              <p className="text-1.2 dark:text-desaturatedBlue uppercase tracking-[5px]">
                Followers
              </p>
            </div>
            <div className="flex items-center gap-0.4">
              <img src="icon-up.svg" alt="up icon" />
              <p className="text-1.4 text-limeGreen font-bold">99 Today</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.6 items-center py-2.4 bg-lightGrayishBlue dark:bg-darkDesaturatedBlue hover:bg-toggleLight/50 dark:hover:bg-desaturatedBlue/20 transition-colors duration-300 rounded-md shadow-sm cursor-pointer border-t-[6px] border-[#fdc468]">
            <div className="flex gap-0.8 items-center">
              <img src="icon-instagram.svg" alt="instagram icon" />
              <p className="text-darkGrayishBlue dark:text-desaturatedBlue text-1.4 font-bold">
                @realnathanf
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-veryDarkBlue3 dark:text-white font-bold text-5.2">
                11k
              </p>
              <p className="text-1.2 dark:text-desaturatedBlue uppercase tracking-[5px]">
                Followers
              </p>
            </div>
            <div className="flex items-center gap-0.4">
              <img src="icon-up.svg" alt="up icon" />
              <p className="text-1.4 text-limeGreen font-bold">1099 Today</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.6 items-center py-2.4 bg-lightGrayishBlue dark:bg-darkDesaturatedBlue hover:bg-toggleLight/50 dark:hover:bg-desaturatedBlue/20 transition-colors duration-300 border-t-[6px] border-youtube rounded-md shadow-sm cursor-pointer">
            <div className="flex gap-0.8 items-center ">
              <img src="icon-youtube.svg" alt="youtube icon" />
              <p className="text-darkGrayishBlue dark:text-desaturatedBlue text-1.4 font-bold">
                Nathan F.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-veryDarkBlue3 dark:text-white font-bold text-5.2">
                8239
              </p>
              <p className="text-1.2 dark:text-desaturatedBlue uppercase tracking-[5px]">
                Subscribers
              </p>
            </div>
            <div className="flex items-center gap-0.4">
              <img src="icon-down.svg" alt="down icon" />
              <p className="text-1.4 text-brightRed font-bold">144 Today</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.6">
          <h2 className="text-2 min-[1152px]:text-2.4 font-bold text-darkGrayishBlue dark:text-white">
            Overview - Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 min-[1152px]:grid-cols-4 gap-1.2 min-[1152px]:gap-1.6">
            <div className="flex flex-col gap-1.6 p-2.4 bg-lightGrayishBlue dark:bg-darkDesaturatedBlue hover:bg-toggleLight/50 dark:hover:bg-desaturatedBlue/20 transition-colors duration-300 rounded-md cursor-pointer">
              <div className="flex justify-between items-center">
                <p className="font-bold text-1.4 text-darkGrayishBlue dark:text-desaturatedBlue">
                  Page Views
                </p>
                <img src="icon-facebook.svg" alt="facebook icon" />
              </div>
              <div className="flex justify-between items-end">
                <p className="font-bold text-3.6 dark:text-white">87</p>
                <div className="flex items-center gap-0.4">
                  <img src="icon-up.svg" alt="up icon" />
                  <p className="text-1.4 text-limeGreen font-bold">3%</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.6 p-2.4 bg-lightGrayishBlue dark:bg-darkDesaturatedBlue hover:bg-toggleLight/50 dark:hover:bg-desaturatedBlue/20 transition-colors duration-300 rounded-md cursor-pointer">
              <div className="flex justify-between items-center">
                <p className="font-bold text-1.4 text-darkGrayishBlue dark:text-desaturatedBlue">
                  Likes
                </p>
                <img src="icon-facebook.svg" alt="facebook icon" />
              </div>
              <div className="flex justify-between items-end">
                <p className="font-bold text-3.6 dark:text-white">52</p>
                <div className="flex items-center gap-0.4">
                  <img src="icon-down.svg" alt="down icon" />
                  <p className="text-1.4 text-brightRed font-bold">2%</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.6 p-2.4 bg-lightGrayishBlue dark:bg-darkDesaturatedBlue hover:bg-toggleLight/50 dark:hover:bg-desaturatedBlue/20 transition-colors duration-300 rounded-md cursor-pointer">
              <div className="flex justify-between items-center">
                <p className="font-bold text-1.4 text-darkGrayishBlue dark:text-desaturatedBlue">
                  Likes
                </p>
                <img src="icon-instagram.svg" alt="instagram icon" />
              </div>
              <div className="flex justify-between items-end">
                <p className="font-bold text-3.6 dark:text-white">5462</p>
                <div className="flex items-center gap-0.4">
                  <img src="icon-up.svg" alt="up icon" />
                  <p className="text-1.4 text-limeGreen font-bold">2257%</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.6 p-2.4 bg-lightGrayishBlue dark:bg-darkDesaturatedBlue hover:bg-toggleLight/50 dark:hover:bg-desaturatedBlue/20 transition-colors duration-300 rounded-md cursor-pointer">
              <div className="flex justify-between items-center">
                <p className="font-bold text-1.4 text-darkGrayishBlue dark:text-desaturatedBlue">
                  Profile Views
                </p>
                <img src="icon-instagram.svg" alt="instagram icon" />
              </div>
              <div className="flex justify-between items-end">
                <p className="font-bold text-3.6 dark:text-white">52k</p>
                <div className="flex items-center gap-0.4">
                  <img src="icon-up.svg" alt="up icon" />
                  <p className="text-1.4 text-limeGreen font-bold">1375%</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.6 p-2.4 bg-lightGrayishBlue dark:bg-darkDesaturatedBlue hover:bg-toggleLight/50 dark:hover:bg-desaturatedBlue/20 transition-colors duration-300 rounded-md cursor-pointer">
              <div className="flex justify-between items-center">
                <p className="font-bold text-1.4 text-darkGrayishBlue dark:text-desaturatedBlue">
                  Retweets
                </p>
                <img src="icon-twitter.svg" alt="twitter icon" />
              </div>
              <div className="flex justify-between items-end">
                <p className="font-bold text-3.6 dark:text-white">117</p>
                <div className="flex items-center gap-0.4">
                  <img src="icon-up.svg" alt="up icon" />
                  <p className="text-1.4 text-limeGreen font-bold">303%</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.6 p-2.4 bg-lightGrayishBlue dark:bg-darkDesaturatedBlue hover:bg-toggleLight/50 dark:hover:bg-desaturatedBlue/20 transition-colors duration-300 rounded-md cursor-pointer">
              <div className="flex justify-between items-center">
                <p className="font-bold text-1.4 text-darkGrayishBlue dark:text-desaturatedBlue">
                  Likes
                </p>
                <img src="icon-twitter.svg" alt="twitter icon" />
              </div>
              <div className="flex justify-between items-end">
                <p className="font-bold text-3.6 dark:text-white">507</p>
                <div className="flex items-center gap-0.4">
                  <img src="icon-up.svg" alt="up icon" />
                  <p className="text-1.4 text-limeGreen font-bold">553%</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.6 p-2.4 bg-lightGrayishBlue dark:bg-darkDesaturatedBlue hover:bg-toggleLight/50 dark:hover:bg-desaturatedBlue/20 transition-colors duration-300 rounded-md cursor-pointer">
              <div className="flex justify-between items-center">
                <p className="font-bold text-1.4 text-darkGrayishBlue dark:text-desaturatedBlue">
                  Likes
                </p>
                <img src="icon-youtube.svg" alt="youtube icon" />
              </div>
              <div className="flex justify-between items-end">
                <p className="font-bold text-3.6 dark:text-white">107</p>
                <div className="flex items-center gap-0.4">
                  <img src="icon-down.svg" alt="down icon" />
                  <p className="text-1.4 text-brightRed font-bold">19%</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.6 p-2.4 bg-lightGrayishBlue dark:bg-darkDesaturatedBlue hover:bg-toggleLight/50 dark:hover:bg-desaturatedBlue/20 transition-colors duration-300 rounded-md cursor-pointer">
              <div className="flex justify-between items-center">
                <p className="font-bold text-1.4 text-darkGrayishBlue dark:text-desaturatedBlue">
                  Total Views
                </p>
                <img src="icon-youtube.svg" alt="youtube icon" />
              </div>
              <div className="flex justify-between items-end">
                <p className="font-bold text-3.6 dark:text-white">1407</p>
                <div className="flex items-center gap-0.4">
                  <img src="icon-down.svg" alt="down icon" />
                  <p className="text-1.4 text-brightRed font-bold">12%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
