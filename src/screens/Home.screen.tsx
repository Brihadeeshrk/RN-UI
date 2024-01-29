import React, { useContext } from "react";
import { Text, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BlockQuote } from "../components/Core/BlockQuote";
import { Alert } from "../components/Core/Alert";
import { UIContext } from "../store/context";

const HomeScreen: React.FC = () => {
  const {
    alertModalOpen,
    updateAlertModalOpen,
    promptModalOpen,
    updatePromptModalOpen,
  } = useContext(UIContext);

  return (
    <ScrollView className="p-5 space-y-5">
      <Text className="font-bold text-lg">Blockquote</Text>
      <BlockQuote
        text="This is a block quote."
        author="John Doe"
        style="bg-gray-300 rounded-lg"
      />

      <Text className="font-bold text-lg">Alert and Prompt Modals</Text>
      <Button title="Show Alert" onPress={() => updateAlertModalOpen(true)} />
      <Alert
        message="This is an alert message."
        visible={alertModalOpen}
        onClose={() => updateAlertModalOpen(false)}
      />

      <Button title="Show Prompt" onPress={() => updatePromptModalOpen(true)} />
      <Alert
        message="Enter a value:"
        visible={promptModalOpen}
        onClose={() => updatePromptModalOpen(false)}
        variant="prompt"
        // promptValue={promptValue}
      />
    </ScrollView>
  );
};
export default HomeScreen;
