import React, { useCallback } from 'react';
import { DropResult } from 'react-beautiful-dnd';

import { DragAndDrop, Draggable } from 'components/DragAndDrop';
import { Field } from 'components/Field';
import { DefaultInput } from 'components/Inputs';
import { NumberInput } from 'components/Inputs/NumberInput';
import { Add24M, Close24M } from 'icons';
import { Button } from 'ui/Button';
import { Text } from 'ui/Text';

import { useForm } from './hooks';
import {
  FormStyled,
  FormFooterStyled,
  FormFieldsStyled,
  WordContainer,
  WordFieldStyled,
  DeleteWordIcon,
  AddWordIcon,
  FormBodyStyled,
} from './styled';
import { IFormData } from './types';
import { reorder } from './utils';

interface IFormProps {
  onSubmit: (formData: IFormData) => void;
}

export const Form: React.FC<IFormProps> = ({ onSubmit }) => {
  const {
    formData: { word, keyWords, width, depth },
    setFormData,
    changeWord,
    addWord,
    submitForm,
    deleteWord,
    canSubmit,
    canAddWord,
  } = useForm(onSubmit);

  const minD = 1;
  const minW = 2;
  const maxD = 4;
  const maxW = 5;

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination || result.destination.index === result.source.index) {
        return;
      }

      const updatedList = reorder(keyWords, result.source.index, result.destination.index);

      setFormData({ keyWords: updatedList });
    },
    [keyWords, setFormData],
  );

  return (
    <FormStyled>
      <FormBodyStyled>
        <FormFieldsStyled>
          <Text pb={4} pt={8} $variant="h5SemiBold">
            Укажите параметры графа
          </Text>
          <Field id="width" label="ширина графа">
            <NumberInput
              id="width"
              value={width}
              onChange={(value) => setFormData({ width: value })}
              onBlur={(value) => {
                if (value > maxW) setFormData({ width: maxW });
                else if (value < minW) setFormData({ width: minW });
                else setFormData({ width: value });
              }}
            />
          </Field>
          <Field id="depth" label="глубина графа">
            <NumberInput
              id="depth"
              value={depth}
              onChange={(value) => setFormData({ depth: value })}
              onBlur={(value) => {
                if (value > maxD) setFormData({ depth: maxD });
                else if (value < minD) setFormData({ depth: minD });
                else setFormData({ depth: value });
              }}
            />
          </Field>
        </FormFieldsStyled>
        <FormFieldsStyled>
          <Text pb={4} pt={8} $variant="h5SemiBold">
            Добавьте ключевые слова
          </Text>
          <Field id="key-word" label="новое слово">
            <WordFieldStyled>
              <DefaultInput id="key-word" onChange={changeWord} value={word} />
              <AddWordIcon onClick={addWord} disabled={!canAddWord}>
                <Add24M />
              </AddWordIcon>
            </WordFieldStyled>
          </Field>
        </FormFieldsStyled>
        <FormFieldsStyled>
          <Text pb={4} pt={8} $variant="h5SemiBold">
            Отсортируйте по приоритету
          </Text>
          {keyWords.length > 0 ? (
            <DragAndDrop id="key-words-drag-n-drop" onDragEnd={onDragEnd}>
              {keyWords.map((word, i) => (
                <Draggable id={`key-${i}`} key={i}>
                  <WordContainer>
                    <Text $variant="body1Regular">{word}</Text>
                    <DeleteWordIcon
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteWord(i);
                      }}
                    >
                      <Close24M />
                    </DeleteWordIcon>
                  </WordContainer>
                </Draggable>
              ))}
            </DragAndDrop>
          ) : (
            <i>
              <Text $color="textSecondary" $variant="body1Regular">
                Список ключевых слов пуст.
              </Text>
            </i>
          )}
        </FormFieldsStyled>
      </FormBodyStyled>
      <FormFooterStyled>
        <Button $size="m" onClick={submitForm} disabled={!canSubmit}>
          Построить граф
        </Button>
      </FormFooterStyled>
    </FormStyled>
  );
};
