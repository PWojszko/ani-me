import AuthNavbar from "@/components/AuthNavbar/AuthNavbar";
import BigNavbar from "../../components/Navbar/BigNavbar";
import SmallBottomNavbar from "../../components/Navbar/SmallBottomNavbar";
import SmallTopNavbar from "../../components/Navbar/SmallTopNavbar";
import "../globals.css";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full select-none">
      <div className="flex flex-col md:flex-row flex-1">
        <div className="fixed top-4 right-4 w-40 h-16 z-30">
          <AuthNavbar />
        </div>

        <div className="md:hidden sticky top-0 z-20">
          <SmallTopNavbar />
        </div>

        <div className="hidden md:block">
          <BigNavbar />
        </div>

        <main className="relative pb-10 flex-1 max-w-screen-5xl mx-auto w-full">
          {children}
        </main>

        <div className="md:hidden sticky bottom-0 z-20">
          <SmallBottomNavbar />
        </div>
      </div>
    </div>
  );
}
