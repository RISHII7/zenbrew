import Image from "next/image";

// Badge component to display a decorative image 
const Badge = ({ containerStyles }) => {
  return (
    // Wrapper with optional custom styles passed via props
    <div className={`relative ${containerStyles}`}>
      {/* Responsive badge image */}
      <Image 
        src="/assets/badge.svg"
        alt="Badge"
        fill
        className="object-contain"
      />
    </div>
  );
};

export default Badge;
