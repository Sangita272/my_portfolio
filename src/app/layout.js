import ScrollToTop from "@/components/common/ScrollToTop";
import "./globals.scss";
import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["devanagari", "latin"],
  display: "swap",
});

export const metadata = {
  title: "Sangita Manna",
  description:
    "Sangita Manna is a proficient Full Stack Developer, skilled in seamlessly integrating front-end and back-end technologies while excelling in design.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={poppins.className}>
       <Script id="tawk" strategy="lazyOnload">
        {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6595054b8d261e1b5f4e942c/1hj71pcdn';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
        `}
      </Script>
      <body>
        <ScrollToTop /> {children}
      </body>
    </html>
  );
};

export default RootLayout;
