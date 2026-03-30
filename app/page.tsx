import React from 'react'
import Header from './_components/header/Header'
import Section from './_components/section/Section'
import Feature from './_components/section/Feature'
import Category from './_components/section/Category'
import CTA from './_components/section/CTA'
import { connectDB } from './lib/mongoose';
async function HomePage() {
  await connectDB()
  
  return (
    <div>
      <Header />
      <Section />
      <Feature />
      <Category />
      <CTA />
   
    </div>
  )
}

export default HomePage
