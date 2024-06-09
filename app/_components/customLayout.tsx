import Footer from "./footer";
import Navbar from "./navbar";

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
