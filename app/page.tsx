import { Button } from "@/components/ui/button";
import { FileDownIcon } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row  justify-between items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left  ">
            <span className="text-xl mb-9 pb-9 ">Junior Web Developer</span>
            <h1 className="c-h1 ">
              Hello, I'm <br />{" "}
              <span className="text-green-500">HTOO MYAT NYI NYI</span>
            </h1>
            <p className="max-w-[500px] mb-9 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              quae necessitatibus fuga voluptas veritatis aperiam sint rerum
              quasi quo consequatur distinctio quos, voluptatibus esse
              reiciendis ullam inventore rem sapiente. Architecto!
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FileDownIcon className="text-xl" />
              </Button>
              <div>Socials</div>
            </div>
          </div>
          <div>phto</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
