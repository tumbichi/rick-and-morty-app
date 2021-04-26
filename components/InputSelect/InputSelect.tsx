import React from "react";
import Select, {
  components,
  StylesConfig,
  OptionsType,
  GroupTypeBase,
} from "react-select";
import { DownOutlined, CloseOutlined } from "@ant-design/icons";
import { palette } from "theme";
import styled from "styled-components";

export const ArrowDropIcon = (props: any) => {
  return props.selectProps.menuIsOpen ? (
    <DownOutlined style={{ color: palette.text, fontSize: "12px" }} />
  ) : (
    <DownOutlined style={{ color: palette.text, fontSize: "12px" }} />
  );
};

export const ClearIndicator = (props: any) => {
  return (
    <components.ClearIndicator {...props}>
      <CloseOutlined />
    </components.ClearIndicator>
  );
};

export const LoadingIndicator = (props: any) => {
  return <LoadingSpinner />;
};

export const InputSelect = ({
  loading,
  options,
  placeholder,
  value,
}: any) => {
  return (
    <Select
      isClearable
      components={{
        DropdownIndicator: ArrowDropIcon,
        ClearIndicator,
        LoadingIndicator,
      }}
      options={options}
      placeholder={placeholder}
      value={value}
      isLoading={loading}
      styles={
        customStyles as StylesConfig<
          OptionsType<{}>,
          false,
          GroupTypeBase<OptionsType<{}>>
        >
      }
    />
  );
};

export const LoadingSpinner = styled.span`
  border: 2px solid transparent;
  border-top: 2px solid #eeeeee;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin: 0 6px 0 0;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const customStyles = {
  container: (styledProvides: any, { isFocused, isDisabled }: any) => ({
    ...styledProvides,
  }),
  control: (styledProvides: any, { isFocused, isDisabled }: any) => {
    return {
      height: "32px",
      display: "flex",
      padding: `0 11px`,
      opacity: isDisabled ? 0.5 : 1,
      boxSizing: "border-box",
      // backgroundColor: isFocused ? "rgba(0, 0, 0, 0.05)" : "transparent",
      border: isFocused
        ? `solid 1px ${palette.primary}`
        : `solid 1px ${palette.border}`,
      transition: `all .3s cubic-bezier(.645,.045,.355,1)`,
      "box-shadow": isFocused && `0 0 0 2px rgb(104, 164, 58, 20%)`,
      "&:hover": {
        cursor: isDisabled ? "not-allowed" : "pointer",
        border: isDisabled
          ? "0"
          : isFocused
          ? `1px solid ${palette.primary}`
          : `1px solid ${palette.primary}`,
      },
    };
  },
  menu: () => ({
    backgroundColor: "white",
    boxShadow: "1px 2px 6px #888888", // should be changed as material-ui
    position: "absolute",
    left: 0,
    top: `calc(100% + 1px)`,
    width: "100%",
    zIndex: 2,
    maxHeight: 32 * 4.5,
  }),
  menuList: () => ({
    maxHeight: 32 * 4.5,
    overflowY: "auto",
  }),
  indicatorSeparator: (styledProvides: any, state: any) => {
    return {};
  },
  singleValue: (styledProvides: any, state: any) => {
    return {
      color: palette.text,
    };
  },
  multiValue: (styledProvides: any, state: any) => {
    // console.log('multiValue styledProvides', styledProvides);
    return {
      ...styledProvides,
      borderRadius: 12,
      backgroundColor: "#d4d4d4",
      padding: "0 0.125rem",
    };
  },
  multiValueRemove: (styledProvides: any, state: any) => {
    // console.log('multiValueRemove styledProvides', styledProvides);
    return {
      ...styledProvides,
      ":hover": {},
      padding: "0",
      margin: "2px 4px",
    };
  },
  placeholder: (styledProvides: any, state: any) => {
    return {
      fontSize: "1rem",
      color: "#9e9e9e",
    };
  },
};
