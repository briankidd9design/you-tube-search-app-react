import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

// our goal is to able to call this function. Its parameters will be our list of inputs. In our case the input is our default term
// It's going to return our list of outputs
// The outputs will be our videos and a function that we can use to search for videos
// We will then import the function into our App.js file and call that function from inside the body of our app component

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    
    // this form of useEffect is roughly the equivalent to componentDidMount
    useEffect(() => {
      search(defaultSearchTerm);
    }, [defaultSearchTerm]);
  
  
  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
  
    setVideos(response.data.items);
   
  };
  // return our list of videos and a function that can be used to change that list of videos
    return [videos, search];
    // The React convention is to return an array but you can also do the comore common Vanilla JavaScript convention and return and object like so:
    // return { videos, search };
};

export default useVideos;