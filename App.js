/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import StickyParalaxHeader from 'sticky-parallax-header';
import {Text} from 'react-native';

const App = () => (
  <React.Fragment>
    <StickyParalaxHeader
      // background={
      //   <Hero source={{uri: 'https://picsum.photos/seed/picsum/536/354'}} />
      // }
      headerSize={() => 100}
      header={<Text />}
      foreground={<Text>Some foreground</Text>}
    />
    {/* <StickyParalaxHeader headerType="TabbedHeader" /> */}
    {/* <StickyParalaxHeader headerType="AvatarHeader" /> */}
    {/* <StickyParalaxHeader headerType="DetailsHeader" /> */}
  </React.Fragment>
);
export default App;
