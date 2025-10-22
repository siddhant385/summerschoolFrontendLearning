import React from 'react'

const FeedbackSection = () => {
    return (
        <>
            <div class="containerr">
                <header>J L U G</header>
                <div class="subheading">
                    Empowering the next generation of technologists
                    <br />
                    through comprehensive learning experiences.
                </div>



            <section class="feedback-wrapper">
              <div class="feedback-box">
                <div class="rate">
                  <h2>RATE&nbsp;&nbsp;YOUR&nbsp;&nbsp;EXPERIENCE</h2>
                  <p>Help us to improve by sharing your feedback</p>

                  <div class="card-box">
                    <div class="slider">
                      <div class="card">“I love your workshop...”<div class="photo"><img src="pfp.jpg" alt="image" />  </div><div class="name">Aman Kaur</div><div class="time">2 min ago</div></div>
                      <div class="card">“The hands-on sessions...”<div class="photo"><img src="link here" alt="image" />  </div><div class="name">Rahul Verma</div><div class="time">5 min ago</div></div>
                      <div class="card">“Amazing mentors...”<div class="photo"><img src="link here" alt="image" /></div>  <div class="name">Priya Singh</div><div class="time">10 min ago</div></div>
                    </div>
                  </div>
                  <button class="add-btn">Add Yours</button>

                </div>
              </div>
            </section>


            </div>

            <style jsx>{`@import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');


.containerr {
  flex: 1;
  max-width: 70%;
  // width: 100%;
  margin: 0 auto 100px;
  padding: 2rem 1rem;
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
  width:30%;
  justify-content: center;
}


.feedback-box {
  border: 0.1px #919191 solid;
  border-radius: 16px;
  box-shadow: #888;
  padding: 1.5rem;
  width: 150%;
  background-color: #111;
  // display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 350px;
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
  font-size: 12px;
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
  padding: 0 1rem;
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
    margin-top: 1rem;
  }
}

}`}</style>

        </>
    )
}

export default FeedbackSection