import FuturisticNavbar from "../components/futuristic-navbar";
import AnimatedFooter from "../components/animated-footer";
import ComingSoon from "../components/coming-soon";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <FuturisticNavbar />
      
      <ComingSoon 
        title="CAREERS"
        subtitle="Join Our Elite Gaming Team"
        description="We're building the future of gaming and looking for passionate individuals to join our mission. Amazing opportunities await those ready to push the boundaries of interactive entertainment."
        type="careers"
      />
      
      <AnimatedFooter />
    </div>
  );
}
