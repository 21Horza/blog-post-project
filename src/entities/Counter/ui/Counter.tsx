import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/deprecated/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const counterValue = useCounterValue();
  const { t } = useTranslation();
  const { decrement, increment, add } = useCounterActions();

  const handleIncrement = () => {
    increment();
  };

  const handleDecrement = () => {
    decrement();
  };

  const handleAddFive = () => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button
        onClick={handleIncrement}
        data-testid="increment-btn"
      >
        {t('increment')}
      </Button>
      <Button
        onClick={handleAddFive}
        data-testid="increment-btn5"
      >
        {t('Add five')}
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={handleDecrement}
      >
        {t('decrement')}
      </Button>
    </div>
  );
};
