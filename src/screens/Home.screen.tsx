import React, { useContext } from "react";
import { Text, Button, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { BlockQuote } from "../components/Core/BlockQuote";
import { Alert } from "../components/Core/Alert";
import { UIContext } from "../store/context";
import Container from "../components/Core/Container";
import { Badge } from "../components/Core/Badge";
import { DialogBox } from "../components/Core/DialogBox";

const HomeScreen: React.FC = () => {
  const {
    alertModalOpen,
    updateAlertModalOpen,
    promptModalOpen,
    updatePromptModalOpen,
    dialogModalOpen,
    updateDialogModalOpen,
  } = useContext(UIContext);

  return (
    <ScrollView className="p-5">
      <Container>
        <Text className="font-bold text-lg">Blockquote</Text>
        <BlockQuote
          text="This is a block quote."
          author="John Doe"
          style="bg-gray-300 rounded-lg"
        />
      </Container>

      <Container>
        <Text className="font-bold text-lg">Alert and Prompt Modals</Text>
        <Button title="Show Alert" onPress={() => updateAlertModalOpen(true)} />
        <Alert
          message="This is an alert message."
          visible={alertModalOpen}
          onClose={() => updateAlertModalOpen(false)}
        />

        <Button
          title="Show Prompt"
          onPress={() => updatePromptModalOpen(true)}
        />
        <Alert
          message="Enter a value:"
          visible={promptModalOpen}
          onClose={() => updatePromptModalOpen(false)}
          variant="prompt"
        />
      </Container>

      <Container>
        <Text className="font-bold text-lg ">Badge</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Badge text="New" backgroundColor="bg-blue-500" />
          <Badge text="Updated" backgroundColor="bg-green-500" />
          <Badge text="Deleted" backgroundColor="bg-red-500" />
        </View>
      </Container>

      <Container>
        <Text className="font-bold text-lg ">Dialog Box</Text>
        <Button
          title="Show Dialog"
          onPress={() => updateDialogModalOpen(true)}
        />
        <DialogBox
          visible={dialogModalOpen}
          onClose={() => updateDialogModalOpen(false)}
        >
          <TextInput
            placeholder="This is an Input Field"
            className="p-3 border border-gray-400 rounded-lg mt-5 mb-5 w-full"
          />
          <Text>This is the content of the dialog box.</Text>
        </DialogBox>
      </Container>
    </ScrollView>
  );
};
export default HomeScreen;
