import FuturisticNavbar from "../components/futuristic-navbar";
import AnimatedFooter from "../components/animated-footer";
import ComingSoon from "../components/coming-soon";

export default function StorePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <FuturisticNavbar />
      
      <ComingSoon 
        title="STORE"
        subtitle="Epic Gaming Merchandise & Digital Content"
        description="Get ready for exclusive Z Inception merchandise, digital downloads, and limited edition collectibles. Our store will feature everything a true gamer needs."
        type="store"
      />
      
      <AnimatedFooter />
    </div>
  );
}
