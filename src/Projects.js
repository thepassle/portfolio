import React, { Component } from 'react';

import Project from './Project';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Responsive, WidthProvider} from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class Projects extends Component {

  constructor(props) {
    super(props);

    const projects = [
          { "id":"0", 
            "title":"Pascal Schilp", 
            "subtitle":"born 9th of august, 1990",
            "text": "I'm Pascal Schilp, a 27 year graphic designer/aspiring front-end developer from the Hague.",
            "thumbnails":[""], 

            "images":[  "http://thepassle.nl/portfolioimages/profilepic.png",
                        "http://thepassle.nl/portfolioimages/profilepic2.png",
                        "http://thepassle.nl/portfolioimages/profilepic3.png",
                ], 

            "process":[  
                        "http://thepassle.nl/portfolioimages/cv.png",
                        "http://thepassle.nl/portfolioimages/cv2.png",
                  ],

            "tags":["graphic design","gaming","data","guitar","front-end development","fitness","coding","python","self-improvement","javascript"], 
            "credits":[]
          },

          { "id":"1", 
            "title":"Uncensorme.xyz", 
            "subtitle":"Graduation project",
            "text": "Uncensorme.xyz is a decentralized, censorship-free communication platform that runs on blockchain technology.",
            "thumbnails":[""], 

            "images":[  "http://thepassle.nl/portfolioimages/uncensor_1.jpg",
                  "http://thepassle.nl/portfolioimages/uncensor_2.jpg",
                  "http://thepassle.nl/portfolioimages/uncensor_3.jpg",
                  "http://thepassle.nl/portfolioimages/uncensor_4.jpg",
                  "http://thepassle.nl/portfolioimages/uncensor_5.png",
                ], 

            "process":[
                  "http://thepassle.nl/portfolioimages/uncensor_process_1.png",
                  "http://thepassle.nl/portfolioimages/uncensor_process_2.png",
                  "http://thepassle.nl/portfolioimages/uncensor_process_3.png",
                  "http://thepassle.nl/portfolioimages/uncensor_process_4.png",
                  "http://thepassle.nl/portfolioimages/uncensor_process_5.png",                
                  ],

            "tags":["blockchain","web","node"], 
            "credits":["Roel Backaert, www.roelbackaert.com", "Max Peeperkorn, www.maxpeeperkorn.nl"]
          },

          { "id":"2", 
            "title":"Paradise", 
            "subtitle":"Identity design",
            "text": "Identity for the photography department exhibition 'Paradise'.",
            "thumbnails":[""], 

            "images":[  "http://thepassle.nl/portfolioimages/paradise_01.png",
                  "http://thepassle.nl/portfolioimages/paradise_02.png",
                  "http://thepassle.nl/portfolioimages/paradise_03.png",
                  "http://thepassle.nl/portfolioimages/paradise_04.png",
                  "http://thepassle.nl/portfolioimages/paradise_05.png",
                  "http://thepassle.nl/portfolioimages/paradise_06.png",
                ], 

            "process":[
                  "http://thepassle.nl/portfolioimages/paradise_process_01.png",
                  "http://thepassle.nl/portfolioimages/paradise_process_02.png",
                  "http://thepassle.nl/portfolioimages/paradise_process_03.png",

                ],

            "tags":["design","web","identity"], 
            "credits":["Márton Kabai, www.martonkabai.com","Remco Blom, www.drawattention.nl"]
          },

          { "id":"3", 
            "title": "Studium Generale", 
            "subtitle": "Audiovisual calendar",
            "text": "Publicity campaign for academic lecture series.",
            "thumbnails":[""], 

            "images":[  "http://thepassle.nl/portfolioimages/sg_01.jpg",
                        "http://thepassle.nl/portfolioimages/sg_02.jpg",
                        "http://thepassle.nl/portfolioimages/sg_03.jpg",
                        "http://thepassle.nl/portfolioimages/sg_04.jpg",
                        "http://thepassle.nl/portfolioimages/sg_05.jpg",
                        "http://thepassle.nl/portfolioimages/sg_06.jpg",
                        "http://thepassle.nl/portfolioimages/sg_07.jpg",
                        "http://thepassle.nl/portfolioimages/sg_08.jpg"
                ], 

            "process":[
                        "http://thepassle.nl/portfolioimages/sg_process_01.png"
                ],

            "tags":["video","python","data"], 
            "credits":["Niels Schrader, www.minddesign.info","Laura Dilettante, www.laura-dilettante.de"]
          },

          { "id":"4", 
            "title": "Studium Generale Installation", 
            "subtitle": "Installation",
            "text": "Publicity campaign for academic lecture series.",
            "thumbnails":[""], 

            "images":[  "http://thepassle.nl/portfolioimages/sginsta_01.jpg",
                        "http://thepassle.nl/portfolioimages/sginsta_02.jpg",
                        "http://thepassle.nl/portfolioimages/sginsta_03.jpg",
                        "http://thepassle.nl/portfolioimages/sginsta_04.jpg",
                        "http://thepassle.nl/portfolioimages/sginsta_05.jpg",
                ], 

            "process":[
                        "http://thepassle.nl/portfolioimages/sginsta_process_01.png",
                        "http://thepassle.nl/portfolioimages/sginsta_process_02.png",
                ],

            "tags":["video","python","data", "installation"], 
            "credits":["Niels Schrader, www.minddesign.info","Laura Dilettante, www.laura-dilettante.de","Roel Backaert, www.roelbackaert.com"]
          },

          { "id":"5", 
            "title": "Budget Dreams", 
            "subtitle": "Exhibition",
            "text": "Exhibition at the Dutch Ministry of Finance.",
            "thumbnails":[""], 

            "images":[  "http://thepassle.nl/portfolioimages/budgetdreams_01.png",
                        "http://thepassle.nl/portfolioimages/budgetdreams_02.png",
                        "http://thepassle.nl/portfolioimages/budgetdreams_03.png",
                        "http://thepassle.nl/portfolioimages/budgetdreams_04.png",
                        "http://thepassle.nl/portfolioimages/budgetdreams_05.png",
                ], 

            "process":[
                        "http://thepassle.nl/portfolioimages/budgetdreams_process_01.jpg",                
                        "http://thepassle.nl/portfolioimages/budgetdreams_process_02.png",                
                        "http://thepassle.nl/portfolioimages/budgetdreams_process_03.png",                

                        ],

            "tags":["processing","data","exhibition"], 
            "credits":["Roel Backaert, www.roelbackaert.com"]
          },

          { "id":"6", 
            "title": "Budget Dreams Catalogue", 
            "subtitle": "Catalogue",
            "text": "Catalogue design of the Budget Dreams exhibition at the Dutch Ministry of Finance.",
            "thumbnails":[""], 

            "images":[  "http://thepassle.nl/portfolioimages/budgetdreams_cata_01.png",
                        "http://thepassle.nl/portfolioimages/budgetdreams_cata_02.png",
                        "http://thepassle.nl/portfolioimages/budgetdreams_cata_03.png",
                        "http://thepassle.nl/portfolioimages/budgetdreams_cata_04.png",
                        "http://thepassle.nl/portfolioimages/budgetdreams_cata_05.png",
                        "http://thepassle.nl/portfolioimages/budgetdreams_cata_06.png",
                ], 

            "process":[  "http://thepassle.nl/portfolioimages/budgetdreams_cata_process_01.png",
                        "http://thepassle.nl/portfolioimages/budgetdreams_cata_process_02.png",
                        "http://thepassle.nl/portfolioimages/budgetdreams_cata_process_03.png",
                        "http://thepassle.nl/portfolioimages/budgetdreams_cata_process_04.png",
                ], 

            "tags":["book","design","exhibition","catalogue","ministry of finance"], 
            "credits":["Roel Backaert, www.roelbackaert.com"]
          },

          { "id":"7", 
            "title": "Internship report", 
            "subtitle": "Generated book",
            "text": "Generated internship report made with Drawbot (python)",
            "thumbnails":[""], 

            "images":[  "http://thepassle.nl/portfolioimages/stage_01.png",
                        "http://thepassle.nl/portfolioimages/stage_02.png",
                        "http://thepassle.nl/portfolioimages/stage_03.png",
                        "http://thepassle.nl/portfolioimages/stage_04.png",
                        "http://thepassle.nl/portfolioimages/stage_05.png",
                        "http://thepassle.nl/portfolioimages/stage_06.png",
                        "http://thepassle.nl/portfolioimages/stage_07.png",
                ], 

            "process":[  
                ], 

            "tags":["internship","book","python","generated"], 
            "credits":["Niels Schrader, www.minddesign.info"]
          },
           { "id":"8", 
            "title": "Waag Society Hackathon", 
            "subtitle": "Onderwijs data onder de loep",
            "text": "Together with Amir Houieh, Gabor Kerekes and Vera van de Seyp from LustLab and Lust respectively, we participated in a Hackathon organised by the Waag Society about their new API.",
            "thumbnails":[""], 

            "images":[  "http://thepassle.nl/portfolioimages/schoolhub_01.png",
                        "http://thepassle.nl/portfolioimages/schoolhub_02.png",
                        "http://thepassle.nl/portfolioimages/schoolhub_03.png",
                        "http://thepassle.nl/portfolioimages/schoolhub_04.png",
                ], 

            
            "process":[  "http://thepassle.nl/portfolioimages/schoolhub_process_01.png",
                        "http://thepassle.nl/portfolioimages/schoolhub_process_02.png",
                ], 

            "tags":["hackathon","web","gabor","comittedtometadatapollution","waag society"], 
            "credits":["Amir Houieh, www.amirhouieh.info","Vera van de Seyp, www.veravandeseyp.com","Gábor Kerekes, www.krks.info"]
          },
           { "id":"9", 
            "title": "Cinekid Media Festival", 
            "subtitle": "Ultra-Sonic Hyperdrive Simulator 2000",
            "text": "The Hyperdrive Simulator was made for the Cinekid Media Festival, in order to encourage children to get acquainted and play around with technology.",
            "thumbnails":[""], 

            "images":[  "http://thepassle.nl/portfolioimages/cinekid_01.png",
                        "http://thepassle.nl/portfolioimages/cinekid_02.png",
                        "http://thepassle.nl/portfolioimages/cinekid_03.jpg",
                        "http://thepassle.nl/portfolioimages/cinekid_04.jpg",
                        "http://thepassle.nl/portfolioimages/cinekid_05.jpg",
                        "http://thepassle.nl/portfolioimages/cinekid_06.jpg",
                ], 

            
            "process":[  "http://thepassle.nl/portfolioimages/cinekid_process_01.png",
                        "http://thepassle.nl/portfolioimages/cinekid_process_02.png",
                ], 

            "tags":["cinekid","arduino","processing","installation"],
            "credits":["Remco Blom, www.drawattention.nl"]
          },
          { "id":"10", 
            "title": "Generated type experiments", 
            "subtitle": "LetterStudio/Drawbot (python)",
            "text": "These are some experiments I made using the Drawbot python app to generate variable typography.",
            "thumbnails":[""], 

            "images":[  "http://thepassle.nl/portfolioimages/drawbot_01.png",
                        "http://thepassle.nl/portfolioimages/drawbot_02.png",
                ], 
            
            "process":[  "http://thepassle.nl/portfolioimages/drawbot_process_01.png",
                        "http://thepassle.nl/portfolioimages/drawbot_process_02.png",
                        "http://thepassle.nl/portfolioimages/drawbot_process_03.png",
                        "http://thepassle.nl/portfolioimages/drawbot_process_04.png",
                ], 

            "tags":["drawbot","arduino","python","typography"],
            "credits":["Remco Blom, www.drawattention.nl"]
          },
         
          { "id":"11", 
            "title": "Cellular Automata Guitar", 
            "subtitle": "Self-playing guitar based on an algorithm.",
            "text": "For this project we made a self-playing guitar based on a cellular automaton, using servo motors to pluck the strings of the guitar. This results in a musical composition based on an algorithm.",
            "thumbnails":[""], 

            "images":[  "http://thepassle.nl/portfolioimages/cellular_01.png",
                        "http://thepassle.nl/portfolioimages/cellular_02.jpg",
                ], 
            
            "process":[  "http://thepassle.nl/portfolioimages/cellular_process_01.png",
                        "http://thepassle.nl/portfolioimages/cellular_process_02.png",
                        "http://thepassle.nl/portfolioimages/cellular_process_03.png",
                ], 

            "tags":["arduino","processing","guitar","installation"],
            "credits":["Remco Blom, www.drawattention.nl"]
          },

          { "id":"12", 
            "title": "Friendsonly", 
            "subtitle": "Digital exhibition app",
            "text": "For our friends at Friendsonly, Remco Blom and me developed a mobile app to support their digital exhibition platform.",
            "thumbnails":[""], 

            "images":[  "http://thepassle.nl/portfolioimages/friendsonly_01.png",
                        "http://thepassle.nl/portfolioimages/friendsonly_02.png",
                        "http://thepassle.nl/portfolioimages/friendsonly_03.png",
                        "http://thepassle.nl/portfolioimages/friendsonly_04.jpg",
                        "http://thepassle.nl/portfolioimages/friendsonly_05.jpg",
                ], 
            
            "process":[  
                ], 

            "tags":["web","design","exhibition"],
            "credits":["Remco Blom, www.drawattention.nl", "Friendsonly, www.friends-only.net"]
          },
         
    ]


    this.state = {
      currentBreakpoint: 'lg',
      mounted: false,
      layouts: {lg: this.props.initialLayout},
      newCounter: this.props.initialLayout.length,
      lol: 'typography',
      projects: projects
    };
  }

  static propTypes = {
    onLayoutChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: "layout",
    rowHeight: 30,
    isResizable: false,
    onLayoutChange: function() {},
    cols: {lg: 12, md: 12, sm: 12, xs: 12, xxs: 12},
    initialLayout: generateLayout(),
    verticalCompact: true,
    margin:[0,2]
  };

  componentDidMount() {
    console.log(this.state);
    this.setState({mounted: true});
  }

  onBreakpointChange(breakpoint){
    this.setState({
      currentBreakpoint: breakpoint
    });
  };

  onLayoutChange(layout, layouts){
    this.props.onLayoutChange(layout, layouts);
    this.setState({
      layouts: {
        lg: layout
      }
    })
  };

  onNewLayout(){
    this.setState({
      layouts: {lg: generateLayout()}
    });
  };

  toggleOpen(id){
    this.setState({
      layouts:{
        lg: this.state.layouts.lg.map((v) => {
          if(id === v.i){
            return Object.assign({}, v, { h: v.h === 2 ? 14 : 2 })
          } else {
            return v;
          }
        })
      }
    })
  }

  render() {

    return (
    <div>
      <div className='portfolio'>
            <ResponsiveReactGridLayout 
              {...this.props} 
              layouts={this.state.layouts} 
              onBreakpointChange={this.onBreakpointChange.bind(this)} 
              onLayoutChange={this.onLayoutChange.bind(this)} 
              measureBeforeMount={false} 
              useCSSTransforms={this.state.mounted}
            >

              {this.state.projects.map((v,h) => {

                  return (
                    <div key={v.id} className='static'>

                      <div className={v.id % 2 == true ? 'project__title-b' : 'project__title-a'}>
                        <div onClick={()=>{this.toggleOpen(v.id);}} className='project__head'>{v.title}</div>

                        {this.state.layouts.lg[v.id].h === 14 ? ''
                                                              : 
                          v.images.map((v,i) => {
                              return (
                                <div key={String(v)+" "+String(i)} className='project__thumbnail'>
                                  <div className='project__thumbnail-container'>
                                    <img src={v}/>
                                  </div>
                                </div>
                              )}
                            )
                          }


                 
                      </div>

                      {this.state.layouts.lg[v.id].h === 14 ? 
                                                              <Project 
                                                                show='true'
                                                                id={v.id}
                                                                title={v.title}
                                                                subtitle={v.subtitle}
                                                                text={v.text || ''}
                                                                tags={v.tags}
                                                                images={v.images}
                                                                credits={v.credits}
                                                                process={v.process}
                                                              /> 
                                                            : ''}
                    </div> 
                  );
                })}

            </ResponsiveReactGridLayout>

          </div>
       </div>
    );
  }
}

export default Projects;

//en er moet een 'all' tag bij komen denk ik
function generateLayout() {
  return _.map(_.range(0, 13), function (item, i) {
    if(i == 0){
      return {
        x: 0,
        y: i,
        w: 12,
        h: 14,
        i: i.toString(),
        static: false
      };
    } else{
      return {
        x: 0,
        y: i,
        w: 12,
        h: 2,
        i: i.toString(),
        static: false
      };
    }

  });
}




  
