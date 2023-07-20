import Header from "@components/Header";
import FooterHome from "@components/FooterHome";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-home_bg bg-cover flex">
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex flex-1 items-end">
          <FooterHome />
        </div>
      </div>
    </div>
  );
}
