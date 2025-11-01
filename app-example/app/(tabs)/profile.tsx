import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function ProfileScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFE4E1', dark: '#2D1B1B' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#FF6B6B"
          name="person.circle.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">프로필</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">내 정보</ThemedText>
        <ThemedText>
          여기에 사용자 정보를 표시할 수 있어요.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">설정</ThemedText>
        <ThemedText>
          앱 설정을 관리할 수 있는 화면이에요.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerImage: {
    color: '#FF6B6B',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
});