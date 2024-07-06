import Footer from "@/app/_components/footer";
import Navbar from "@/app/_components/navbar";

const CustomLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${className}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default CustomLayout;
