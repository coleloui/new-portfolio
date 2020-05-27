import React from "react";

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollProgress);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollProgress);
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    console.log(scrolled);

    this.setState({
      scrolled: scrolled,
    });
  };

  render() {
    const progressContainerStyle = {
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      height: "40px",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      zIndex: 99,
    };

    const progressBarStyle = {
      height: "40px",
      width: this.state.scrolled,
    };

    return (
      <div>
        <div
          className="progress-container bg-teal-400 rounded-md font-bold h-10 border-4 border-teal-600 grid"
          style={progressContainerStyle}
        >
          <div className="progress-bar" style={progressBarStyle} />
        </div>
      </div>
    );
  }
}
export default Scroll;
