import { Check } from "lucide-react";
import styles from "./Checkbox.module.css"

interface CheckboxProps {
    isCompleted: boolean
    setIsCompleted: () => void
}

export function Checkbox({
    isCompleted,
    setIsCompleted
}: CheckboxProps) {
  return (
    <>
      <div className={isCompleted ? styles.completed : styles.notCompleted} onClick={setIsCompleted}>
        <Check className={isCompleted ? styles.iconCompleted : styles.iconNotCompleted}/>
      </div>
    </>
  );
}
