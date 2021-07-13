import * as React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { changeBackground } from '../redux_config/actions';

const { width, height } = Dimensions.get('window');

const Screen1 = ({ backgroundColor, changeBackground, navigation }) => {
  const [text, onChangeText] = React.useState('');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
      }}>
      <TextInput
        style={{
          backgroundColor: 'white',
          margin: 20,
          padding: 50,
          fontSize: 40,
          textAlign: 'center',
        }}
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity onPress={() => changeBackground(text.toLowerCase())}>
        <View style={{ margin: 20, backgroundColor: 'white' }}>
          <Text style={{ textAlign: 'center', padding: 10 }}>
            Change Background Color
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Screen2')}>
        <View style={{ margin: 20, backgroundColor: 'white' }}>
          <Text style={{ textAlign: 'center', padding: 10 }}>
            Goto Screen 2
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { backgroundColor } = state;
  return { backgroundColor };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeBackground: (payload) => dispatch(changeBackground(payload)),
  };
};

const styles = StyleSheet.create({});

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);
