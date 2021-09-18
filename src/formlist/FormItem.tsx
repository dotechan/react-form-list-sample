import React from "react";

import { DisplayFormData } from "./useFormList";

type Props = {
  displayFormData: DisplayFormData;
  handleChangeValue: (
    label: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  isFocusing: boolean;
  handleFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
};

/**
 * コンポーネントをレンダリングするか判定する関数
 * フォームのリストに反映するデータを配列としてState管理しており
 * propsのハンドラーは配列のStateに依存しているため文字を入力するたびに再計算される
 * 文字の入力時は入力されているコンポーネントのみ入力された値を使用して再レンダリングしたいので
 * 常に再計算されるハンドラーはレンダリングの条件から除外する
 * フォーカスの状態が変更されたタイミングでハンドラーも含めて再計算する
 * @param prevProps
 * @param nextProps
 * @returns
 */
function propsAreEqual(prevProps: Props, nextProps: Props): boolean {
  const prevDispData = prevProps.displayFormData;
  const nextDispData = nextProps.displayFormData;

  return (
    prevDispData.label === nextDispData.label &&
    prevDispData.value === nextDispData.value &&
    prevProps.isFocusing === nextProps.isFocusing
  );
}

const FormItem: React.VFC<Props> = React.memo((props: Props) => {
  const { displayFormData, handleChangeValue, handleFocus, handleBlur } = props;
  return (
    <form>
      <label>
        Name:
        <input
          name={displayFormData.label}
          type="text"
          value={displayFormData.value}
          onChange={(e) => handleChangeValue(displayFormData.label, e)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </label>
    </form>
  );
}, propsAreEqual);

export default FormItem;
