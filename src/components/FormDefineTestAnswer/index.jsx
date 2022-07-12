import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormQuestion from "~/components/FormQuestion";
import { useEffect, useMemo, useState } from "react";
import FormNumberQuestionAndMark from "~/components/FormNumberQuestionAndMark";

function FormDefineTestAnswer() {
  const { control, watch, setValue } = useFormContext();

  const [activeQuestion, setActiveQuestion] = useState(0);

  const { fields, append, remove, insert, update } = useFieldArray({
    control: control,
    name: "questions",
  });

  useEffect(() => {
    const n = Number(watch("number_of_questions"));
    const currentLength = fields.length;
    const totalMark = Number(watch("total_mark"));

    if (n === 0) return;

    fields.forEach((item, index) => {
      setValue(`questions.${index}`, {
        ...item,
        mark: totalMark / n,
      });
    });

    if (n > currentLength) {
      const dataInsert = [];
      for (let i = 1; i <= n - currentLength; i++) {
        dataInsert.push({
          answer: "",
          mark: totalMark / n,
        });
      }
      append(dataInsert);
    }

    if (n < currentLength) {
      const indexRemove = [];
      for (let i = 1; i <= currentLength - n; i++) {
        indexRemove.push(currentLength - i);
      }
      remove(indexRemove);
    }
  }, [watch("number_of_questions")]);

  useEffect(() => {
    const n = fields.length;
    const totalMark = Number(watch("total_mark"));

    fields.forEach((item, index) => {
      setValue(`questions.${index}`, {
        ...item,
        mark: totalMark / n,
      });
    });
  }, [watch("total_mark")]);

  return (
    <div>
      <FormNumberQuestionAndMark />
      <div className={"tw-mt-10"}>
        <div className="tw-grid tw-grid-cols-3 tw-gap-4">
          {fields.map((item, index) => (
            <FormQuestion
              active={index === activeQuestion}
              index={index}
              setActiveQuestion={setActiveQuestion}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormDefineTestAnswer;
