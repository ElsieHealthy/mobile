import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Colors} from '../../Colors';
import {Font} from '../../Fonts';
import {XIconWithCircle} from '../../icons/XIconWithCircle';
import {Pressable} from '../Button/Pressable';
import {Text} from '../Text';
import {closeIconSize, styles} from './commonStyles';

interface CommonModalProps {
  show: boolean;
  title: string;
  type: 'danger' | 'success' | 'info';
  description?: string;
  buttonPrimaryText?: string;
  buttonOnCloseText?: string;
  onSuccess?: () => void;
  onClose?: () => void;
  isFullScreen?: boolean;
  buttonLoading?: boolean;
  closeIcon?: boolean;
  headerIcon?: boolean;
}

export const CommonModal = ({
  show,
  type,
  onSuccess,
  onClose,
  title,
  description,
  buttonPrimaryText,
  buttonOnCloseText,
  buttonLoading,
  isFullScreen = false,
  closeIcon = false,
}: CommonModalProps) => {
  const applyStyleContainer = () => {
    switch (type) {
      case 'danger':
        return {...styles(isFullScreen).container, ...styles().dangerTheme};
      default:
        return {...styles(isFullScreen).container};
    }
  };

  const renderCloseIcon = () => {
    if (!closeIcon) {
      return <View style={styles(isFullScreen).closeButton} />;
    }

    return (
      <Pressable onPress={onClose}>
        <View style={styles(isFullScreen).closeButton}>
          <XIconWithCircle size={closeIconSize} />
        </View>
      </Pressable>
    );
  };

  const renderDescription = () =>
    description && <Text style={styles().subTitle}>{description}</Text>;

  const renderHeader = () => {
    return (
      <View style={styles(isFullScreen).headerContainer}>
        <Text
          style={{
            ...styles(isFullScreen).title,
            ...stylesBaseModal.title,
          }}>
          {title}
        </Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles(isFullScreen).footer}>
        {onSuccess && (
          <Pressable
            isSubmitting={buttonLoading}
            style={[
              styles().footerButton,
              {
                backgroundColor: Colors.Secondary.LightRose,
              },
            ]}
            onPress={() => onSuccess()}>
            <Text style={styles().buttonText}>{buttonPrimaryText}</Text>
          </Pressable>
        )}
        {onClose && (
          <Pressable
            isSubmitting={buttonLoading}
            style={[
              styles().footerButton,
              {
                backgroundColor: Colors.Primary.Grey,
              },
            ]}
            onPress={onClose}>
            <Text style={styles().buttonSecondary}>{buttonOnCloseText}</Text>
          </Pressable>
        )}
      </View>
    );
  };

  return (
    <Modal
      hardwareAccelerated
      isVisible={show}
      onBackdropPress={onClose}
      hideModalContentWhileAnimating
      style={isFullScreen && styles().modalStyle}>
      <View style={applyStyleContainer()}>
        {renderCloseIcon()}
        {renderHeader()}
        {renderDescription()}
        {renderFooter()}
      </View>
    </Modal>
  );
};

const stylesBaseModal = StyleSheet.create({
  title: {
    fontWeight: 'normal',
    fontFamily: Font.Medium,
  },
});
