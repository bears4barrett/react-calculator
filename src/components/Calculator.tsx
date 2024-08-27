import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { calculatorInputs } from '../lib/calculatorInputs'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';


interface CalculatorProps {
  themeMode: 'light' | 'dark';
  changeThemeMode: (themeMode: 'light' | 'dark') => void;
};

const Calculator = (props: CalculatorProps) => {
  const [display, setDisplay] = useState('');
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [operator, setOperator] = useState('');

  useEffect(() => {
    setDisplay('');
  }, []);

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 m-6 h-16">
        <Button
          className="col-span-1 h-full"
          variant="secondary"
          onClick={() => {
            props.themeMode === 'light' ?
              props.changeThemeMode('dark') :
              props.changeThemeMode('light')
          }}
        >
          {props.themeMode === 'light' ?
            <SunIcon className="w-6 h-6" /> :
            <MoonIcon className="w-6 h-6"/>
          }
        </Button>
        <div
          className="col-span-11 p-3 rounded text-right h-full text-4xl text-zinc-900"
          style={{
            backgroundColor: '#f1f1f1'
          }}
        >
          {display}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 p-6">
        {calculatorInputs.map((input, index) => {
          let className = 'w-full';
          if (input.value === 0) {
            className += ' col-span-2';
          }
          if (operator === input.value.toString()) {
            className += ' bg-orange-400 hover:bg-orange-400';
          } else if (input.operator) {
            className += ' bg-orange-300 hover:bg-orange-400';
          } else {
            className += ' bg-gray-400 hover:bg-gray-500';
          }

          return (
            <Button
              key={index}
              onClick={() => {
                if (input.operator) {
                  setOperator(input.value.toString());
                } else {
                  if (operator === '') {
                    const newFirstValue = firstValue + input.value.toString();
                    setFirstValue(newFirstValue);
                    setDisplay(newFirstValue);
                  } else {
                    const newSecondValue = secondValue + input.value.toString();
                    setSecondValue(newSecondValue);
                    setDisplay(newSecondValue);
                  }
                }
              }}
              className={className}
            >
              {input.label}
            </Button>
          );
        })}
        <Button
          className="col-span-3 w-full"
          variant="secondary"
          onClick={() => {
            setDisplay('');
            setFirstValue('');
            setSecondValue('');
            setOperator('');
          }}
        >
          Clear
        </Button>
        <Button
          className="bg-orange-300 hover:bg-orange-400"
          onClick={() => {
            let result = 0;
            switch (operator) {
              case '+':
                result = Number(firstValue) + Number(secondValue);
                break;
              case '-':
                result = Number(firstValue) - Number(secondValue);
                break;
              case '*':
                result = Number(firstValue) * Number(secondValue);
                break;
              case '/':
                result = Number(firstValue) / Number(secondValue);
                break;
            }
            setDisplay(result.toString());
            setFirstValue(result.toString());
            setSecondValue('');
            setOperator('');
          }}
        >
          =
        </Button>
      </div>
    </div>
  )
}

export default Calculator;