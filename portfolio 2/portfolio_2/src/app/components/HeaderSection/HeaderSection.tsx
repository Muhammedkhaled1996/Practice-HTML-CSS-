import Headerimage1 from "@/assets/images/Headerimage1.png";
import Image from "next/image";

export default function HeaderSection() {
  return (
    <div className="min-w-screen min-h-screen overflow-hidden">
      <div className="flex py-[42px] px-6 justify-center items-center gap-[4268px] flex-wrap bg-[#FFF] w-[1280px] absolute left-5 top-6">
        <div className="flex min-w-[320px] max-w-[620px] flex-col items-start gap-12 w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <p className="text-[#2D2D2D] font-epilogue text-xl font-semibold leading-[30px] w-full">
              Branding | Image making{" "}
            </p>
            <p className="text-[#2D2D2D] font-epilogue text-[68px] font-semibold w-full">
              Visual Designer
            </p>
            <p className="text-[#2D2D2D] font-epilogue text-[17px] leading-[27px] w-full">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
          </div>
          <button className="cursor-pointer text-nowrap flex py-6 px-16 justify-center items-center gap-2.5 bg-[#2D2D2D] w-fit">
            <p className="text-[#FFF] font-epilogue text-xl font-semibold leading-[30px] w-fit">
              Contact
            </p>
          </button>
        </div>
        <Image
          width={200}
          height={200}
          src={Headerimage1}
          className="min-w-[320px] max-w-[480px] w-full h-[360px] max-w-none"
          alt="HeaderImage 1"
        />
      </div>
      <div className="flex py-16 px-6 justify-center items-center gap-[86px] bg-[#FFF] w-[1280px] absolute left-5 top-[498px] overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-[189px] w-fit h-full">
          <svg
            width="60"
            height="62"
            viewBox="0 0 60 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[75px] "
          >
            <path
              d="M-9.06462e-06 61.2006L6.79542 61.2006L6.79542 54.1685L-1.02304e-05 54.1685L-9.06462e-06 61.2006ZM59.1404 5.48572e-07L52.345 1.37142e-06L52.345 7.03215L59.1404 7.03215L59.1404 5.48572e-07ZM3.98621 58.2936L56.3312 4.12508L55.1542 2.90707L2.8092 57.0756L3.98621 58.2936Z"
              fill="#2D2D2D"
            />
          </svg>
          <svg
            width="154"
            height="154"
            viewBox="0 0 154 154"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[153px] h-[153px] "
          >
            <path
              d="M0 76.6149C0 34.3017 34.3017 0 76.6149 0C118.928 0 153.23 34.3017 153.23 76.6149V153.23H0V76.6149Z"
              fill="#FF6250"
            />
          </svg>
        </div>
        <div className="flex min-w-[320px] max-w-[460px] flex-col items-center gap-12 w-full">
          <p className="text-[#2D2D2D] font-epilogue text-xl font-semibold leading-[30px] w-full text-center">
            Branding | Image making{" "}
          </p>
          <p className="text-[#2D2D2D] font-epilogue text-[68px] font-semibold w-full text-center">
            Visual Designer
          </p>
          <p className="text-[#2D2D2D] font-epilogue text-[17px] leading-[27px] w-full text-center">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
          <button className="cursor-pointer text-nowrap flex py-6 px-16 justify-center items-center gap-2.5 bg-[#2D2D2D] w-fit">
            <p className="text-[#FFF] font-epilogue text-xl font-semibold leading-[30px] w-fit">
              Contact
            </p>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-[197px] w-fit h-full">
          <svg
            width="154"
            height="154"
            viewBox="0 0 154 154"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[153px] h-[153px] "
          >
            <path
              d="M0 0C84.6265 0 153.23 68.6033 153.23 153.23H0V0Z"
              fill="#009379"
            />
          </svg>
          <svg
            width="56"
            height="58"
            viewBox="0 0 56 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[74px] "
          >
            <path
              d="M-4.09253e-05 57.3053L6.65141 57.3053L6.65141 50.4222L-4.20664e-05 50.4222L-4.09253e-05 57.3053ZM55.3763 0.842981C55.3763 0.377399 55.0115 -3.01062e-05 54.5616 -2.97933e-05L47.2299 -3.06787e-05C46.78 -3.06015e-05 46.4153 0.377403 46.4153 0.84298C46.4153 1.30856 46.78 1.68599 47.2299 1.68599L53.747 1.68599L53.747 8.43008C53.747 8.89566 54.1117 9.27309 54.5616 9.27309C55.0115 9.27309 55.3763 8.89566 55.3763 8.43008L55.3763 0.842981ZM3.90172 54.4599L55.1377 1.43908L53.9856 0.246882L2.74965 53.2677L3.90172 54.4599Z"
              fill="#2D2D2D"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
