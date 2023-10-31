import Image from "next/image";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });
const App = dynamic(() => import("@/admin/App"), { ssr: false });

export default function Home() {
  return <App />;
}
