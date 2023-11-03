import React from 'react'
import FeedbackTest2 from '../components/FeedbackTest2';
import {RiGitCommitFill} from "react-icons/ri"

const testimonials = [
    {
      image: './img/realtor-1.jpeg',
      icon: 'RiGitCommitFill', // Provide the path to the image file
      name: 'John Doe',
      title: 'CEO, Example Company',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        image: './img/realtor-1.jpeg',
      icon: 'RiGitCommitFill', // Provide the Font Awesome or other icon classes
      name: 'Jane Smith',
      title: 'Designer, Example Company',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
        image: './img/realtor-1.jpeg',
        icon: 'RiGitCommitFill', // Provide the path to the image file
        name: 'John Doe',
        title: 'CEO, Example Company',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    // Add more testimonials as needed
  ];
  
const Feedback = () => {
  return (
    <div>
       <FeedbackTest2 testimonials={testimonials} />
    </div>
  )
}

export default Feedback
