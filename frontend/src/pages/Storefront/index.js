import React from "react"
import PromoSection from "./PromoSection"
import IncentiveSection from "./IncentiveSection"
import CollectionPreviewSection from './CollectionPreviewSection'
import CategoryPreviewSection from "./CategoryPreviewSection"
import About from "./AboutSection"
const Storefront = () => {
  return (
    <>
      <PromoSection className='z-0' />
      <CategoryPreviewSection />
      <About />
      <CollectionPreviewSection />
      <IncentiveSection />
    </>
  )
}

export default Storefront
