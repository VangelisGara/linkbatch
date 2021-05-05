import React from "react";
import Router from "next/router";

class Link extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         link: this.props.link_data,
      };
   }

   goToHome() {
      Router.push("/");
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

/* How to statically generate pages with dynamic routes
   If you want to statically generate a page at a path called /<linkindex>
   where <linkindex> can be dynamic, then the page which resides in /pages/[linkindex].js
   must contain:

   1. A react component to render this page
   2. getStaticPaths which returns an array of possible values for id so that nextjs pre-render all the specified paths at build time.
   3. getStaticProps which fetches necessary data for the post with linkindex

*/

export async function getStaticProps({ params }) {
   let saved_links = require("../links_data.json");
   let link_data = saved_links[params.linkindex];
   return {
      props: {
         link_data,
      },
   };
}

export const getStaticPaths = async () => {
   return {
      paths: [
         {
            params: {
               linkindex: "0",
            },
         },
         {
            params: {
               linkindex: "1",
            },
         },
      ],
      fallback: false,
   };
};

export default Link;
