export default ({ config }) => {
  const IS_DEV = process.env.BUILD_PROFILE === 'development';
  const IS_PREVIEW = process.env.BUILD_PROFILE === 'preview';

  const getUniqueIdentifier = () => {
    if (IS_DEV) {
      return 'com.sabali.PhotoBomb.dev';
    }

    if (IS_PREVIEW) {
      return 'com.sabali.PhotoBomb.preview';
    }

    return 'com.sabali.PhotoBomb';
  };

  const getAppName = () => {
    if (IS_DEV) {
      return 'PhotoBomb (Dev)';
    }

    if (IS_PREVIEW) {
      return 'PhotoBomb (Preview)';
    }

    return 'PhotoBomb: Emoji Stickers';
  };

  return {
    expo: {
      name: getAppName(),
      slug: "PhotoBomb",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/icon.png",
      userInterfaceStyle: "light",
      splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#25292e",
      },
      ios: {
        "buildNumber": "1",
        supportsTablet: true,
        bundleIdentifier: getUniqueIdentifier(),
      },
      android: {
        "versionCode": "1",
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#ffffff",
        },
        package: getUniqueIdentifier(),
      },
      web: {
        favicon: "./assets/favicon.png",
      },
      extra: {
        IS_DEV,
        IS_PREVIEW,
        eas: {
          projectId: "b14bc15c-4261-4b23-863a-3ec5b415f39f",
        },
      },
      owner: "sabali",
    },
  };
};
