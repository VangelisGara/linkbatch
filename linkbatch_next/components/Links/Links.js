import React from "react";
import Router from "next/router";

class Links extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         links: this.props.saved_links,
      };
   }

   visitLink(linkindex) {
      Router.push(`/${linkindex}`);
   }

   removeLinkFromSavedLinks(index) {
      console.log(index);
      let updatedLinks = [...this.state.links];
      updatedLinks.splice(index, 1);
      console.log(updatedLinks);
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
                        onClick={() => this.removeLinkFromSavedLinks(index)}
                        src="../../../assets/close.png"
                        style={{
                           width: "20px",
                           height: "20px",
                           position: "relative",
                           right: "-60px",
                        }}
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

export default Links;
