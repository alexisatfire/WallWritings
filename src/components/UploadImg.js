import React, { Component } from 'react';
import defaultPic from './default.png';

class UploadImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      rotating: 'rotate-left',
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    if(file){
        reader.readAsDataURL(file)
    }

  }

  rotate = () => {
    //do rotation for all 4 positions
    if(this.state.className === 'rotate-left'){
      this.setState({ className: "rotate-right"});
    } else {
      this.setState({ className: "rotate-left" });
    }
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (
        <div className={this.state.className}>
          <img className="userEntry" src={imagePreviewUrl} />
        </div>
      );
    } else {
      imagePreview = (
        <div className={this.state.className}>
          <img className="userEntry" src={defaultPic} />
        </div>
        );
    }

    return (
      <div>
          <label id="pic">
            <input id="inputButton" type="file" onChange={this.handleImageChange} />
            {imagePreview}
          </label>
          <button onClick={this.rotate}>Rotate</button>
      </div>
    )
  }

}

export default UploadImg;
