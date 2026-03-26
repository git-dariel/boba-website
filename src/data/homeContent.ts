import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import indoorDesign from "../assets/indoor-design.png";
import type { HomeContent } from "../types/content";

export const homeContent: HomeContent = {
  contact: {
    location: "Macalelon, Quezon",
    address: "A. L. Tarray St., Brgy. Pag-asa, Macalelon",
    hours: "Open daily, 11:00 AM - 9:00 PM",
    phoneLabel: "0956 261 2759",
    phoneHref: "tel:+639562612759",
    facebookHref: "https://www.facebook.com/BobanaichaMacQue/",
    mapsHref: "https://maps.app.goo.gl/mcKkzKTWcxqf9SF47",
  },
  hero: {
    eyebrow: "Milk tea, coffee, comfort meals, and slow cafe afternoons",
    title: "A warm Boba Naicha experience inspired by everyday cafe rituals.",
    description:
      "Built around the brand's real imagery, this landing page mirrors the editorial structure of the reference design while keeping the look grounded in Boba Naicha's own creamy, cozy identity.",
    primaryLink: {
      label: "Visit Facebook",
      href: "https://www.facebook.com/BobanaichaMacQue/",
      external: true,
    },
    secondaryLink: {
      label: "Find the cafe",
      href: "https://maps.app.goo.gl/mcKkzKTWcxqf9SF47",
      external: true,
    },
    gallery: [
      {
        image: image1,
        alt: "Refreshing cold drinks from Boba Naicha",
        caption: "Refreshing drinks",
        imagePosition: "center center",
      },
      {
        image: image11,
        alt: "Three signature latte drinks",
        caption: "Signature lattes",
        imagePosition: "center center",
        emphasis: "feature",
      },
      {
        image: image8,
        alt: "Comfort food and drink spread",
        caption: "Comfort bites",
        imagePosition: "center center",
      },
      {
        image: image6,
        alt: "Chicken wings meal plate",
        caption: "Savory plates",
        imagePosition: "center center",
      },
      {
        image: indoorDesign,
        alt: "Inside the Boba Naicha dining space",
        caption: "Cafe interior",
        imagePosition: "center center",
      },
    ],
  },
  menus: [
    {
      id: "menu",
      eyebrow: "Featured drinks",
      title: "Signature Pour Menu",
      description:
        "A calmer, more editorial take on the reference layout, using Boba Naicha's own signature drinks and visual language.",
      ctaLabel: "Message on Facebook",
      ctaHref: "https://www.facebook.com/BobanaichaMacQue/",
      items: [
        {
          name: "Iced Coffee",
          description: "Smooth espresso over milk and ice for daily cafe runs.",
          price: "Starts at P45",
          image: image9,
          alt: "Iced coffee and rice meal",
          imagePosition: "center 26%",
        },
        {
          name: "Signature Lattes",
          description: "Matcha, ube, and fruit-forward latte picks served cold.",
          price: "House favorite",
          image: image11,
          alt: "Signature iced lattes",
          imagePosition: "center 45%",
        },
        {
          name: "Refreshing Coolers",
          description: "Bright, refreshing drinks for warm afternoons in town.",
          price: "Seasonal pours",
          image: image1,
          alt: "Colorful chilled drinks",
          imagePosition: "center 54%",
        },
        {
          name: "Classic Milk Tea",
          description: "Creamy, easy-drinking house-style milk tea staples.",
          price: "Best seller",
          image: image12,
          alt: "Milk tea in a brunch spread",
          imagePosition: "left 48%",
        },
      ],
    },
    {
      id: "bites",
      eyebrow: "Comfort food",
      title: "Brunch, Merienda, and Meals",
      description:
        "The food lineup is treated like the special-menu sections from the reference, but tailored to the cafe's own dishes.",
      ctaLabel: "See location",
      ctaHref: "https://maps.app.goo.gl/mcKkzKTWcxqf9SF47",
      items: [
        {
          name: "Fries",
          description: "Crisp fries that pair naturally with your favorite drink.",
          price: "Starts at P60",
          image: image8,
          alt: "Fries and snacks",
          imagePosition: "center 42%",
        },
        {
          name: "Takoyaki",
          description: "Savory merienda bites available in 4pcs and 8pcs.",
          price: "Starts at P70",
          image: image8,
          alt: "Takoyaki serving",
          imagePosition: "center 77%",
        },
        {
          name: "Chicken Wings",
          description: "Crispy wings with rice and dipping sauce for heavier cravings.",
          price: "Crowd favorite",
          image: image6,
          alt: "Chicken wings rice meal",
          imagePosition: "center 52%",
        },
        {
          name: "Grilled Sandwich",
          description: "Toasted sandwich plates for quick solo dates or barkada bites.",
          price: "Cafe combo",
          image: image9,
          alt: "Grilled sandwich and meal set",
          imagePosition: "left 42%",
        },
      ],
    },
    {
      id: "desserts",
      eyebrow: "Counter sweets",
      title: "Dessert and All-Day Picks",
      description:
        "The final menu block keeps the reference rhythm while highlighting desserts, bakery items, and shareable table orders.",
      ctaLabel: "Call the cafe",
      ctaHref: "tel:+639562612759",
      items: [
        {
          name: "Shareable Favorites",
          description: "A table full of drinks, salad, lumpia, and sweets for the whole crew.",
          price: "Group-ready",
          image: image5,
          alt: "A table full of shareable dishes and drinks",
          imagePosition: "center 54%",
        },
        {
          name: "Chocolate Muffins",
          description: "Soft, chocolate-packed muffins for sweeter afternoons.",
          price: "Fresh batch",
          image: image7,
          alt: "Chocolate muffins on a plate",
          imagePosition: "center 42%",
        },
        {
          name: "Cheesecake Slices",
          description: "Berry-topped and cafe-style slices for dessert lovers.",
          price: "Daily counter pick",
          image: image10,
          alt: "Cheesecake and pastries",
          imagePosition: "center 28%",
        },
        {
          name: "Brunch Trays",
          description: "Rice meals and drinks arranged for late starts and full tables.",
          price: "Weekend mood",
          image: image12,
          alt: "Brunch meals and drinks on a table",
          imagePosition: "center 40%",
        },
      ],
    },
  ],
  culture: {
    eyebrow: "Inside the space",
    title: "Our Cafe Culture",
    description:
      "The page keeps the airy rhythm of the inspiration image, then switches to Boba Naicha's real cafe moments: solo coffee dates, loyalty rewards, barkada tables, and quiet work sessions.",
    gallery: [
      {
        image: indoorDesign,
        alt: "Boba Naicha cafe seating",
        caption: "Clean, calm interior",
        imagePosition: "center center",
        emphasis: "tall",
      },
      {
        image: image2,
        alt: "Woman studying with drink at Boba Naicha",
        caption: "Work-friendly afternoons",
        imagePosition: "center 38%",
      },
      {
        image: image3,
        alt: "Boba Naicha loyalty card",
        caption: "Loyalty card perks",
        imagePosition: "center 40%",
      },
      {
        image: image4,
        alt: "Coffee date at Boba Naicha",
        caption: "Solo coffee dates",
        imagePosition: "center 44%",
      },
      {
        image: image5,
        alt: "Shareable dishes and drinks",
        caption: "Barkada tables",
        imagePosition: "center 52%",
        emphasis: "feature",
      },
    ],
  },
  story: {
    eyebrow: "Neighborhood warmth",
    title: "Designed for the days you want to stay longer.",
    description:
      "The warm highlight band borrows the reference's storytelling panel, but centers it on Boba Naicha's actual brand promise: comfortable seating, familiar meals, and drinks that work for both quick stops and long catches-up.",
    stats: [
      {
        value: "11 AM - 9 PM",
        label: "Daily operating hours",
      },
      {
        value: "Milk tea + coffee + meals",
        label: "All-day cafe mix",
      },
      {
        value: "Macalelon, Quezon",
        label: "Local neighborhood stop",
      },
    ],
    cards: [
      {
        image: indoorDesign,
        alt: "Inside the Boba Naicha cafe seating area",
        caption: "Inside the cafe",
        imagePosition: "center center",
      },
      {
        image: image9,
        alt: "Meal and iced coffee pairing",
        caption: "Pair meals with coffee",
        imagePosition: "center 38%",
      },
      {
        image: image2,
        alt: "Guest working with a drink",
        caption: "Stay for a while",
        imagePosition: "center 35%",
      },
    ],
  },
  footer: [
    {
      title: "Contact",
      links: [
        { label: "A. L. Tarray St., Brgy. Pag-asa, Macalelon", href: "https://maps.app.goo.gl/mcKkzKTWcxqf9SF47", external: true },
        { label: "0956 261 2759", href: "tel:+639562612759" },
        { label: "Open daily, 11:00 AM - 9:00 PM", href: "#visit" },
      ],
    },
    {
      title: "Navigate",
      links: [
        { label: "Home", href: "#home" },
        { label: "Menu", href: "#menu" },
        { label: "Culture", href: "#culture" },
        { label: "Visit", href: "#visit" },
      ],
    },
    {
      title: "Highlights",
      links: [
        { label: "Signature Pour Menu", href: "#menu" },
        { label: "Comfort Food Selection", href: "#bites" },
        { label: "Dessert and All-Day Picks", href: "#desserts" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { label: "Facebook", href: "https://www.facebook.com/BobanaichaMacQue/", external: true },
        { label: "Google Maps", href: "https://maps.app.goo.gl/mcKkzKTWcxqf9SF47", external: true },
        { label: "Call the Cafe", href: "tel:+639562612759" },
      ],
    },
  ],
};
