import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";

const HeaderHeader = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-white flex flex-col items-start justify-between pt-[19.1px] px-[120px] pb-[19px] box-border min-h-[80px] top-[0] z-[99] sticky max-w-full text-left text-xl text-orangered font-marko-one mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[60px] mq750:pr-[60px] mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full">
        <div className="flex flex-row items-center justify-start gap-[11px]">
          <img
            className="h-10 w-10 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/realestate-1.svg"
          />
          <div className="relative leading-[36px] inline-block min-w-[77px] whitespace-nowrap">
            Relasto
          </div>
        </div>
        <div className="w-[492px] flex flex-row items-center justify-between max-w-full text-center text-base text-gray-300 font-manrope mq1050:hidden">
          <FormControl
            className="h-4 w-[77px] font-manrope font-semibold text-base text-gray-300"
            variant="standard"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "77px",
              height: "16px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "16px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "16px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "16px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "16px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
            }}
          >
            <InputLabel color="primary" />
            <Select color="primary" disableUnderline displayEmpty />
            <FormHelperText />
          </FormControl>
          <FormControl
            className="h-4 w-[77px] font-manrope font-semibold text-base text-gray-300"
            variant="standard"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "77px",
              height: "16px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "16px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "16px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "16px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "16px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
            }}
          >
            <InputLabel color="primary" />
            <Select color="primary" disableUnderline displayEmpty />
            <FormHelperText />
          </FormControl>
          <FormControl
            className="h-4 w-[77px] font-manrope font-semibold text-base text-gray-300"
            variant="filled"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "77px",
              height: "16px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "16px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "16px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "16px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "16px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
            }}
          >
            <InputLabel color="primary" />
            <Select color="primary" disableUnderline displayEmpty />
            <FormHelperText />
          </FormControl>
          <div className="relative leading-[16px] font-semibold inline-block min-w-[67px] whitespace-nowrap">{`Property `}</div>
          <div className="relative leading-[16px] font-semibold text-left inline-block min-w-[34px]">
            Blog
          </div>
        </div>
        <div className="w-[228px] flex flex-row items-center justify-start gap-[40px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[8px]">
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/icon--24px--search.svg"
            />
            <b className="relative text-lg leading-[18px] inline-block font-manrope text-gray-300 text-left min-w-[62px] whitespace-nowrap">
              Search
            </b>
          </button>
          <button className="cursor-pointer [border:none] py-[13px] px-6 bg-gray-300 rounded-3xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray-300">
            <div className="relative text-base leading-[16px] font-semibold font-manrope text-white text-center inline-block min-w-[46px]">
              Log in
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

HeaderHeader.propTypes = {
  className: PropTypes.string,
};

export default HeaderHeader;
