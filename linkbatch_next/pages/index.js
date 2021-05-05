import React from "react";
import Links from "../components/Links/Links";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <div className="App">
            <Links saved_links={this.props.saved_links} />
         </div>
      );
   }
}

/*

NextJS has two forms of pre-rendering, based on when it generates the HTML for a page

- Static Generation: is the pre-rendering method that generates the HTML at build time.
   The pre-rendered HTML is then reused on each request.
- Server-Side Rendering: is the pre-rendering method that generates the HTML on 
   each request.

NextJS, lets you choose which pre-rendering form to use for each page. You can create
a hybrid Next.js by using static generation for most pages and using server-side 
rendering for others. You can even use client-side rendering for really dynamic pages,
while using NextJS apis for e.g. useSWR()


 */

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
   // Call an external API endpoint to get posts.
   // You can use any data fetching library
   let saved_links = require("../links_data.json");
   // By returning { props: { saved_links } }, the App component
   // will receive `saved_links` as a prop at build time
   return {
      props: {
         saved_links,
      },
   };
}

/*

// If you need to fetch data at request time instead of at build time, you can try Server-side Rendering:
export async function getServerSideProps() {
   // Call an external API endpoint to get posts.
   // You can use any data fetching library
   let saved_links = require("../links_data.json");
   // By returning { props: { saved_links } }, the App component
   // will receive `saved_links` as a prop at request time
   return {
      props: {
         saved_links,
      },
   };
}

*/

export default App;
