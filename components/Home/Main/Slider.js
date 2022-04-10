import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
const images = [
  { url: "https://picsum.photos/seed/a/1600/900" },
  { url: "https://picsum.photos/seed/b/1920/1080" },
  { url: "https://picsum.photos/seed/c/1366/768" },
];

const SliderComp = () => {
  return (
    <Slider
      loop={true}
      autoPlay={true}
      autoPlayInterval={3000}
      imageList={images}
      width={"100%"}
      height={400}
    />
  );
};

export default SliderComp;
