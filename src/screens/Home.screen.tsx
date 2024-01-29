import React, { useContext, useState } from "react";
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
import RadioButton from "../components/Core/RadioButton";

const HomeScreen: React.FC = () => {
  const {
    alertModalOpen,
    updateAlertModalOpen,
    promptModalOpen,
    updatePromptModalOpen,
    dialogModalOpen,
    updateDialogModalOpen,
  } = useContext(UIContext);
  const [selectedGender, setSelectedGender] = useState("Male");
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
        <Text className="font-bold text-lg ">Button</Text>
        <Button
          size="medium"
          color="bg-[#99BC85]"
          onPress={() => {
            console.log("Button-Clicked");
          }}
          textColor="text-[#fff]"
          borderRadius="rounded-3xl"
        >
          Button
        </Button>
      </Container>

      <Container>
        <Text className="font-bold text-lg">Alert and Prompt Modals</Text>
        <View className="flex-row">
          <View className="flex-1 m-3 ">
            <Button
              color="bg-[#474F7A]"
              textColor="text-[#fff]"
              borderRadius="rounded-3xl"
              onPress={() => updateAlertModalOpen(true)}
            >
              Show Alert
            </Button>
          </View>
          <View className="flex-1 m-3">
            <Button
              color="bg-[#474F7A]"
              textColor="text-[#fff]"
              borderRadius="rounded-3xl"
              onPress={() => updatePromptModalOpen(true)}
            >
              Show Prompt
            </Button>
          </View>
        </View>
        <Alert
          message="This is an alert message."
          visible={alertModalOpen}
          onClose={() => updateAlertModalOpen(false)}
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
        <Text className="font-bold py-3 ">Shapes</Text>
        <View>
          <View className="items-center justify-center flex-row ">
            <View className="flex-1 items-center justify-center">
              <Avatar size={70} shape="circle" />
              <Text className="pt-2"> Circle</Text>
            </View>
            <View className="flex-1 items-center justify-center">
              <Avatar size={70} shape="rounded" />
              <Text className="pt-2"> Rounded </Text>
            </View>
            <View className="flex-1 items-center justify-center">
              <Avatar
                size={70}
                shape="square"
                onClick={() => {
                  console.log("Avathar Clicked");
                }}
              />
              <Text className="pt-2"> Square </Text>
            </View>
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
          onCardPress={() => {
            console.log("card-clicked");
          }}
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
            <Text>This is a sample text </Text>
          </View>
        </Card>
      </Container>

      <Container>
        <Text className="font-bold text-lg">Radio Buttons</Text>
        <View className="mt-3">
          <RadioButton
            label="Male"
            checked={selectedGender === "Male"}
            onPress={() => setSelectedGender("Male")}
            checkedColor="#7E2553"
          />
          <RadioButton
            label="Female"
            checkedColor="#7E2553"
            checked={selectedGender === "Female"}
            onPress={() => setSelectedGender("Female")}
          />
        </View>
        <Text className="font-bold ">Sizes</Text>
        <View className="flex-row justify-between mt-3 ">
          <View>
            <RadioButton
              checked={true}
              size="small"
              label="Small"
              checkedColor="#6C22A6"
            />
          </View>
          <View>
            <RadioButton
              checked={true}
              size="medium"
              label="Medium"
              checkedColor="#6C22A6"
            />
          </View>
          <View>
            <RadioButton
              checked={true}
              size="large"
              label="Large"
              checkedColor="#6C22A6"
            />
          </View>
        </View>
      </Container>
    </ScrollView>
  );
};
export default HomeScreen;
