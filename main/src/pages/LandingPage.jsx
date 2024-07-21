import HeaderHeader from "../components/HeaderHeader";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import PropertyList from "../components/PropertyList";
import FindAppointment from "../components/FindAppointment";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterFooter from "../components/FooterFooter";

const LandingPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <HeaderHeader />
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <PropertyList />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[100px] box-border max-w-full lg:pb-[65px] lg:box-border mq450:pb-[27px] mq450:box-border mq1050:pb-[42px] mq1050:box-border">
        <div className="flex-1 bg-snow flex flex-col items-center justify-start py-[120px] pr-5 pl-[21px] box-border gap-[150px] max-w-full lg:gap-[75px] lg:pt-[78px] lg:pb-[78px] lg:box-border mq450:gap-[19px] mq450:pt-[33px] mq450:pb-[33px] mq450:box-border mq750:gap-[37px] mq1050:pt-[51px] mq1050:pb-[51px] mq1050:box-border">
          <FindAppointment />
          <FrameComponent2 />
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <FooterFooter />
    </div>
  );
};

export default LandingPage;
