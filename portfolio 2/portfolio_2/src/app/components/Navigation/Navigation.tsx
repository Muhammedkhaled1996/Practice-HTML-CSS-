export default function Navigation() {
  return (
    <div className="flex py-6 px-[42px] justify-between items-center flex-wrap bg-[#FFF] min-w-screen min-h-screen">
      <p className="text-[#2D2D2D] font-epilogue text-xl font-semibold leading-[30px] w-fit">
        Logo
      </p>
      <div className="flex justify-end items-start gap-6 w-fit">
        <p className="text-[#2D2D2D] font-epilogue text-[17px] leading-[27px] w-fit">
          About
        </p>
        <p className="text-[#2D2D2D] font-epilogue text-[17px] leading-[27px] w-fit">
          Work
        </p>
        <p className="text-[#2D2D2D] font-epilogue text-[17px] leading-[27px] w-fit">
          Contact
        </p>
      </div>
    </div>
  );
}
