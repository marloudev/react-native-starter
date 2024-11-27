import React from "react";
import { Text, TextInput, View } from "react-native";

export default function Input({
  onChange,
  value,
  required,
  name,
  label,
  type,
}) {
  return (
    <View className="w-full">
      <View className="relative">
        <TextInput
          secureTextEntry={type === "password"}
          className={`peer  text-black placeholder-transparent w-full rounded-sm py-3 px-5 border-gray-500 border bg-white focus-within:outline-none focus-within:border-blue-500 ${
            required ? "border-red-500" : ""
          }`}
          name={name}
          value={value}
          onChangeText={onChange}
        />

        <View
          htmlFor={name}
          className="absolute ml-2 px-2.5 transition-all rounded-xl bg-white text-blue-black/60 text-sm -top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2.5 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white"
        >
          <Text>{label}</Text>
        </View>
      </View>
      {required && (
        <Text className="text-red-500 text-sm mt-1">
          This field is required.
        </Text>
      )}
    </View>
  );
}
