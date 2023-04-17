import React, { Component } from "react";
import myImage from "../../assets/alma.jpg";
import myImage2 from "../../assets/milan.jpg";
import { Pannellum } from "pannellum-react";

export default class ImageDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaPhoto: myImage,
      yaww: 180,
      test: false,
      updateText: "initial",
      author: "author",
    };
    this.ref = React.createRef();
  }

  hanldeClickImage = (evt, args) => {
    console.log(args.name);
    this.setState({
      mediaPhoto: myImage2,
    });
  };

  handleClick = () => {
    this.setState({
      mediaPhoto: myImage2,
      test: false,
    });
  };

  render() {
    return (
      <div className="image_main">
        <div className="pannellum_div">
          <Pannellum
            ref={this.ref}
            width="1200px"
            height="700px"
            image={this.state.mediaPhoto}
            pitch={10}
            yaw={this.state.yaww}
            hfov={120}
            autoLoad
            author={this.state.author}
            title="">
            <Pannellum.Hotspot
              type="info"
              pitch={11}
              yaw={-167}
              text="Info Hotspot Text 3"
              URL="https://github.com/farminf"
            />

            <Pannellum.Hotspot
              type="custom"
              pitch={31}
              yaw={150}
              handleClick={(evt, args) => this.hanldeClickImage(evt, args)}
              handleClickArg={{ name: "test" }}
            />
          </Pannellum>
        </div>
      </div>
    );
  }
}
