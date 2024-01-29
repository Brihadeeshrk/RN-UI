import React from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
export interface AvatarProps {
  uri?: string | number;
  size?: number;
  shape?: "circle" | "rounded" | "square";
  onClick?: () => void;
}
const defaultAvatar = require("../../../assets/defaultAvatar.png");

const Avatar: React.FC<AvatarProps> = ({
  uri,
  size = 50,
  shape = "circle",
  onClick = () => {},
}) => {
  const styles = StyleSheet.create({
    image: {
      width: size,
      height: size,
      borderRadius:
        shape === "circle" ? size / 2 : shape === "rounded" ? 10 : 0,
    },
  });

  let imageSource: ImageSourcePropType;
  if (uri) {
    imageSource = typeof uri === "string" ? { uri } : uri;
  } else {
    imageSource = defaultAvatar;
  }

  return (
    <TouchableOpacity onPress={onClick} activeOpacity={0.7}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
    </TouchableOpacity>
  );
};

export default Avatar;

//  <View className="pt-2">
//    <Avatar
//      //uri="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/GoldenMedows.jpg/640px-GoldenMedows.jpg"
//      //uri={require("./assets/sampleprofilepic.png")}
//      size={100}
//      shape="circle"
//      onClick={handleAvatarClick}
//    />
//  </View>;
