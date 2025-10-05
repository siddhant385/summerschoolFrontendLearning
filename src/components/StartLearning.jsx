
import './App.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function StartLearning() {
    useGSAP(() => {
        gsap.from('svg', {
            x: 170,          // smaller value for flexible movement
            rotate: 360,
            duration: 3,
            repeat: -1,
            yoyo: true,
            scale: 4,        // keep scale reasonable
            ease: "power2.out"
        });

        gsap.from('.button .btnTitle', {
            x: 170,          // use x instead of left for better performance
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power2.out"
        });

    })

    return (
        <>

            <div className="button">
                <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 0L13.6956 8.49535L23 10.5L13.6956 12.5046L11.5 21L9.30443 12.5046L0 10.5L9.30443 8.49535L11.5 0Z" fill="url(#paint0_linear_480_85)" />
                    <path d="M11.5 0L13.6956 8.49535L23 10.5L13.6956 12.5046L11.5 21L9.30443 12.5046L0 10.5L9.30443 8.49535L11.5 0Z" fill="url(#paint1_linear_480_85)" fill-opacity="0.41" />
                    <defs>
                        <linearGradient id="paint0_linear_480_85" x1="11.5" y1="4.2" x2="11.5" y2="21" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F32222" />
                            <stop offset="1" stop-color="#0ABF2B" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_480_85" x1="2.3" y1="10.5" x2="23" y2="10.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EAFF07" />
                            <stop offset="1" stop-color="#7609FB" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="btnTitle font-Inter">Start Learning</div>
            </div>

            <style>{`
    @import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

html, body {
  height: 100%;
  width: 100%;
  background-color: black;
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
}

/* ✅ Center button in screen */
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* center horizontally & vertically */

  background-color: #010101;
  border: 1px solid #fff;
  border-radius: 25px;

  padding: 10px 20px;
  height: auto;
  width: fit-content;

  color: white;
  overflow: hidden;
  white-space: nowrap;
}

.button svg {
  height: 25px;
  width: 25px;
  flex-shrink: 0;
}

.button .btnTitle {
  font-weight: 200;
  font-size: 1.2rem;
  line-height: 1;
  letter-spacing: 1px;
  color: white;
  font-family: 'Inter',sans-serif;
  position: relative;
}

/* ✅ Responsive Adjustments */
@media (max-width: 768px) {
  .button {
    gap: 8px;
    padding: 8px 16px;
  }

  .button svg {
    height: 20px;
    width: 20px;
  }

  .button .btnTitle {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .button {
    gap: 6px;
    padding: 6px 12px;
    border-radius: 20px;
  }

  .button svg {
    height: 18px;
    width: 18px;
  }

  .button .btnTitle {
    font-size: 0.9rem;
  }
}
    `}</style>

        </>
    )
}

export default StartLearning