import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import Slider from '../components/Slider';
import ImageMarque from '../components/ImageMarque';

export default function Home() {


  return (
    <div>      
      <Slider />
      <ImageMarque imageMarque={1}/>
    </div>
  );
}
