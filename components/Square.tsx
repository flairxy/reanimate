import { View, Text } from 'react-native';
import React from 'react';
import { N, SQUARE_SIZE } from '@/constants/Index';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface SquareProps {
  index: number;
  progress: SharedValue<number>;
}

const Square = ({ index, progress }: SquareProps) => {
  const offsetAngle = (2 * Math.PI) / N;
  const finalAngle = offsetAngle * (N - 1 - index);

  const rotate = useDerivedValue(() => {
    if (progress.value < 2 * Math.PI) {
      return Math.min(finalAngle, progress.value);
    }
    if (progress.value - 2 * Math.PI < finalAngle) {
      return finalAngle;
    }
    return progress.value;
  }, []);

  const translateY = useDerivedValue(() => {
    if (rotate.value === finalAngle) {
      return withSpring(-N * SQUARE_SIZE);
    }
    if (progress.value > 2 * Math.PI)
      return withTiming((index - N) * SQUARE_SIZE);
    return withTiming(-index * SQUARE_SIZE);
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotate.value}rad` },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <Animated.View
      key={index}
      style={[
        {
          height: SQUARE_SIZE,
          aspectRatio: 1,
          backgroundColor: '#FFF',
          position: 'absolute',
          transform: [
            { rotate: `${finalAngle}rad` },
            { translateY: -index * SQUARE_SIZE },
          ],
        },
        rStyle,
      ]}
    />
  );
};

export default Square;
