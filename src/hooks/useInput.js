import {useState} from "react";

export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = e => {
        setValue(e.target.value);   // функция е устанавливает текущее значение target в value
    }
    return {
        value, onChange
    }

}
