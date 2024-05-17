import React from "react";
import "./happyClient.style.css";
import { Stack } from "@mui/material";
import One from "./img/one.png";
import Two from "./img/two.png";
import Three from "./img/three.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const Card = ({ img, Title, Subtitle, Para }) => {};
const Card = ({ img, Title, Para, Subtitle, classNm }) => {
  return (
    <div className={classNm}>
      <div>
        <div>
          <img src={img} alt="gift" className="giftLogohappy" />
        </div>
        <h1 className="cardHead2">{Title}</h1>
        <p className="cardHead2">{Subtitle}</p>
        <p className="cardPara">{Para}</p>
        <button className="readMoreBtn">Read More</button>
      </div>
    </div>
  );
};

export default function AppClient() {
  const [swiperRef, setSwiperRef] = React.useState(null);
  const data = [
    {
      img: One,
      title: "Jane Cooper",
      subtitle: "Ceo of Hunt",
      //   classNm: "card",
      para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      img: Two,
      title: "Devon Lane",
      subtitle: "Ceo of Hunt",
      //   classNm: "card specialCard",
      para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      img: Three,
      title: "Robert Fox",
      subtitle: "Ceo of Hunt",
      // classNm: "card",
      para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      img: One,
      title: "Jane Cooper",
      subtitle: "Ceo of Hunt",
      //   classNm: "card",
      para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      img: Two,
      title: "Devon Lane",
      subtitle: "Ceo of Hunt",
      //   classNm: "card specialCard",
      para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      img: Three,
      title: "Robert Fox",
      subtitle: "Ceo of Hunt",
      // classNm: "card",
      para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
  ];

  const goNext = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  return (
    <Stack
      className="happyClientsMainBg"
      justifyContent="center"
      alignItems="center"
    >
      <Stack sx={{ width: "80vw", my: "4rem" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignContent="center"
          sx={{ mx: "1rem", my: "3rem" }}
        >
          <h1 className="happyClientsMainHeading">
            What says our
            <br />
            happy Clients
          </h1>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <ArrowBackIcon className="ArrowsInHappyClient1" onClick={goPrev} />
            <ArrowForwardIcon
              className="ArrowsInHappyClient2"
              onClick={goNext}
            />
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="center" alignContent="center">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={9}
            // initialSlide={data.length}
            spaceBetween={30}
            navigation={false} // Disable default navigation
            modules={[Navigation]}
            className="mySwiper adjustSwiper"
            breakpoints={{
              400: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 3,
              },
              1600: {
                slidesPerView: 3,
              },
            }}
          >
            {data.map((item, ind) => (
              <SwiperSlide key={item.key}>
                <Card
                  img={item.img}
                  Title={item.title}
                  Subtitle={item.subtitle}
                  classNm={ind % 2 == 0 ? "card" : "card specialCard"}
                  Para={item.para}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Stack>
    </Stack>
  );
}
