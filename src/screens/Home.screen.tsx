import React, { useContext } from "react";
import { Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { BlockQuote } from "../components/Core/BlockQuote";
import { Alert } from "../components/Core/Alert";
import { UIContext } from "../store/context";
import Container from "../components/Core/Container";
import { Badge } from "../components/Core/Badge";
import { DialogBox } from "../components/Core/DialogBox";
import { Accordion } from "../components/Core/Accordion";
import { Calendar } from "../components/Core/Calendar";
import Avatar from "../components/Core/Avatar";
import Button from "../components/Core/Button";
import Card from "../components/Core/Card";

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
    <ScrollView className="p-5" contentContainerStyle={{ paddingBottom: 50 }}>
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
        <Button onPress={() => updateAlertModalOpen(true)}>Show Alert</Button>
        <Alert
          message="This is an alert message."
          visible={alertModalOpen}
          onClose={() => updateAlertModalOpen(false)}
        />

        <Button onPress={() => updatePromptModalOpen(true)}>Show Prompt</Button>
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
        <Button onPress={() => updateDialogModalOpen(true)}>Show Dialog</Button>
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

      <Container>
        <Text className="font-bold text-lg ">Accordion</Text>
        <Accordion title="Section 1">
          <Text>This is the content of section 1.</Text>
          <Badge text="New" backgroundColor="bg-blue-500" />
        </Accordion>
        <Accordion title="Section 2">
          <Text>This is the content of section 2.</Text>
        </Accordion>
        <Accordion title="Section 3">
          <Text>This is the content of section 3.</Text>
        </Accordion>
      </Container>

      <Container>
        <Text className="font-bold text-lg ">Calendar</Text>
        <Calendar />
      </Container>

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
        <Text className="font-bold text-lg ">Button</Text>
        <Button
          size="medium"
          color="bg-[#AC7D88]"
          onPress={() => {
            console.log("Button-Clicked");
          }}
          textColor="text-[#fff]"
          borderRadius="2xl"
          //variant="outline"
        >
          Press me
        </Button>
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
