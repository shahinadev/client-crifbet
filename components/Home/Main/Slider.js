import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
const images = [
  { url: "https://crifbet.com/admin/upload/d6e825f13d.jpg" },
  { url: "https://crifbet.com/admin/upload/4e0a566b85.jpg" },
  { url: "https://crifbet.com/admin/upload/b0704a092d.jpg" },
];

const SliderComp = () => {
  return (
    <Slider
      loop={true}
      autoPlay={true}
      autoPlayInterval={3000}
      imageList={images}
      width={"100%"}
      height={313}
    />
  );
};

export default SliderComp;
