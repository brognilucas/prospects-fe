import React from "react";

/* Card Code adapted from from https://tailwindcomponents.com/component/responsive-card-with-image */

export const ProspectItem = ({ prospect }) => {
  return (
    <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
      <div className="z-0 order-2 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
        <div
          className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
          style={{
            objectFit: "contain",
            backgroundImage: `url(${
              prospect.imageURL ||
              "https://www.spearsandcorealestate.com/wp-content/themes/spears/images/no-image.png"
            })`,
          }}
        ></div>

        <svg
          className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>

      <div className="z-10 order-1 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
        <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
          <h3 className="hidden md:block font-bold text-2xl text-gray-700">
            {prospect.name}
          </h3>
          <h4 className="hidden md:block text-xl text-gray-400">
            {prospect.college}
          </h4>
          <h4 className="hidden md:block text-xl text-gray-400">
            {prospect.position} #{prospect.jerseyNumber}
          </h4>
          <p className="text-gray-600 text-justify">
            {prospect.size} - {prospect.weight}
          </p>
          <p className="text-gray-600 text-justify">{prospect.description}</p>
        </div>
      </div>
    </div>
  );
};
