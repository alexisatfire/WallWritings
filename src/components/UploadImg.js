import React, { Component } from 'react';
import defaultPic from './default.png';

class UploadImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
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

  render() {
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl} height="10%" width="10%"/>);
    } else {
      imagePreview = <img src={defaultPic} height="10%" width="10%"/>
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label id="pic">
            <input id="inputButton" type="file" onChange={this.handleImageChange} />
            {imagePreview}
          </label>
        </form>

      </div>
    )
  }

}

export default UploadImg;
