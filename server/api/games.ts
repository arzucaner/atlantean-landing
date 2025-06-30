export default defineEventHandler(async (event) => {
  return [
    {
      id: 1,
      title: "Atlantean Treasures",
      description: "Explore the depths of the ocean for hidden riches.",
      image: "/img/bubble_1.png"
    },
    {
      id: 2,
      title: "Neptune's Wrath",
      description: "Survive the wrath and claim the treasure.",
      image: "/img/bubble_2.png"
    }
  ];
});
