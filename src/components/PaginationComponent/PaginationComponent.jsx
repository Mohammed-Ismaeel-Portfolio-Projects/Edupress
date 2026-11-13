import Pagination from "@mui/material/Pagination";

const PaginationComponent = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange = () => {},
}) => {
  return (
    <div className="w-full py-4">
      <Pagination
        count={Math.max(totalPages, 1)}
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
