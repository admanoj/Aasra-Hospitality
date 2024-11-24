import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/h.png",
    caption: "Our grand lobby welcomes you in style",
  },
  {
    src: "/ha.jpg",
    caption: "Luxurious rooms for a comfortable stay",
  },
  { src: "/ho.jpg", caption: "Relax by our stunning pool" },
  {
    src: "/ha.jpg",
    caption: "Enjoy exquisite dining experiences",
  },
  {
    src: "h.jpg",
    caption: "A view of our beautiful hotel exterior",
  },
];

class HotelImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isAutoPlaying: true,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.startAutoPlay();
  }

  componentWillUnmount() {
    this.stopAutoPlay();
  }

  startAutoPlay = () => {
    if (this.state.isAutoPlaying) {
      this.intervalId = setInterval(this.nextSlide, 5000);
    }
  };

  stopAutoPlay = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  };

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % images.length,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + images.length) % images.length,
    }));
  };

  handleMouseEnter = () => {
    this.setState({ isAutoPlaying: false });
    this.stopAutoPlay();
  };

  handleMouseLeave = () => {
    this.setState({ isAutoPlaying: true });
    this.startAutoPlay();
  };

  goToSlide = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    const { currentIndex } = this.state;

    return (
      <div
        className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-full flex-shrink-0">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-sm">
                {image.caption}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={this.prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={this.nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => this.goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default HotelImageSlider;
