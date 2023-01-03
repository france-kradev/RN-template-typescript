import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { theme } from 'src/constants/theme';
import Home from 'src/components/home/home';
import AppStatusBar from 'src/components/statusbar/statusbar';
import Explore from 'src/components/explore/explore';
import Documents from 'src/components/documents/documents';
import Cases from 'src/components/cases/cases';
import Profile from 'src/components/profile/profile';

type BottomNavigationInterface = {
  key: string;
  title: string;
  focusedIcon: string;
  unfocusedIcon?: string;
  color?: string;
};

function Main() {
  const [index, setIndex] = React.useState(0);

  const routes: BottomNavigationInterface[] = [
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'explore', title: 'Explore', focusedIcon: 'compass', unfocusedIcon: 'compass-outline' },
    { key: 'documents', title: 'Documents', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'cases', title: 'Cases', focusedIcon: 'file-document', unfocusedIcon: 'file-document-outline' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    explore: Explore,
    documents: Documents,
    cases: Cases,
    profile: Profile,
  });

  return (
    <>
      <AppStatusBar />
      <BottomNavigation
        shifting={false}
        barStyle={{
          backgroundColor: theme.white,
        }}
        activeColor={theme.primaryColor}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
}

export default Main;
