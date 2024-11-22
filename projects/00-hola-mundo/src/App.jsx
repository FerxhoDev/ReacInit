import React, { useState } from 'react';import './App.css';
import { TwiterFollowCard } from './TwitterFollowCard';


export function App() {


  return (
    <section className='App'>
      <TwiterFollowCard userName= "spyed" initialIsFollowing = {true}>
        Ferdy R Cardona
      </TwiterFollowCard>

      <TwiterFollowCard userName="elonmusk">
        Elon Musk
      </TwiterFollowCard>

      <TwiterFollowCard userName="vxnder">
        Leonidas Esteban
      </TwiterFollowCard>
    </section> 
  );
}