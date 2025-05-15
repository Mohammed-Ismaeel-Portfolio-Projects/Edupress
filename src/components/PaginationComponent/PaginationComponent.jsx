import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import Pagination from "@mui/material/Pagination";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="w-full ">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, value) => onPageChange(value)}
        size="large"
        className="mx-auto w-max"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#000", 
            borderColor: "#000",
          },
          "& .Mui-selected": {
            backgroundColor: "#000 !important",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#444",
            },
          },
        }}
      />
    </div>
  );
};

export default PaginationComponent;
