import { useState } from "react";
import questions from "../FAQs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleChange = (index) => (_, isExpanded) => {
    setExpandedIndex(isExpanded ? index : null);
  };

  return (
    <div className="w-11/12 mx-auto grid grid-cols-2 gap-6 max-md:grid-cols-1">
      {questions.map((q, index) => (
        <div key={index} className="flex flex-col">
          <Accordion
            className="w-full rounded-2xl overflow-hidden border border-slate-200"
            style={{ backgroundColor: "rgba(245, 245, 245, 1)", boxShadow: "none" }}
            expanded={expandedIndex === index}
            onChange={handleChange(index)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography
                component="span"
                className={`${
                  expandedIndex === index
                    ? "text-orange !important"
                    : "text-black"
                }`}
                style={{ fontWeight: "600", fontFamily: "exo" }}
              >
                {q.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "#555", lineHeight: 1.6 }}>{q.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
