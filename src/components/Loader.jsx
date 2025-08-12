import { BookLoader } from "react-awesome-loaders";

export const BookLoaderComponent = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>

            {/* Main loading container */}
            <div className="relative z-10 flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl">
                {/* Loader container with glow effect */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                    <div className="relative">
                        <BookLoader
                            background={"linear-gradient(135deg, #faeb60ff, #4645F6, #ff6b6b)"}
                            desktopSize={"120px"}
                            mobileSize={"100px"}
                            textColor={"#ffffff"}
                        />
                    </div>
                </div>
                
                {/* Loading text with typewriter effect */}
                <div className="text-center mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 animate-pulse">
                        ...
                    </h2>
                    <p className="text-white/70 text-sm md:text-base font-light tracking-wide">
                        Please wait while we prepare something amazing for you...
                    </p>
                </div>
                
                {/* Progress bar */}
                <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-purple-600 rounded-full animate-pulse transform translate-x-0 transition-transform duration-1000"></div>
                </div>
                
                {/* Animated dots */}
                <div className="flex space-x-2">
                    {[...Array(5)].map((_, i) => (
                        <div 
                            key={i}
                            className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-full animate-bounce"
                            style={{animationDelay: `${i * 0.1}s`, animationDuration: '1.4s'}}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Inline styles for custom animations */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
                    10% { opacity: 1; }
                    50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(-40px) rotate(360deg); opacity: 0; }
                }
                .animate-float {
                    animation: float linear infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
};