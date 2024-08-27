interface CalculatorInput {
  label: string;
  value: number | string;
  operator: boolean;
};

export const calculatorInputs: Array<CalculatorInput> = [
  {
    label: '7',
    value: 7,
    operator: false,
  },
  {
    label: '8',
    value: 8,
    operator: false,
  },
  {
    label: '9',
    value: 9,
    operator: false,
  },
  {
    label: '÷',
    value: '/',
    operator: true,
  },
  {
    label: '4',
    value: 4,
    operator: false,
  },
  {
    label: '5',
    value: 5,
    operator: false,
  },
  {
    label: '6',
    value: 6,
    operator: false,
  },
  {
    label: 'x',
    value: '*',
    operator: true,
  },
  {
    label: '1',
    value: 1,
    operator: false,
  },
  {
    label: '2',
    value: 2,
    operator: false,
  },
  {
    label: '3',
    value: 3,
    operator: false,
  },
  {
    label: '-',
    value: '-',
    operator: true,
  },
  {
    label: '0',
    value: 0,
    operator: false,
  },
  {
    label: '.',
    value: '.',
    operator: false,
  },
  {
    label: '+',
    value: '+',
    operator: true
  },
];