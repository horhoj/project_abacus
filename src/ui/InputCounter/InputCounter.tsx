import styles from './InputCounter.module.scss';

interface InputCounterProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export function InputCounter({ label, value, onChange }: InputCounterProps) {
  return (
    <div className={styles.InputCounterWrapper}>
      {label}: {value}{' '}
      <button onClick={() => onChange(value + 1)} className={styles.btn}>
        +
      </button>{' '}
      <button onClick={() => onChange(value - 1)} className={styles.btn}>
        -
      </button>
    </div>
  );
}
