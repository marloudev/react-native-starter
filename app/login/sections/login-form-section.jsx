import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Input from "../../_components/input";
import Buttons from "../../_components/button";

export default function LoginFormSection({ navigation }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function submit_event(params) {
    console.log('waaa')
    navigation.navigate('Portal')
  }
  return (
    <View className="flex w-full h-screen items-center justify-center  gap-5 bg-white">
      <View className="px-3 w-full flex flex-col gap-5">
        <Input
          onChange={(value) =>
            setForm({
              ...form,
              email: value,
            })
          }
          value={form.email ?? ""}
          required={false}
          name="email"
          label="Email"
          type="text"
        />
        <Input
          onChange={(value) =>
            setForm({
              ...form,
              password: value,
            })
          }
          value={form.password ?? ""}
          // required={error?.app_id ? true : false}
          name="password"
          label="Password"
          type="password"
        />
        <Buttons loading={false} onClick={submit_event} title="SUBMIT" />
      </View>
    </View>
  );
}
