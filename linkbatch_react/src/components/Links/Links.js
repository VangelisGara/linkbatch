import React from "react";
import saved_links from "../../links_data.json";
import closeImg from "../../assets/close.png";
import { withRouter } from "react-router-dom";
import "./Links.css";

class Links extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         links: saved_links,
      };
   }

   visitLink(linkindex) {
      this.props.history.push(`/${linkindex}`);
   }

   removeLinkFromSavedLinks(index) {
      console.log(index);
      let updatedLinks = [...this.state.links];
      updatedLinks.splice(index, 1);
      this.setState({ links: updatedLinks });
   }

   linkChanged = (event) => {
      this.setState({ linkTyped: event.target.value });
   };

   submitForm = (event) => {
      event.preventDefault();
      let updatedLinks = [...this.state.links];
      updatedLinks.push(this.state.linkTyped);
      this.setState({ links: updatedLinks });
   };

   render() {
      return (
         <div>
            {this.state.links.map((link, index) => {
               return (
                  <div className="LinkContainer">
                     <div className="LinkPreviewImg" />
                     <div
                        className="LinkInfo"
                        onClick={() => this.visitLink(index)}
                     >
                        <h3>Link Preview Title</h3>
                        <p>Link Preview Description</p>
                        <h4>{link}</h4>
                     </div>
                     <img
                        src={closeImg}
                        onClick={() => this.removeLinkFromSavedLinks(index)}
                        style={{
                           width: "20px",
                           height: "20px",
                           fill: "white",
                           position: "relative",
                           right: "-60px",
                        }}
                        alt="logo"
                     />
                  </div>
               );
            })}
            <form onSubmit={this.submitForm}>
               <input
                  type="text"
                  placeholder="Ctrl + V your link here"
                  style={{
                     marginTop: "20px",
                     width: "20vw",
                     height: "40px",
                     border: "1px solid white",
                     textAlign: "center",
                     fontSize: "17px",
                  }}
                  onChange={this.linkChanged}
               />
            </form>
         </div>
      );
   }
}

export default withRouter(Links);
