import React from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Colors} from '../../../Colors';
const {width} = Dimensions.get('screen');
const chartWidth = width - 56;
const data = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2,
    },
  ],
};

export const PregnantPrediction = () => {
  return (
    <LineChart
      data={data}
      width={chartWidth}
      height={chartWidth * 0.7}
      withInnerLines={false}
      withVerticalLines={false}
      withHorizontalLines={false}
      withShadow={true}
      style={{
        paddingLeft: 8,
        paddingRight: 8,
      }}
      chartConfig={{
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(0,0, 0, ${opacity})`,
        labelColor: (opacity = 1) => Colors.Primary.Black,
        propsForDots: {
          r: '6',
          strokeWidth: '2',
          stroke: Colors.Primary.Purple,
          fill: Colors.Primary.White,
        },
      }}
    />
  );
};
