import PropTypes from "prop-types";

const Blog = ({ className = "", easyToAmbitiousDIYProject }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-5xl text-white font-manrope ${className}`}
    >
      <div className="self-stretch h-[349px] relative rounded-3xs" />
      <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.48px] leading-[32.4px] font-bold font-inherit mq450:text-lgi mq450:leading-[26px]">
        {easyToAmbitiousDIYProject}
      </h3>
      <div className="flex flex-row items-start justify-start gap-[8px] text-lg text-coral">
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <b className="relative leading-[18px]">Read the Article</b>
        </div>
        <img
          className="h-6 w-6 relative min-h-[24px]"
          alt=""
          src="/icon--24px--v-arrow--right-3.svg"
        />
      </div>
    </div>
  );
};

Blog.propTypes = {
  className: PropTypes.string,
  easyToAmbitiousDIYProject: PropTypes.string,
};

export default Blog;
