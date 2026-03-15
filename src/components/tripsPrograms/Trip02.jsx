import TripsProgramTemplate from "./tripsProgramTemplate/TripsProgramTemplate";

const Trip02 = () => {

  const carouselImages = [
    "/Hero_images/1.jpg",
    "/Hero_images/2.jpg",
    "/Hero_images/3.jpg"
  ];

  const highlights = [
    "Visit the Great Wall of China",
    "Explore the Forbidden City",
    "See the Terracotta Army in Xi'an",
    "Cruise the Li River in Guilin",
    "Taste authentic Peking Duck"
  ];

  const tripDays = [
    {
      title: "Day 01 – Arrival in Beijing",
      description: "Arrival and hotel check-in",
      activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"]
    },
    {
      title: "Day 03 – Great Wall Tour",
      description: "Visit Mutianyu Great Wall",
      activities: ["Drive to Great Wall", "Guided tour", "Lunch"]
    },
    {
      title: "Day 04 – Arrival in Beijing",
      description: "Arrival and hotel check-in",
      activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"]
    },
    {
      title: "Day 05 – Arrival in Beijing",
      description: "Arrival and hotel check-in",
      activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"]
    },
    {
      title: "Day 06 – Arrival in Beijing",
      description: "Arrival and hotel check-in",
      activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"]
    },
    {
      title: "Day 07 – Arrival in Beijing",
      description: "Arrival and hotel check-in",
      activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"]
    },
    {
      title: "Day 08 – Arrival in Beijing",
      description: "Arrival and hotel check-in",
      activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"]
    },
    {
      title: "Day 09 – Arrival in Beijing",
      description: "Arrival and hotel check-in",
      activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"]
    },
    {
      title: "Day 10 – Arrival in Beijing",
      description: "Arrival and hotel check-in",
      activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"]
    },
    {
      title: "Day 11 – Arrival in Beijing",
      description: "Arrival and hotel check-in",
      activities: ["Airport pickup", "Hotel check-in", "Welcome dinner"]
    },
  ];

  return (
    <TripsProgramTemplate
      tripTitle="Shenzhen Trip"
      placeLocation="southern China, specifically in the Guangdong Province"
      carouselImages={carouselImages}
      highlights={highlights}
      tripDays={tripDays}
      tourType="Private"
      tourIntensity="Comfortable"
    />
  );
};

export default Trip02;