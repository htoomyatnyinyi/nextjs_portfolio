"use client";

import CountUp from "react-countup";
const stats = [
  {
    num: 12,
    text: "Year of experiences",
  },
  {
    num: 3,
    text: "Projects Completed",
  },
  {
    num: 1,
    text: "Year of experiences",
  },
  {
    num: 4,
    text: "Technology mastered",
  },
  {
    num: 74,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
    <div className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none mx-auto ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
