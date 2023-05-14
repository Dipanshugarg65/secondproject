import React from "react";
import vg from "../assets/6.jpg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Jai Shree Ram</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
          Rama was born to Kaushalya and Dasharatha in Ayodhya, the capital of the Kingdom of Kosala. His siblings included Lakshmana, Bharata, and Shatrughna. He married Sita. Though born in a royal family, Rama's life is described in the Hindu texts as one challenged by unexpected changes such as an exile into impoverished and difficult circumstances, ethical questions and moral dilemmas.Of all his travails, the most notable is the kidnapping of Sita by demon-king Ravana, followed by the determined and epic efforts of Rama and Lakshmana to gain her freedom and destroy the evil Ravana against great odds. The entire life story of Rama, Sita and their companions allegorically discusses duties, rights and social responsibilities of an individual. It illustrates dharma and dharmic living through model characters
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Shree Ram Chalisa</h1>
          <p>
            || श्री राम चालीसा ||

            श्री रघुवीर भक्त हितकारी*
            सुन लीजै प्रभु अरज हमारी**

            निशिदिन ध्यान धरै जो कोई*
            ता सम भक्त और नहिं होई**

            ध्यान धरे शिवजी मन माहीं*
            ब्रह्म इन्द्र पार नहिं पाहीं**

            दूत तुम्हार वीर हनुमाना*
            जासु प्रभाव तिहूं पुर जाना**

            || जय श्री राम ||

            तब भुज दण्ड प्रचण्ड कृपाला*
            रावण मारि सुरन प्रतिपाला**


            तुम अनाथ के नाथ गुंसाई*
            दीनन के हो सदा सहाई**

            ब्रह्मादिक तव पारन पावैं*
            सदा ईश तुम्हरो यश गावैं**
            चारिउ वेद भरत हैं साखी*
            तुम भक्तन की लज्जा राखीं**

            गुण गावत शारद मन माहीं*
            सुरपति ताको पार न पाहीं**

            नाम तुम्हार लेत जो कोई*
            ता सम धन्य और नहिं होई**

            राम नाम है अपरम्पारा*
            चारिहु वेदन जाहि पुकारा**

            गणपति नाम तुम्हारो लीन्हो*
            तिनको प्रथम पूज्य तुम कीन्हो**

            शेष रटत नित नाम तुम्हारा*
            महि को भार शीश पर धारा**

            फूल समान रहत सो भारा*
            पाव न कोऊ तुम्हरो पारा**

            भरत नाम तुम्हरो उर धारो*
            तासों कबहुं न रण में हारो**

            || सीता राम ||


          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillFacebook />
              <p>Facebook</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
