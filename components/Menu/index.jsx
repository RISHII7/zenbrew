import MenuItem from "../Menu Item";
import Separator from "../Separator";
import { menuItems, menuHeader } from "@/constants/menu-constants";

const Menu = () => {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container mx-auto">
        {/* Section heading */}
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">{menuHeader.title}</h2>
          <div className="mb-4">
            <Separator bg="accent" />
          </div>
          <p className="text-center max-w-[620px] mx-auto">
            {menuHeader.subtitle}
          </p>
        </div>

        {/* Menu item list */}
        <div className="flex flex-col items-center gap-12 xl:gap-24">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
            {menuItems.map((item, index) => {
              const { name, description, price, imgSrc } = item;
              return (
                <MenuItem
                  key={index}
                  name={name}
                  description={description}
                  price={price}
                  imgSrc={imgSrc}
                />
              );
            })}
          </div>

          {/* CTA button */}
          <button className="btn">{menuHeader.cta}</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
