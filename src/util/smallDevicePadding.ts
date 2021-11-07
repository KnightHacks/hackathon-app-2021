import { Dimensions } from 'react-native';

// Determines padding for scroll view content depending on device size.
// Not the best implementation in my opinion since we arbitrarily determine
// that a device is "small" if it's height is less than 1200 pixels.

export function scrollPadding() {
  return Dimensions.get('screen').height <= 1200 ? { paddingBottom: 400 } : {};
}
