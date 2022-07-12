import PreviewFileHomework from "~/components/PreviewFileHomework";
import FormDefineTestAnswer from "~/components/FormDefineTestAnswer";
import { useForm, FormProvider } from "react-hook-form";
import { useEffect } from "react";

function PreviewHomework() {
  const methods = useForm({
    defaultValues: {
      number_of_questions: 1,
      questions: [{ answer: "", mark: 10 }],
      total_mark: 10,
    },
  });

  return (
    <FormProvider {...methods}>
      <div className={"tw-flex"}>
        <div className={"tw-w-1/2"}>
          <PreviewFileHomework />
        </div>
        <div className={"tw-w-1/2"}>
          <FormDefineTestAnswer />
        </div>
      </div>
    </FormProvider>
  );
}

export default PreviewHomework;
