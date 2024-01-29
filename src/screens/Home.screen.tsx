import React, { useContext } from "react";
import { Text, Button, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

import Container from "../components/Core/Container";
import { Badge } from "../components/Core/Badge";
import { DialogBox } from "../components/Core/DialogBox";
import { BlockQuote } from "../components/Core/BlockQuote";
import { Alert } from "../components/Core/Alert";
import { UIContext } from "../store/context";
import Card from "../components/Core/Card";
import Avatar from "../components/Core/Avatar";

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
      <Button title="Show Prompt" onPress={() => updatePromptModalOpen(true)} />
      <Alert
        message="Enter a value:"
        visible={promptModalOpen}
        onClose={() => updatePromptModalOpen(false)}
        variant="prompt"
        // promptValue={promptValue}
      />

      <Container>
        <Text className="font-bold text-lg">Avatar</Text>
        <View className="items-center justify-center flex-row ">
          <View className="flex-1 items-center justify-center">
            <Avatar
              size={70}
              shape="circle"
              onClick={() => {
                console.log("Avathar Clicked");
              }}
            />
            <Text className="pt-2"> Default</Text>
          </View>
          <View className="flex-1 items-center justify-center">
            <Avatar
              uri={require("../../assets/sampleprofilepic.png")}
              size={70}
              shape="circle"
              onClick={() => {
                console.log("Avathar Clicked");
              }}
            />
            <Text className="pt-2"> Uploaded image </Text>
          </View>
        </View>
      </Container>

      <Container>
        <Text className="font-bold text-lg">Card</Text>
        <Card
          title="Card Title"
          headingBackgroundColor="bg-[#AC7D88]"
          width="w-[170]"
          headerTextColor="text-[#fff]"
        >
          <View className=" items-center justify-center">
            <Avatar
              uri={require("../../assets/sampleprofilepic.png")}
              size={100}
              shape="circle"
              onClick={() => {
                console.log("Avathar Clicked");
              }}
            />
          </View>
          <View className="py-4">
            <Text>This is a text from Flex Component</Text>
          </View>
        </Card>
      </Container>
    </ScrollView>
  );
};
export default HomeScreen;
