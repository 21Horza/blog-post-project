// DEPRECATED ICONS
import { useSelector } from 'react-redux';
import MainIconDeprecated from '@/shared/assets/icons/main-icon.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about-icon.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-icon.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article-deprecated.svg';
// REDESIGNED ICONS
import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

export const useSidebarItems = () => {
  const userData = useSelector(getUserAuthData);
  const sidebarItemList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => MainIconDeprecated,
        on: () => MainIcon,
      }),
      text: 'Main',
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => AboutIconDeprecated,
        on: () => AboutIcon,
      }),
      text: 'About',
    },
  ];

  // for auth users
  if (userData) {
    sidebarItemList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ProfileIconDeprecated,
          on: () => ProfileIcon,
        }),
        text: 'Profile',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ArticleIconDeprecated,
          on: () => ArticleIcon,
        }),
        text: 'Articles',
        authOnly: true,
      },
    );
  }

  return sidebarItemList;
};
