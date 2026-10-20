export const PROJECT_META = [
  {
    id: 1,
    slug: "sentimenid",
    title: "SentimenID",
    category: "NLP / Machine Learning",
    color: "bg-purple-400",
    img: "/images/projects/sentimenid-frontpage.webp",
  },
  {
    id: 2,
    slug: "trashclassifier",
    title: "TrashClassifier",
    category: "Computer Vision",
    color: "bg-orange-400",
    img: "/images/projects/trashclassifier-frontpage.webp",
  },
  {
    id: 3,
    slug: "pinjemin",
    title: "Pinjemin",
    category: "Peer-to-Peer Lending Platform",
    color: "bg-sky-400",
    img: "/images/projects/pinjemin-frontpage.webp",
  },
  {
    id: 4,
    slug: "vidnote",
    title: "VidNote",
    category: "Local AI / Speech Processing",
    color: "bg-lime-400",
    img: "/images/projects/vidnote-frontpage.webp",
  },
  {
    id: 5,
    slug: "tutorin",
    title: "Tutorin",
    category: "Peer Tutoring Platform",
    color: "bg-pink-400",
    img: "/images/projects/tutorin-frontpage.webp",
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
