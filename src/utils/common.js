export const getShortTest = (text) => {
  if (text.length > 20) {
    return `${text.substring(0, 20)}...`;
  }
  return text;
};

export const CHART_COLOR_LIST = ['#00A99D', '#F7931E', '#E93922', '#7C90A9', '#A7B7CB', '#CCCCCC', '#333333', '#70A4A1', '#416585', '#6A6A6A'];
export const CHART_COLOR = {
  1: CHART_COLOR_LIST[0],
  2: CHART_COLOR_LIST[1],
  3: CHART_COLOR_LIST[2],
  4: CHART_COLOR_LIST[3],
  5: CHART_COLOR_LIST[4],
  6: CHART_COLOR_LIST[5],
  7: CHART_COLOR_LIST[6],
  8: CHART_COLOR_LIST[7],
  9: CHART_COLOR_LIST[8],
  10: CHART_COLOR_LIST[9]
};
