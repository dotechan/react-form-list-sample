import React from "react";

import { DisplayFormData, useFormList } from "./useFormList";
import { FormData } from "./mockFormListData";
import FormItem from "./FormItem";

type Props = {
  formDataList: FormData[];
};

const FormList: React.VFC<Props> = (props: Props) => {
  const [displayFormDataList, handleChangeValue] = useFormList(
    props.formDataList
  );

  return (
    <div>
      {displayFormDataList.map((displayFormData: DisplayFormData) => {
        const formData = {
          id: displayFormData.label,
          label: displayFormData.label,
          value: displayFormData.value,
        };

        return (
          <FormItem
            key={formData.label}
            displayFormData={formData}
            handleChangeValue={handleChangeValue}
          />
        );
      })}
    </div>
  );
};

export default FormList;
