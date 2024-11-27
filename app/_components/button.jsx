import React from "react";
import { View, Button,Text } from "react-native";

export default function Buttons({  onClick, loading, title }) {
  return (
    <Button
      disabled={loading}
      onPress={onClick}
      className={`px-4 py-2 flex gap-2 bg-blue-500 text-white rounded hover:bg-blue-700`}
      title={title}
    >
      {loading && <Text>Loading...</Text>}
      {/* <View>{children}</View> */}
    </Button>
  );
}
