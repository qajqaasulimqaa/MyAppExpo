import { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export default function AlertModal({ isOpen, onClose, title, message }: AlertModalProps) {
  useEffect(() => {
    if (isOpen) {

        const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);


return (
<Modal
      visible={isOpen}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.emoji}>⚠️</Text>
            <Text style={styles.title}>{title}</Text>
          </View>
          
          <Text style={styles.message}>{message}</Text>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>Got it!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({ overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer:{
    width: 300,
    padding: 20,
  },
  header:{
    flexDirection: 'row',
    color: '#ad2617',
  }, 
  emoji:{
    width: 30,
    height: 30,
  },
  title:{
    fontSize: 18,
    color: '#ad2617',
  }, 
  message:{
    color: '#ad2617',
    fontSize: 16,
  }, 
    button:{
    backgroundColor: '#ad2617',
    padding: 10, 
    borderRadius: 5
    },
    buttonText:{
    color: 'white',
    fontWeight: 'bold',
    }
}); 