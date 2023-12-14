import React from 'react'
import Feed2 from '../components/Feed2';
import {RiGitCommitFill} from "react-icons/ri"

const testimonials = [
    {
      image: './img/realtor-1.jpeg',
      icon: 'RiGitCommitFill', // Provide the path to the image file
      name: 'John Doe',
      title: 'CEO, Example Company',

    },
 
     
    // Add more testimonials as needed
  ];
  
const Feed = () => {
  return (
    <div>
       <Feed2 testimonials={testimonials} />
    </div>
  )
}

export default Feed
