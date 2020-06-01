import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCogs } from '@fortawesome/free-solid-svg-icons';
import { faStickyNote } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const iconMap = {
  Home: faHome,
  Dashboard: faStickyNote,
  Settings: faCogs,
};

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function TabBarButton({
  routeName, onPress, onLongPress, title, accessibilityLabel, ...restProps
}) {
  console.log('restProps: ', restProps);

  // const { options } = descriptors[route.key];

  // const label = options.tabBarLabel !== undefined
  //   ? options.tabBarLabel
  //   : options.title !== undefined
  //     ? options.title
  //     : route.name;

  // const isFocused = state.index === index;

  // const onPress = () => {
  //   const event = navigation.emit({
  //     type: 'tabPress',
  //     target: route.key,
  //     canPreventDefault: true,
  //   });

  //   if (!isFocused && !event.defaultPrevented) {
  //     navigation.navigate(route.name);
  //   }
  // };

  // const onLongPress = () => {
  //   navigation.emit({
  //     type: 'tabLongPress',
  //     target: route.key,
  //   });
  // };

  return (
    <StyledView>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        onPress={onPress}
        onLongPress={onLongPress}
        style={{ flex: 1 }}
      >
        <FontAwesomeIcon icon={iconMap[routeName]} size={29} />
        <Text>
          {title}
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        accessibilityRole="button"
        accessibilityStates={isFocused ? ['selected'] : []}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={{ flex: 1 }}
      >
        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
          {label}
        </Text>
      </TouchableOpacity> */}
    </StyledView>
  );
}

TabBarButton.propTypes = {
  routeName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
