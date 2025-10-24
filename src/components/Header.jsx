import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header
                dir="rtl"
                className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-12 py-6 text-white gap-6 sm:gap-0"
            >
                <div className="flex justify-center items-center gap-3 sm:gap-4">
                    <img
                        className="animate-float w-[80px] sm:w-[100px] md:w-[120px]"
                        src="/Untitled_design__1_-removebg-preview.png"
                        alt="Dana clinic"
                    />
                    <h1
                        style={{ fontFamily: "lelazer" }}
                        className="text-2xl sm:text-3xl font-semibold"
                    >
                        دانا كلينيك
                    </h1>
                </div>

                <nav className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    <Link to={'/services'}>
                        <button
                            className="bg-gray-900 px-4 py-2 rounded-xl text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300"
                            style={{ fontFamily: 'lelazer' }}
                        >
                            خدماتنا
                        </button>
                    </Link>
                    <Link to={'/team'}>
                        <button
                            className="bg-gray-900 px-4 py-2 rounded-xl text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300"
                            style={{ fontFamily: 'lelazer' }}
                        >
                            الطاقم الطبي
                        </button>
                    </Link>
                    <Link to={'/offers'}>
                        <button
                            className="bg-gray-900 px-4 py-2 rounded-xl text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300"
                            style={{ fontFamily: 'lelazer' }}
                        >
                            عروضنا
                        </button>
                    </Link>
                    <Link to={'/contact'}>
                        <button
                            className="bg-gray-900 px-4 py-2 rounded-xl text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300"
                            style={{ fontFamily: 'lelazer' }}
                        >
                            تواصل معنا
                        </button>
                    </Link>
                </nav>
            </header>

            <style>
                {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
            </style>
        </>
    );
}
