import {
    RightBread, OurBreadSectionCardImageTwo, OurBreadSectionCardImageThree, OurBreadSectionCardImageFour, OurBreadSectionCardImageOne, OurBreadSectionBackgroundImage, IngredientsAndMethodsImage, OurBreadSection2BackgroundImage, ReviewSectionBackgroundImage
} from "./assets/exportAssets"






// 
const NavTexts = {
    LogoText: "Fresh Bread",
    NavLinksText: ['Home', 'About Us', 'Our Menu', 'Contact Us']
}

const HeroTexts = {
    Title: "Fresh breads handcrafted daily",
    Description: "Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla.",
    ButtonText: "Our Menu",
    HeroImage: RightBread,
}

const OurBreadSectionText = {
    Title: "Our Bread",
    BackgroundImage: OurBreadSectionBackgroundImage,
    CardData: [
        {
            Title: "WHITE BREAD",
            Description: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
            ButtonText: "More",
            imageUrl: OurBreadSectionCardImageOne,
        },
        {
            Title: "FARMING BREAD",
            Description: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
            ButtonText: "More",
            imageUrl: OurBreadSectionCardImageTwo,
        },
        {
            Title: "LOAF BREAD",
            Description: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
            ButtonText: "More",
            imageUrl: OurBreadSectionCardImageThree,
        },
        {
            Title: "SOURDOUGH",
            Description: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
            ButtonText: "More",
            imageUrl: OurBreadSectionCardImageFour,
        }
    ],
}

const IngredentsAndMethods = {
    Title: "Ingredients & Method",
    Description: "Flour, water, sea salt, and leavening: four simple ingredients that—when mixed, shaped, fermented, and baked—make one of the most basic foods that has nourished humans for thousands of years. Since such few ingredients are involved, two things set great bread apart: quality ingredients and time.",
    ButtonText: "Read More",
    ImageUrl: IngredientsAndMethodsImage,
}


const OurBreadSection2 = {
    Title: "Our ​Bread",
    BackgroundImage: OurBreadSection2BackgroundImage,
    CardData: [
        {
            Title: "GLASSIC BAGUETTE",
            Description: "Unbleached organic wheat flour, whole rye flour, water, sea salt, yeast"
        },
        {
            Title: "BAGUETTE",
            Description: "Naturally leavened baguette made using the Five Points Levain dough. This baguette is crustier and chewier than the Classic Baguette"
        },
        {
            Title: "PEKAN RAISIN",
            Description: "Naturally leavened bread made using the French Country dough with the additions of local Georgia pecans and Thompson raisins"
        },
        {
            Title: "EVERYDAY FRENCH",
            Description: "Everyday table loaf made using the Classic Baguette dough"
        },
        {
            Title: "MULTIGRAIN",
            Description: "Naturally leavened bread made using the French Country dough with the additions of millet, quinoa, rolled oats, flax seeds, and sunflower seeds"
        },
        {
            Title: "DANISH RYE",
            Description: "Whole rye flour, cracked rye berries, water, natural leaven culture made with rye flour, pumpkin seeds, sunflower seeds, barley malt syrup, sea salt"
        },
        {
            Title: "LEVAIN",
            Description: "Unbleached organic wheat flour, whole rye flour, water, natural leaven culture, sea salt"
        },
        {
            Title: "CIABATTA",
            Description: "Unbleached organic wheat flour, whole rye flour, water, natural leaven culture, sea salt, yeast"
        },
        {
            Title: "HANDMADE BREAD",
            Description: "Naturally leavened bread made using the Sourdough Rye dough and studded with dried black currants"
        },
    ],
}


const BreadDisplaySection = {
    Title: "Our freshly baked bread is the hero of our breakfast menu",
    ButtonText: "Read More"
}

const ReviewSection = {
    Title: "Read what our customers say",
    BackgroundImage: ReviewSectionBackgroundImage,
    CardData: [
        {
            Comment: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl",
            Name: "CELIA ALMEDA"
        },
        {
            Comment: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl",
            Name: "FRANK KINNEY"
        },
        {
            Comment: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl",
            Name: "SAM PERRY"
        },
        {
            Comment: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl",
            Name: "MARRY HUDSON"
        }
    ],
}

const ContactUs = {
    Title: "Contact Us",
    Address: "121 Rock Sreet, 21 Avenue, New York, NY 92103-9000",
    Hours: [
        {
            Day: "Monday – Saturday",
            Time: "9am – 7pm"
        },
        {
            Day: "Sunday",
            Time: "10am – 6pm"
        },

    ],
    CallUs: [
        '201287392937',
        '201287393749'
    ],
}




export { NavTexts, HeroTexts, OurBreadSectionText, IngredentsAndMethods, OurBreadSection2, BreadDisplaySection, ReviewSection, ContactUs }