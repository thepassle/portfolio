import React, { Component } from 'react';
import Lightbox from './Lightbox';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className='project'>
        <span className='project-subtitle'>{this.props.subtitle}</span>
        {this.props.tags.map((v) => {
            return (
              <span key={v} className='project-tags'>{v}</span>
            )}
          )
        }
        <span className='project-text'><span className='project-text-content'>{this.props.text}</span></span>
        <Lightbox images={this.props.images} />
        


        {this.props.title == 'Pascal Schilp' ? 
          <div>
          <span className='project-process'>CV:</span>
          <Lightbox images={this.props.process} />
          </div>
                            : 
                  this.props.process[0] ? 
          <div>
          <span className='project-process'>Process images:</span>
          <Lightbox images={this.props.process} />
          </div>
                            : ''
                          }

        {this.props.credits[0] ? 
            <div>
              <span className='project-credits-main'>Credits:</span>
              {this.props.credits.map((v) => {
                  return (
                    <span key={v} className='project-credits'>{String(v.split(', ')[0])+", "}<a href={'http://'+String(v.split(', ')[1])}>{String(v.split(', ')[1])}</a></span>
                  )}
                )
              }
            </div>
                            : ''}



      </div>
    );
  }
}

export default Project;


          // <Lightbox
          //   images={[{ src: 'http://example.com/img1.jpg' }, { src: 'http://example.com/img2.jpg' }]}
          //   isOpen={this.state.lightboxIsOpen}
          //   onClickPrev={this.gotoPrevious}
          //   onClickNext={this.gotoNext}
          //   onClose={this.closeLightbox}
          // />