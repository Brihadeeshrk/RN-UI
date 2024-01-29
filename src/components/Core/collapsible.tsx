import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { tw } from 'nativewind';

const CollapsibleComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={tw('flex-1 items-center justify-center')}>
      <TouchableOpacity onPress={toggleCollapse}>
        <Text style={tw('text-lg font-bold mb-2')}>
          {isCollapsed ? 'Show' : 'Hide'} Content
        </Text>
      </TouchableOpacity>

      {!isCollapsed && (
        <View style={tw('bg-gray-200 p-3 rounded')}>
          <Text>This is collapsible content.</Text>
        </View>
      )}
    </View>
  );
};

export default CollapsibleComponent;