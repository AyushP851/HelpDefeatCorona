import React from 'react';
import { View } from 'react-native';
import { IconButton, Button, Text, Badge, Portal, Modal } from 'react-native-paper';
import { globalStyles, colors } from '../styles/globalStyles'
import { ScrollView } from 'react-native-gesture-handler';
 
const MyModal = ({ visible, setVisible, badgeText,children, onPress, buttonText }) => {
  return (
    <Portal>
      <Modal
        visible={ visible }
        onDismiss={() => setVisible(!visible)}
        contentContainerStyle={{ backgroundColor: colors.background, margin: 20, padding: 15 }}
      >
        <View style={{ height: '100%' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconButton
              icon='close'
              size={ 30 }
              color={ colors.placeholder }
              onPress={() => setVisible(!visible)}
            />
            <View style={{ flex:1 }}></View>
            <Badge
              style={ globalStyles.badge }
              size={ 35 }
            >{ badgeText }</Badge>
          </View>
          <ScrollView showsVerticalScrollIndicator={ false }>
            { children }
          </ScrollView>
          <View style={{ flex: 1}}></View>
          <Button 
            mode='contained'
            style={ globalStyles.buttonStyle }
            onPress={ onPress }
          >
            { buttonText }
          </Button>
        </View>
      </Modal>
    </Portal>
  )
}

export default MyModal