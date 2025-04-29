import Image from "next/image";

// Separator component that renders a visual divider
// Takes optional 'bg' prop to determine which image to use
const Separator = ({ bg = "white" }) => {
  // Choose image based on bg prop value
  const imgSrc = bg === "accent" 
    ? "/assets/separator-accent.svg" 
    : "/assets/separator-white.svg";

  return (
    // Container for the separator image
    <div className="relative w-[168px] h-[26px] mx-auto">
      {/* Separator image */}
      <Image 
        src={imgSrc}
        fill
        alt="Separator"
      />
    </div>
  );
};

export default Separator;
