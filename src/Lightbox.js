import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

// const images = [
//     '//placekitten.com/1500/500',
//     '//placekitten.com/4000/3000',
//     '//placekitten.com/800/1200',
//     '//placekitten.com/1500/1500'
// ];

export default class LightboxExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {
        const {
            photoIndex,
            isOpen,
        } = this.state;
        return (
            <div className='project__imagecontainer'>

                {this.props.images.map((v,i) => {
                    return (
                      <div onClick={() => this.setState({ isOpen: true, photoIndex: i})} key={String(v)+" "+String(i)} className='project__img'>
                        <img src={v}></img>
                      </div>
                    )}
                  )
                }

                {isOpen &&
                    <Lightbox
                        mainSrc={this.props.images[photoIndex]}
                        nextSrc={this.props.images[(photoIndex + 1) % this.props.images.length]}
                        prevSrc={this.props.images[(photoIndex + this.props.images.length - 1) % this.props.images.length]}

                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + this.props.images.length - 1) % this.props.images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % this.props.images.length,
                        })}
                    />
                }
            </div>
        );
    }
}

                // <button
                //     type="button"
                //     onClick={() => this.setState({ isOpen: true })}
                // >
                //     Open Lightbox
                // </button>