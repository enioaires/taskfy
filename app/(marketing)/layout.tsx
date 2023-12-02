import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout: FC<Props> = ({ children }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
};
export default MarketingLayout;
