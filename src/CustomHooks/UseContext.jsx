import { createContext } from 'react'
import { NavTexts, HeroTexts, OurBreadSectionText, IngredentsAndMethods, OurBreadSection2, BreadDisplaySection, ReviewSection, ContactUs } from '../Data'





const NavTextsData = createContext(NavTexts)
const HeroTextsData = createContext(HeroTexts)
const OurBreadSectionData = createContext(OurBreadSectionText)
const IngredentsAndMethodsData = createContext(IngredentsAndMethods)
const OurBreadSection2Data = createContext(OurBreadSection2)
const BreadDisplaySectionData = createContext(BreadDisplaySection)
const ReviewSectionData = createContext(ReviewSection)
const ContactUsData = createContext(ContactUs)

// exports
export { NavTextsData, HeroTextsData, OurBreadSectionData, IngredentsAndMethodsData,OurBreadSection2Data,BreadDisplaySectionData,ReviewSectionData,ContactUsData}
