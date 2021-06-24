/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type SessionType = {
  session_id: string;
  date: string;
  available_capacity: number;
  min_age_limit: number;
  vaccine: string;
};
