import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

const BreakCrumb = ({ breakLinks }) => {
  return (
    <div className="w-full h-16 bg-whiteGrey flex items-center absolute mt-20 text-black z-40 border-b border-slate-200">
      <div className="w-11/12 mx-auto px-4">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breakLinks?.map((ele, index) => {
            const isLast = index === breakLinks.length - 1;
            const targetPath = !ele.href || ele.href === 'home' ? '/' : `/${ele.href.replace(/^\//, '')}`;

            return isLast ? (
              <Typography key={index} sx={{ color: "text.primary", fontWeight: 600 }}>
                {ele.title}
              </Typography>
            ) : (
              <RouterLink
                key={index}
                to={targetPath}
                className="text-gray-600 hover:text-orange hover:underline text-sm font-medium no-underline"
              >
                {ele.title}
              </RouterLink>
            );
          })}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default BreakCrumb;
