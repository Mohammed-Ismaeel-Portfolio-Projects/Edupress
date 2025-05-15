import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BreakCrumb = ({ breakLinks }) => {
  return (
    <div className="w-full h-16 bg-whiteGrey flex items-center absolute mt-20 text-black z-50">
      <div className="w-11/12 mx-auto">
        <ul className="flex">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breakLinks?.map((ele, key) => {
              const isLast = key === breakLinks.length - 1;
              return isLast ? (
                <Typography key={key} sx={{ color: "text.primary" }}>
                  {ele.title}
                </Typography>
              ) : (
                <Link
                  underline="hover"
                  key={key}
                  color="inherit"
                  href={`/${ele.href}`}
                >
                  {ele.title}
                </Link>
              );
            })}
          </Breadcrumbs>
        </ul>
      </div>
    </div>
  );
};

export default BreakCrumb;
