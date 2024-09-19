export const currentUser = {
  id: 1,
  name: "Noel Serrato",
  email: "serrato.dev@gmail.com",
  avatar: "https://placehold.co/150x150",
};

export const friends = [
  { id: 2, name: "Darth Maul", avatar: "https://placehold.co/150x150" },
  { id: 3, name: "Master Chief", avatar: "https://placehold.co/150x150" },
];

export const posts = [
  {
    id: 1,
    userId: 2,
    content: "Luke I am not your father!",
    timestamp: "2024-09-18T14:30:00Z",
    likes: 15,
    comments: 3,
  },
  {
    id: 2,
    userId: 3,
    content: "Sir, Finishing This Fight.",
    timestamp: "2024-09-18T19:45:00Z",
    likes: 28,
    comments: 7,
  },
];
