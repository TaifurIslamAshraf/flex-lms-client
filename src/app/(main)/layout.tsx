import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const mainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default mainLayout;
