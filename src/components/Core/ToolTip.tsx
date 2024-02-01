import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { PortalProvider } from '@gorhom/portal';
import Tooltip from 'react-native-tooltiplize';

interface ToolTipProps {
  newFeatureText: string;
  tooltipText: string;
}

const ToolTip: React.FC<ToolTipProps> = ({ newFeatureText, tooltipText }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleTooltip = useCallback(() => {
    setIsVisible((prevState) => !prevState);
  }, []);

  const renderContent = useCallback(() => {
    return (
      <TouchableOpacity style={styles.tooltipContainer} onPress={toggleTooltip}>
        <Text style={styles.tooltipText}>{tooltipText}</Text>
      </TouchableOpacity>
    );
  }, [toggleTooltip, tooltipText]);

  return (
    <PortalProvider>
      <View style={styles.container}>
        <Tooltip
          position="top"
          offset={8}
          renderContent={renderContent}
          isVisible={isVisible}
          withOverlay
          onDismiss={toggleTooltip}
          pointerStyle={styles.pointer}
          pointerColor="green"
        >
          <TouchableOpacity onPress={toggleTooltip} style={styles.newFeature}>
            <Text style={styles.newFeatureText}>{newFeatureText}</Text>
          </TouchableOpacity>
        </Tooltip>
      </View>
    </PortalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltipContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    backgroundColor: 'green',
  },
  tooltipText: {
    fontSize: 12,
    color: 'white',
  },
  pointer: {
    width: 16,
    height: 8,
  },
  newFeature: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  newFeatureText: {
    fontSize: 16,
  },
});

export default ToolTip;