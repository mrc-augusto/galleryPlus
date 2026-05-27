import { InputText } from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react";
import { useCallback, useState } from "react";
import { debounce } from "../helpers/utils";

export function PhotosSearch() {
  const[inputValue, setInputValue] = useState('')

  const debounceSetValue = useCallback(
    debounce((value: string) => {
      console.log('Valor com debounce:', value)
    }, 500),
    []
  )

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
    const value = e.target.value
    setInputValue(value)
    debounceSetValue(value)
  }


  return (
    <InputText
      icon={SearchIcon}
      placeholder="Buscar fotos"
      className="flex-1"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
