export type FormData = {
  label: string;
  value: string;
};

export const formListData: FormData[] = [];
for (let i: number = 1; i <= 100; i++) {
  formListData.push({
    label: `label${i}`,
    value: `value${i}`,
  });
}
