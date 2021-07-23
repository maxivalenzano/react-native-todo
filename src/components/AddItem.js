import React, { useContext, useState } from "react";
import { TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from "react-native-modal-datetime-picker";
import Store from "../context/store";
import styled from "styled-components";
import moment from "moment";
import ModalSelector from "react-native-modal-selector";

const AddItem = ({ navigation }) => {
  const { dispatch } = useContext(Store);

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      task: "",
      deadline: "",
      start: "",
      end: "",
      remind: "",
      repeat: "",
    },
  });
  const onSubmitData = (data) => {
    dispatch({ type: "ADD", payload: data });
    resetForm();
    navigation.goBack("");
  };

  const resetForm = () => {
    reset({
      task: "",
      deadline: "",
      start: "",
      end: "",
      remind: "",
      repeat: "Daily",
    });
  };

  const initDate = new Date();
  const [pickerDate, setPickerDate] = useState(initDate);
  const [visibleDate, setVisibleDate] = useState(false);

  const [pickerStart, setPickerStart] = useState(new Date());
  const [visibleStart, setVisibleStart] = useState(false);

  const [pickerEnd, setPickerEnd] = useState(new Date());
  const [visibleEnd, setVisibleEnd] = useState(false);

  console.log("errors", errors);

  const valuesRemind = [
    { key: 1, label: "5 minutes" },
    { key: 2, label: "10 minutes" },
    { key: 3, label: "15 minutes" },
    { key: 4, label: "30 minutes" },
    { key: 5, label: "60 minutes" },
  ];
  const valuesRepeat = [
    { key: 1, label: "Daily" },
    { key: 2, label: "Weekly" },
    { key: 3, label: "Monthly" },
  ];

  return (
    <ComponentContainer>
      <TextLabel>Title</TextLabel>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <ComponentPressable>
            <TextInput
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          </ComponentPressable>
        )}
        name="task"
        rules={{ required: true }}
      />
      {errors.task && <ErrorText>This is required.</ErrorText>}
      <TextLabel>Deadline</TextLabel>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <>
            <ComponentPressable
              returnKeyType="next"
              onPress={() => {
                setVisibleDate(true);
              }}
            >
              <TextLabel>
                {!!value ? `${moment(value).format("DD-MM-YYYY")}` : ""}
              </TextLabel>
            </ComponentPressable>
            <DateTimePicker
              locale="es-ar"
              display="spinner"
              isVisible={visibleDate}
              testID="dateTimePicker"
              date={pickerDate}
              mode="date"
              onCancel={() => setVisibleDate(false)}
              minimumDate={initDate}
              onConfirm={(date) => {
                setVisibleDate(false);
                setPickerDate(date);
                onChange(date);
              }}
            />
          </>
        )}
        name="deadline"
        rules={{ required: true }}
      />
      {errors.deadline && <ErrorText>This is required.</ErrorText>}

      <GridView>
        <GridItem>
          <TextLabel>Start time</TextLabel>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <>
                <ComponentPressableTime
                  returnKeyType="next"
                  onPress={() => {
                    setVisibleStart(true);
                  }}
                >
                  <TextLabel>
                    {!!value ? `${moment(value).format("hh:mm A")}` : ""}
                  </TextLabel>
                </ComponentPressableTime>
                <DateTimePicker
                  locale="es-ar"
                  display="spinner"
                  isVisible={visibleStart}
                  testID="dateTimePicker"
                  date={pickerStart}
                  mode="time"
                  onCancel={() => setVisibleStart(false)}
                  minimumDate={
                    pickerDate.setHours(0, 0, 0, 0) <=
                    initDate.setHours(0, 0, 0, 0)
                      ? new Date()
                      : null
                  }
                  onConfirm={(date) => {
                    setVisibleStart(false);
                    setPickerStart(date);
                    onChange(date);
                  }}
                />
              </>
            )}
            name="start"
            rules={{ required: true }}
          />
          {errors.start && <ErrorText>This is required.</ErrorText>}
        </GridItem>
        <GridItem>
          <TextLabel>End time</TextLabel>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <>
                <ComponentPressableTime
                  returnKeyType="next"
                  onPress={() => {
                    setVisibleEnd(true);
                  }}
                >
                  <TextLabel>
                    {!!value ? `${moment(value).format("hh:mm A")}` : ""}
                  </TextLabel>
                </ComponentPressableTime>
                <DateTimePicker
                  locale="es-ar"
                  display="spinner"
                  isVisible={visibleEnd}
                  testID="dateTimePicker"
                  date={pickerEnd}
                  mode="time"
                  onCancel={() => setVisibleEnd(false)}
                  minimumDate={pickerStart}
                  onConfirm={(date) => {
                    setVisibleEnd(false);
                    setPickerEnd(date);
                    onChange(date);
                  }}
                />
              </>
            )}
            name="end"
            rules={{ required: true }}
          />
          {errors.end && <ErrorText>This is required.</ErrorText>}
        </GridItem>
      </GridView>
      <TextLabel>Remind</TextLabel>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <ComponentPressable>
            <ModalSelector
              data={valuesRemind}
              initValue="Choose one"
              onChange={(option) => {
                onChange(option.label);
              }}
            >
              <TextInput
                // editable={false}
                placeholder="Choose one"
                value={value}
              />
            </ModalSelector>
          </ComponentPressable>
        )}
        name="remind"
        rules={{ required: true }}
      />

      {errors.remind && <ErrorText>This is required.</ErrorText>}
      <TextLabel>Repeat</TextLabel>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <ComponentPressable>
            <ModalSelector
              data={valuesRepeat}
              initValue="Choose one"
              onChange={(option) => {
                onChange(option.label);
              }}
            >
              <TextInput
                // editable={false}
                placeholder="Choose one"
                value={value}
              />
            </ModalSelector>
          </ComponentPressable>
        )}
        name="repeat"
        rules={{ required: true }}
      />
      {errors.repeat && <ErrorText>This is required.</ErrorText>}

      <ButtonContainer>
        <SubmitButton onPress={handleSubmit(onSubmitData)}>
          <TextButton>Create a Task</TextButton>
        </SubmitButton>
      </ButtonContainer>
    </ComponentContainer>
  );
};

const GridView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const GridItem = styled.View`
  flex-direction: column;
`;

const ErrorText = styled.Text`
  color: red;
`;

const ComponentPressable = styled.Pressable`
  height: 45px;
  background-color: whitesmoke;
  display: flex;
  margin-top: 2px;
  border-radius: 20px;
  padding-left: 10px;
  justify-content: center;
`;

const ComponentPressableTime = styled.Pressable`
  width: 150px;
  height: 45px;
  background-color: whitesmoke;
  display: flex;
  margin-top: 2px;
  border-radius: 20px;
  padding-left: 10px;
  justify-content: center;
`;

const ComponentContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding-top: 10px;
  padding: 30px;
  background-color: #ffffff;
`;

const InputContainer = styled.View`
  flex-direction: row;
  border-radius: 20px;
`;

const Input = styled.TextInput`
  font-size: 20px;
  background-color: white;
  width: 300px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
`;

const SubmitButton = styled.Pressable`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
const ButtonContainer = styled.View`
  color: white;
  margin-top: 40px;
  height: 40px;
  background-color: #00bb2d;
  border-radius: 20px;
`;
const TextButton = styled.Text`
  color: white;
  margin: 10px;
  margin-left: 0px;
`;

const TextLabel = styled.Text`
  color: black;
  margin: 10px;
  margin-left: 0px;
`;

export default AddItem;
