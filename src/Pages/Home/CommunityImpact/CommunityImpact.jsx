import React from 'react';

const communityData = [
  {
    img: "https://i.ibb.co/848rmZWr/reduce-food-waste.png",
    title: "Reducing Food Waste",
    desc: "Our platform has helped reduce food waste by 30% in participating communities.",
  },
  {
    img: "https://i.ibb.co/jPG9L4Z8/support-community.png",
    title: "Supporting Neighbors",
    desc: "We've connected thousands of neighbors, ensuring everyone has access to nutritious food.",
  },
  {
    img: "https://i.ibb.co/QjTs8yHh/build-community.png",
    title: "Building Stronger Communities",
    desc: "By sharing food, we're fostering a sense of community and mutual support.",
  },
];

const CommunityImpact = () => {
  return (
    <section className="mx-auto px-4 py-10">
      <h2 className="font-bold text-3xl text-white mb-4">Community Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {communityData.map((item, idx) => (
          <div key={idx} className="bg-[#141A1F] rounded-lg overflow-hidden">
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityImpact;
