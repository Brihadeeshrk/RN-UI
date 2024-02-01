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
import { Skeleton } from "../components/Core/Skeleton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Toast from "../components/Core/Toast";
import Checkbox from "../components/Core/Checkbox";
import TextArea from "../components/Core/TextArea";
import SwitchComponent from "../components/Core/SwitchComponent";
import Heading from "../components/Core/heading";
import Dropdown from "../components/Core/Dropdown";
import ProgressBar from "../components/Core/ProgressBar";
import CustomSlider from "../components/Core/CustomSlider";
import CircularProgress from "../components/Core/CircularProgress";
import SearchBar from "../components/Core/SearchBar";





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

  // Checkbox State
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  //TextArea State
  const [text, setText] = useState("");

  //SearchBar
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Perform search operation with the query
  };

//CustomSlider
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  // Dropdown state
  const [selectedValue, setSelectedValue] = useState("option1");


  const items = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

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

      <Container>
        <Text className="font-bold text-lg">Skeleton</Text>
        <Skeleton height={150} width={wp(80)} />
      </Container>

      <Container>
        <Text className="font-bold text-lg">Toast</Text>
        <Toast />
      </Container>
      <Container>
        <Text className="font-bold text-lg">Checkbox</Text>
        <View className="flex-row justify-between pt-3">
          <View>
            <Checkbox
              checked={true}
              onPress={handlePress}
              label="Small"
              checkedColor="#CD5C08"
              size="small"
            />
          </View>
          <View>
            <Checkbox
              checked={false}
              onPress={handlePress}
              label="Medium"
              checkedColor="#CD5C08"
              size="medium"
            />
          </View>
          <View>
            <Checkbox
              checked={true}
              onPress={handlePress}
              label="Large"
              checkedColor="#CD5C08"
              size="large"
            />
          </View>
        </View>
      </Container>

      <Container>
        <Text className="font-bold text-lg">TextArea</Text>
        <TextArea
          placeholder="Type your message..."
          onValueChange={setText}
          value={text}
        />
      </Container>

      <Container>
        <Text className="font-bold text-lg">Switch</Text>
        <View className="p-3 justify-between flex-row ">
          <View>
            <SwitchComponent
              trackColor={{ false: "#D1D5DB", true: "#5cb85c" }}
              thumbColor={{ false: "#F9FAFB", true: "#294B29" }}
              value={true}
            />
          </View>
          <View>
            <SwitchComponent
              trackColor={{ false: "#D1D5DB", true: "#5cb85c" }}
              thumbColor={{ false: "#F9FAFB", true: "#294B29" }}
              value={false}
            />
          </View>
          <View>
            <SwitchComponent
              trackColor={{ false: "#D1D5DB", true: "#F3D7CA" }}
              thumbColor={{ false: "#F9FAFB", true: "#0B60B0" }}
              value={true}
            />
          </View>
        </View>
      </Container>
      <Container>
        <Text className="font-bold text-lg">Heading</Text>
        <Heading text="This is heading" />
      </Container>
      <Container>
        <Text className="font-bold text-lg">Dropdown</Text>
        <View className="p-3">
          <Dropdown
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            items={items}
            style="rounded-3xl"
          />
        </View>
      </Container>

      <Container>
      <Text className="font-bold text-lg">ProgressBar</Text>
        <ProgressBar min={0} max={100} progress={40}/>
      </Container>

      <Container>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Home Screen</Text>

{/* Use the CustomSlider component */}
<CustomSlider
  min={0}
  max={100}
  step={1}
  onValueChange={handleSliderChange}
/>

<Text style={{ fontSize: 18, marginTop: 20 }}>Slider Value: {sliderValue}</Text>
      </Container>

      <Container>
        <Text className="font-bold text-lg">Circular Progress</Text>
        <CircularProgress radius={60} strokeWidth={10} progress={75} />
      </Container>

      <Container>
        <Text className="font-bold text-lg">SearchBar Example</Text>
        {/* Example usage of SearchBar */}
        <SearchBar onSearch={handleSearch} />
      </Container>

      

      

    </ScrollView>
  );
};
export default HomeScreen;
