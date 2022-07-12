import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { memo, useEffect } from "react";

function FormNumberQuestionAndMark() {
  const { control } = useFormContext();

  return (
    <div className="tw-flex  tw-text-white">
      <div>
        <Controller
          control={control}
          name={"number_of_questions"}
          render={({ field }) => (
            <TextField
              variant={"outlined"}
              label={"So cau"}
              size={"small"}
              type={"number"}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div className={"tw-ml-4"}>
        <Controller
          control={control}
          name={"total_mark"}
          render={({ field }) => (
            <TextField
              variant={"outlined"}
              label={"Tong diem"}
              size={"small"}
              type={"number"}
              {...field}
            />
          )}
        />
      </div>
    </div>
  );
}

export default memo(FormNumberQuestionAndMark);
