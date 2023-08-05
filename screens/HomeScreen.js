import { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Switch,
  Alert,
} from 'react-native';
import { CheckBox, Input, Button, Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

const HomeScreen = () => {
  const [Height, setHeight] = useState('');
  const [gender, setGender] = useState('Male');
  const [showModal, setShowModal] = useState(false);

  const resetForm = () => {
    setGender('Male');
    setHikeIn(false);
    setDate(new Date());
    setShowCalendar(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.formRow}>
        <Input
          placeholder='Height'
          onChangeText={(text) => setHeight(text)}
          containerStyle={styles.formItem}
          color='white'
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.formLabel}>Gender:</Text>
        <Picker
          style={styles.formItem}
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label='Male' value={'Male'} color='white' />
          <Picker.Item label='Female' value={'Female'} color='white' />
        </Picker>
      </View>
      <View style={styles.formRow}>
        <Button
          onPress={() => handleHome()}
          title='Search Availability'
          color='#5637DD'
          accessabilityLabel='Tap me to calculate your stride.'
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  formLabel: {
    fontSize: 18,
    flex: 1,
    color: '#fff',
  },
  formItem: {
    flex: 1,
    color: '#fff',
  },
  contentContainer: {
    backgroundColor: '#110323',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default HomeScreen;
