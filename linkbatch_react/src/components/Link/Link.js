import React from "react";
import saved_links from "../../links_data.json";
import { withRouter } from "react-router-dom";
import "./Link.css";

class Link extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         link: null,
      };
   }

   componentDidMount() {
      const linkIndex = this.props.match.params.linkindex;
      this.setState({ link: saved_links[linkIndex] });
   }

   goToHome() {
      this.props.history.push("/");
   }

   render() {
      return (
         <div className="LinkContainer3">
            <div className="LinkContainer2">
               <div className="LinkPreviewImg" />
               <h3> Link Preview Title </h3>
               <h4> Link Preview Description</h4>
               <p>{this.state.link}</p>
            </div>
            <div className="returnButton" onClick={() => this.goToHome()}>
               Back to batch
            </div>
         </div>
      );
   }
}

export default withRouter(Link);
