import React from "react";

import { FormData } from "./mockFormListData";

export type DisplayFormData = {
  label: string;
  value: string;
};

export function useFormList(
  formDataList: FormData[]
): [
  DisplayFormData[],
  (label: string, event: React.ChangeEvent<HTMLInputElement>) => void,
  boolean,
  (event: React.FocusEvent<HTMLInputElement>) => void,
  (event: React.FocusEvent<HTMLInputElement>) => void
] {
  const [displayFormDataList, setDisplayFormDataList] = React.useState<
    DisplayFormData[]
  >((): DisplayFormData[] => {
    const initialDisplayFormDataList: DisplayFormData[] = JSON.parse(
      JSON.stringify(formDataList)
    ).map((formData: FormData) => {
      return {
        id: formData.label,
        label: formData.label,
        value: formData.value,
      };
    });

    return initialDisplayFormDataList;
  });

  const [isFocusing, setIsFocusing] = React.useState<boolean>(false);

  const handleChangeValue = React.useCallback(
    (label: string, event: React.ChangeEvent<HTMLInputElement>) => {
      setDisplayFormDataList((prevState: DisplayFormData[]) => {
        const updateDisplayFormDataList = prevState.map(
          (formData: DisplayFormData) => {
            if (formData.label === label) {
              return {
                id: formData.label,
                label: formData.label,
                value: event.target.value,
              };
            } else {
              return formData;
            }
          }
        );
        return updateDisplayFormDataList;
      });
    },
    [setDisplayFormDataList]
  );

  const handleFocus = React.useCallback(
    () => setIsFocusing((state) => !state),
    []
  );

  const handleBlur = React.useCallback(
    () => setIsFocusing((state) => !state),
    []
  );

  return [
    displayFormDataList,
    handleChangeValue,
    isFocusing,
    handleFocus,
    handleBlur,
  ];
}
