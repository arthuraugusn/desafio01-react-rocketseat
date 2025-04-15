import { CirclePlus } from "lucide-react";
import styles from "./Input.module.css";
import React from "react";

interface InputProps {
  onClick: () => void;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export function Input({ onClick, onChangeValue, value }: InputProps) {
  return (
    <div className={styles.div}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
        onChange={onChangeValue}
        value={value}
      />
      <button className={styles.button} onClick={onClick}>
        Criar <CirclePlus />
      </button>
    </div>
  );
}
