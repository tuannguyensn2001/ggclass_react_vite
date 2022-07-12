import SelectMaterial from "~/components/SelectMaterial";
import clsx from "clsx";
import { memo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

function FormQuestion({ index, active, setActiveQuestion }) {
  const { control } = useFormContext();

  const handleClick = () => {
    setActiveQuestion(index);
  };

  return (
    <div
      onClick={handleClick}
      className={clsx([
        "tw-bg-slate-100 tw-border-2 tw-border-solid tw-border-slate-50 tw-cursor-pointer tw-rounded-xl tw-p-5",
        { "tw-bg-blue-50 tw-border-blue-600": active },
      ])}
    >
      <div>Cau {index + 1}</div>
      <div className={"tw-mt-4"}>
        <SelectMaterial
          value={"1"}
          label={"Loai"}
          options={[{ value: "1", text: "Trac nghiem" }]}
        />
      </div>
      <div className={"tw-mt-4"}>
        <Controller
          name={`questions.${index}.answer`}
          control={control}
          render={({ field }) => (
            <TextField fullWidth size={"small"} {...field} label={"Dap an"} />
          )}
        />
      </div>
      <div className={"tw-mt-4"}>
        <Controller
          name={`questions.${index}.mark`}
          control={control}
          render={({ field }) => (
            <TextField
              type={"number"}
              fullWidth
              size={"small"}
              {...field}
              label={"Diem"}
            />
          )}
        />
      </div>
    </div>
  );
}

export default memo(FormQuestion);
