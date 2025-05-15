import React, { useState } from "react";
// import Question from "../Question/Question";
import questions from "../FAQs";
import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleChange = (index) => (_, isExpanded) => {
    setExpandedIndex(isExpanded ? index : null);
  };

  return (
    <div className="mt-52 w-11/12 mx-auto grid grid-cols-2 gap-6 max-md:grid-cols-1">
      {questions.map((q, index) => (
        <div key={index} className="flex flex-col">
          <Accordion
            className="w-full"
            style={{ backgroundColor: "rgba(245, 245, 245, 1)" }}
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
                className={`text-black ${
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
              <Typography>{q.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
