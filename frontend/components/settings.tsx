import React from 'react';
import ReactDOM from 'react-dom';
import { PluginViewModal } from './panels/plugins'
import { ThemeViewModal } from './panels/themes'
import { Millennium, pluginSelf } from '../millennium';

enum Renderer {
  Plugins,
  Themes,
}

const RenderViewComponent = (componentType: Renderer): any => {
  Millennium.findElement(pluginSelf.settingsDoc, ".DialogContent_InnerWidth").then(element => { 

    switch (componentType) {
      case Renderer.Plugins:   
        ReactDOM.render(<PluginViewModal/>, element[0]);
        break;   
      case Renderer.Themes:
        ReactDOM.render(<ThemeViewModal/>, element[0]);
        break;  
    }
  })
}

const PluginComponent: React.FC = () => {
    console.log("SETTINGS PANEL DETECTED");

    const pluginClick = () => {
      RenderViewComponent(Renderer.Plugins);
    };

    const themeClick = () => {
      RenderViewComponent(Renderer.Themes);
    };

    return (
      <>
        <div className="bkfjn0yka2uHNqEvWZaTJ" onClick={pluginClick}>
          <div className="U6HcKswXzjmWtFxbjxuz4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
              <path d="M18 26V31H2V26C2 23.8783 2.84285 21.8434 4.34315 20.3431C5.84344 18.8429 7.87827 18 10 18C12.1217 18 14.1566 18.8429 15.6569 20.3431C17.1571 21.8434 18 23.8783 18 26ZM10 15C10.89 15 11.76 14.7361 12.5001 14.2416C13.2401 13.7471 13.8169 13.0443 14.1575 12.2221C14.4981 11.3998 14.5872 10.495 14.4135 9.6221C14.2399 8.74918 13.8113 7.94736 13.182 7.31802C12.5526 6.68868 11.7508 6.2601 10.8779 6.08647C10.005 5.91283 9.10019 6.00195 8.27792 6.34254C7.45566 6.68314 6.75285 7.25991 6.25839 7.99994C5.76392 8.73996 5.5 9.60999 5.5 10.5C5.49868 11.0913 5.61418 11.6771 5.83986 12.2236C6.06554 12.7702 6.39695 13.2668 6.81508 13.6849C7.23321 14.103 7.72981 14.4345 8.27637 14.6601C8.82293 14.8858 9.40868 15.0013 10 15ZM31.66 18.34C30.8643 17.5434 29.9094 16.9238 28.8578 16.5216C27.8062 16.1194 26.6815 15.9437 25.5574 16.006C24.4332 16.0683 23.3348 16.3672 22.3341 16.8831C21.3334 17.399 20.4528 18.1204 19.75 19C21.2201 21.0373 22.0077 23.4877 22 26V29H34V24C34.0008 22.9491 33.7946 21.9084 33.3931 20.9372C32.9916 19.966 32.4027 19.0835 31.66 18.34ZM26 13C26.89 13 27.76 12.7361 28.5001 12.2416C29.2401 11.7471 29.8169 11.0443 30.1575 10.2221C30.4981 9.39981 30.5872 8.49501 30.4135 7.6221C30.2399 6.74918 29.8113 5.94736 29.182 5.31802C28.5526 4.68868 27.7508 4.2601 26.8779 4.08647C26.005 3.91283 25.1002 4.00195 24.2779 4.34254C23.4557 4.68314 22.7529 5.25991 22.2584 5.99994C21.7639 6.73996 21.5 7.60999 21.5 8.5C21.4987 9.09132 21.6142 9.67708 21.8399 10.2236C22.0655 10.7702 22.397 11.2668 22.8151 11.6849C23.2332 12.103 23.7298 12.4345 24.2764 12.6601C24.8229 12.8858 25.4087 13.0013 26 13Z" fill="currentColor"></path>
            </svg>
          </div>
          <div className="_2X9_IsQsEJDpAd2JGrHdJI">Plugins</div>
        </div>
        <div className="bkfjn0yka2uHNqEvWZaTJ " onClick={themeClick}>
          <div className="U6HcKswXzjmWtFxbjxuz4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
              <path d="M18 26V31H2V26C2 23.8783 2.84285 21.8434 4.34315 20.3431C5.84344 18.8429 7.87827 18 10 18C12.1217 18 14.1566 18.8429 15.6569 20.3431C17.1571 21.8434 18 23.8783 18 26ZM10 15C10.89 15 11.76 14.7361 12.5001 14.2416C13.2401 13.7471 13.8169 13.0443 14.1575 12.2221C14.4981 11.3998 14.5872 10.495 14.4135 9.6221C14.2399 8.74918 13.8113 7.94736 13.182 7.31802C12.5526 6.68868 11.7508 6.2601 10.8779 6.08647C10.005 5.91283 9.10019 6.00195 8.27792 6.34254C7.45566 6.68314 6.75285 7.25991 6.25839 7.99994C5.76392 8.73996 5.5 9.60999 5.5 10.5C5.49868 11.0913 5.61418 11.6771 5.83986 12.2236C6.06554 12.7702 6.39695 13.2668 6.81508 13.6849C7.23321 14.103 7.72981 14.4345 8.27637 14.6601C8.82293 14.8858 9.40868 15.0013 10 15ZM31.66 18.34C30.8643 17.5434 29.9094 16.9238 28.8578 16.5216C27.8062 16.1194 26.6815 15.9437 25.5574 16.006C24.4332 16.0683 23.3348 16.3672 22.3341 16.8831C21.3334 17.399 20.4528 18.1204 19.75 19C21.2201 21.0373 22.0077 23.4877 22 26V29H34V24C34.0008 22.9491 33.7946 21.9084 33.3931 20.9372C32.9916 19.966 32.4027 19.0835 31.66 18.34ZM26 13C26.89 13 27.76 12.7361 28.5001 12.2416C29.2401 11.7471 29.8169 11.0443 30.1575 10.2221C30.4981 9.39981 30.5872 8.49501 30.4135 7.6221C30.2399 6.74918 29.8113 5.94736 29.182 5.31802C28.5526 4.68868 27.7508 4.2601 26.8779 4.08647C26.005 3.91283 25.1002 4.00195 24.2779 4.34254C23.4557 4.68314 22.7529 5.25991 22.2584 5.99994C21.7639 6.73996 21.5 7.60999 21.5 8.5C21.4987 9.09132 21.6142 9.67708 21.8399 10.2236C22.0655 10.7702 22.397 11.2668 22.8151 11.6849C23.2332 12.103 23.7298 12.4345 24.2764 12.6601C24.8229 12.8858 25.4087 13.0013 26 13Z" fill="currentColor"></path>
            </svg>
          </div>
          <div className="_2X9_IsQsEJDpAd2JGrHdJI">Themes</div>
        </div>
      </>
    );
}

function RenderSettingsModal(_context: any) 
{
    pluginSelf.settingsDoc = _context.m_popup.document
    console.log("SETTINGS PANEL DETECTED")

    Millennium.findElement(_context.m_popup.document, "._EebF_xe4DGRZ9a0XkyDj.Panel").then(element => {
      console.log(element)

      // Create a new div element
      var newDiv = document.createElement("div");

      // Prepend the new div to the element
      element[0].prepend(newDiv);

      ReactDOM.render(<PluginComponent />, newDiv);
    })
}

export { RenderSettingsModal }