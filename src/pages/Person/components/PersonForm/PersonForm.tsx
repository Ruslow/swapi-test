import { snakeCaseToWords } from "../../../../utils/snakeCaseToWords/snakeCaseToWords";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useState, type FC, type ChangeEvent, useRef } from "react";
import { FormControl, IconButton, TextField } from "@mui/material";

interface PersonFormProps {
  name: string;
  value: string;
}

export const PersonForm: FC<PersonFormProps> = ({ name, value }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [inputValue, setInputValue] = useState(value);
  const lastValue = useRef<string>(inputValue);

  const handleChangeInputValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setInputValue(e.target.value);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleConfirm = () => {
    // localStorage.setItem("");
    lastValue.current = inputValue;
    setIsEditing(false);
  };

  const handleCancel = () => {
    setInputValue(lastValue.current);
    setIsEditing(false);
  };

  const nameToWords = snakeCaseToWords(name);

  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      {isEditing ? (
        <FormControl>
          <TextField
            placeholder={nameToWords}
            size="small"
            value={inputValue}
            onChange={handleChangeInputValue}
          />
        </FormControl>
      ) : (
        <div style={{ display: "flex", gap: "32px" }}>
          <h5>{nameToWords}:</h5>

          <p>{lastValue.current}</p>
        </div>
      )}

      {!isEditing ? (
        <IconButton color="primary" size="small" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
      ) : (
        <div style={{ display: "flex", gap: "4px" }}>
          <IconButton color="success" size="small" onClick={handleConfirm}>
            <CheckIcon />
          </IconButton>

          <IconButton color="error" size="small" onClick={handleCancel}>
            <CloseIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};
