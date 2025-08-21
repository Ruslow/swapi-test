import { useState, type FC, type ChangeEvent, useRef, useEffect } from "react";
import { snakeCaseToWords } from "@utils";
import { FormControl, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonsWrapper } from "../../PersonPage.styles";
import {
  ContentWrapper,
  KeyValueWrapper,
  TextInput,
} from "./PersonForm.styles";

interface PersonFormProps {
  name: string;
  value: string;
  id: string | undefined;
}

export const PersonForm: FC<PersonFormProps> = ({ name, value, id }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [inputValue, setInputValue] = useState(value);
  const lastValue = useRef<string>(inputValue);

  useEffect(() => {
    const person = localStorage.getItem(`person-${id}`);
    const personValue = person ? JSON.parse(person)[name] : null;

    if (personValue) {
      setInputValue(personValue);
      lastValue.current = personValue;
    }
  }, []);

  const handleChangeInputValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setInputValue(e.target.value);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleConfirm = () => {
    const person = localStorage.getItem(`person-${id}`);

    if (person) {
      localStorage.setItem(
        `person-${id}`,
        JSON.stringify({ ...JSON.parse(person), [name]: inputValue })
      );
    } else {
      localStorage.setItem(
        `person-${id}`,
        JSON.stringify({ [name]: inputValue })
      );
    }
    lastValue.current = inputValue;
    setIsEditing(false);
  };

  const handleCancel = () => {
    setInputValue(lastValue.current);
    setIsEditing(false);
  };

  const nameToWords = snakeCaseToWords(name);

  return (
    <ContentWrapper>
      {isEditing ? (
        <FormControl>
          <TextInput
            label={name}
            name={name}
            placeholder={nameToWords}
            size="small"
            value={inputValue}
            onChange={handleChangeInputValue}
          />
        </FormControl>
      ) : (
        <KeyValueWrapper>
          <Typography variant="h6">{nameToWords}:</Typography>

          <Typography variant="body1">{lastValue.current}</Typography>
        </KeyValueWrapper>
      )}

      {!isEditing ? (
        <IconButton color="primary" size="small" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
      ) : (
        <ButtonsWrapper>
          <IconButton color="success" size="small" onClick={handleConfirm}>
            <CheckIcon />
          </IconButton>

          <IconButton color="error" size="small" onClick={handleCancel}>
            <CloseIcon />
          </IconButton>
        </ButtonsWrapper>
      )}
    </ContentWrapper>
  );
};
