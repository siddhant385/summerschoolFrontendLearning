import React from 'react'

const FeedbackSection = () => {
    return (
        <>

            <div className="containerr">
                <header>J L U G</header>
                <div className="subheading">
                    Empowering the next generation of technologists
                    <br />
                    through comprehensive learning experiences.
                </div>



                <section className="feedback-wrapper">
                    <div className="feedback-box">
                        <div className="rate">
                            <h2>RATE&nbsp;&nbsp;YOUR&nbsp;&nbsp;EXPERIENCE</h2>
                            <p>Help us to improve by sharing your feedback</p>

                            <div className="card-box">
                                <div className="slider">
                                    <div className="card">“I love your workshop...”<div className="photo"><img src="pfp.jpg" alt="image" />  </div><div className="name">Aman Kaur</div><div className="time">2 min ago</div></div>
                                    <div className="card">“The hands-on sessions...”<div className="photo"><img src="link here" alt="image" />  </div><div className="name">Rahul Verma</div><div className="time">5 min ago</div></div>
                                    <div className="card">“Amazing mentors...”<div className="photo"><img src="link here" alt="image" /></div>  <div className="name">Priya Singh</div><div className="time">10 min ago</div></div>
                                </div>
                            </div>
                            {/* <button className="add-btn">Add Yours</button> */}

                        </div>
                    </div>
                </section>

            </div>

            <style jsx>{`@import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.containerr {
  flex: 1;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem 6rem;
  height: auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}


header {
  text-align: center;
  font-family: 'League Gothic', sans-serif;
  font-size: 6rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #ff6b6b, #f0e130, #3fc1c9, #845ec2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}


.subheading {
  text-align: center;
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 2rem;
}


.feedback-wrapper {
  display: flex;
  justify-content: center;
}


.feedback-box {
  border: 0.1px #919191 solid;
  border-radius: 16px;
  box-shadow: #888;
  padding: 2rem 4rem 2rem;
  width: 125%;
  background-color: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: auto;
  box-sizing: border-box;
  gap: 1rem;
}


.card-box {
  box-shadow: #888;
  padding: 1.5rem;
  width: 100%;
  background-color: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 200px;
  box-sizing: border-box;
  gap: 1rem;
}



.rate {
  text-align: center;
  font-size: 8px;
}


.rate h2 {
  font-size: 22px;
  letter-spacing: 0.1rem;
  margin: 0;
}


.rate p {
  font-size: 9px;
  letter-spacing: 1px;
  color: #aaa;
  margin-top: 0.3rem;
}


.slider {
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}


.card {
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 110%;
  font-size: 1rem;
  font-style: italic;
  background: #e6d8bf;
  padding: 1rem;
  color: #1c1b1a;
  border-radius: 8px;
  opacity: 0;
  transform: translateY(20px);
  animation: slideCard 15s infinite;
}


.card:nth-child(2) {
  animation-delay: 5s;
}

.card:nth-child(3) {
  animation-delay: 10s;
}


@keyframes slideCard {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  5% {
    opacity: 1;
    transform: translateY(0);
  }

  30% {
    opacity: 1;
    transform: translateY(0);
  }

  35% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}



.add-btn {
  height: 32px;
  padding:0 1rem ;
  border: 1px solid #919191;
  background: #919191;
  color: white;
  cursor: pointer;
  font-size: clamp(0.8rem, 3.2vw, 1rem);
  letter-spacing: 1px;
  border-radius: 6px;
  margin-top: 0.5rem;
  align-self: center;
  }



.name {
  font-weight: bold;
  margin-top: 0.5rem;
  color: #5e3f41;
}


.time {
  font-size: 0.8rem;
  color: #938b86;
  margin-top: 0.2rem;
}


.photo {
  border: 4px #000 solid;
  border-radius: 50px;
  height: 1px;
  width: 1px;
  scale: 0.05;
}



@media (max-width: 600px) {
  .feedback-box {
    height: auto;
    padding: 3rem;
  }

  .rate h2 {
  font-size: 12px;
            }


  .slider {
    position: relative;
    min-height: 65px;
  }


  .card {
    font-size: 0.9rem;
  }


  .add-btn {
    width: 55%;
    white-space:nowrap;
    margin-top: 1rem;
    padding:0;
  }
}

`}</style>

        </>
    )
}

export default FeedbackSection