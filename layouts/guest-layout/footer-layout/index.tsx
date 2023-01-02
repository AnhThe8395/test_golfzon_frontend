import Image from "next/image";
import Link from "next/link";

const footerItems = [
  {
    id: 1,
    title: "What We Do",
    items: [
      "Web Design",
      "App Design",
      "Social Media Manage",
      "Market Analysis Project",
    ],
  },
  {
    id: 2,
    title: "Company",
    items: ["About Us", "Career", "Become Investor"],
  },
  {
    id: 3,
    title: "Support",
    items: ["FAQ", "Policy", "Business"],
  },
  {
    id: 4,
    title: "Contact",
    items: ["WhatsApp", "Support 24"],
  },
];
const Footer = () => {
  return (
    <div className="max-w-7xl border-t border-[#E4E4E4] mx-auto">
      <div className="grid grid-cols-12 pt-[62px] mb-7">
        <div className="col-span-4">
          {/* <Image
            src={"./images/logo-studio.svg"}
            alt={""}
            width={106}
            height={30}
          /> */}
          <div className="text-[#565656] text-sm max-w-[270px] mt-6 pt-0.5 mb-10">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </div>
          <div className="flex gap-4 items-center justify-start">
            {/* <Image
              src={"./icons/facebook.svg"}
              alt={""}
              width={36}
              height={36}
            />
            <Image
              src={"./icons/twitter.svg"}
              alt={""}
              width={36}
              height={36}
            />
            <Image
              src={"./icons/linkedin.svg"}
              alt={""}
              width={36}
              height={36}
            /> */}
          </div>
        </div>
        <div className="col-span-8 flex justify-between">
          {footerItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-start items-center"
            >
              <div className="w-fit">
                <h1 className="text-black text-xl font-semibold">
                  {item.title}
                </h1>
                <div className="grid grid-cols-1 text-sm text-black gap-4  mt-6 font-normal">
                  {item.items.map((subTitle, idx) => (
                    <Link key={idx} href="#" legacyBehavior>
                      {subTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-[#A4A4A4] text-sm border-[#F1F1F1] border-t">
        <div className="mt-4 mb-11 py-0.5 text-center">
          Copyright © 2022 Avi Yansah
        </div>
      </div>
    </div>
  );
};

export default Footer;
